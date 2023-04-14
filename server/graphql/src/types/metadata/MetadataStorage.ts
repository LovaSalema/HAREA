
export class MetadataStorage {

    fields: MetadataFields = {}

    constructor () {}

    private initFields = (className: string) => {
        if (!this.fields[className]) {
            this.fields[className] = {
                name: '',
                className,
                fields: {}
            }
        }
    }

    getClassMetadata = (className: string) => {
        return this.fields[className]
    }

    getFieldMetadata = (className: string, field: string) => {
        return this.fields[className].fields?.[field]
    }

    getClassMetadataByName = (name: string) => {
        const key = Object.keys(this.fields).find((key) => this.fields[key].name === name)
        return this.fields[key]
    }

    collectClassMetadata = (className: string, metadata: MetadataClassParams) => {
        this.initFields(className)
        this.fields[className] = {
            ...this.fields[className],
            ...metadata
        }
    }

    collectFieldMetadata = (className: string, alias: string, field: MetadataField) => {
        this.initFields(className)
        this.fields[className].fields[alias] = {
            ...this.fields[className].fields[alias],
            ...field
        }
    }

    mergeFields = (className: string, importedClassName: string) => {
        this.initFields(className)
        this.fields[className].fields = {
            ...(this.fields[importedClassName]?.fields || {}),// Todo : debug
            ...this.fields[className].fields
        }
    }

}

type MetadataFields = {
    [className: string]: MetadataClassParams
}

export type MetadataClassParams = {
    name?: string
    className?: string
    entity?: any
    /** This is internal fields */
    fields?: {
        [field: string]: MetadataField
    }
}

export type MetadataField = {
    field: string
    relation?: string
    readonly?: boolean
    searchable?: boolean
}

