import { useContextUser } from "@hooks/context/useContextUser"
import { TTranslation } from "@_types/bo"
import { useMetadataStorage } from "@_types/metadata/useMetadataStorage"
import _ from "lodash"

export const useGenericResolverSaveData = () => {

    const metadataStorage = useMetadataStorage()

    const saveObject = async (entityName: string, data: Record<string, any>) => {

        const classMetadata = metadataStorage.getClassMetadataByName(entityName)
        const objectKeys = Object.keys(data)
        if (objectKeys.length === 1 && objectKeys[0] === 'id') {
            return _.assign(new classMetadata.entity(), data)
        }

        let raw: any
        

        if (!classMetadata) {
            throw `Unknown entity : ${entityName}`
        }

        const _entity = classMetadata.entity

        if (!data.id) {
            if (_entity.canCreate?.() === false) {
                throw 'FORBIDDEN_CREATE'
            }

            const user = await useContextUser()
            raw = await _entity.create({
                userCreator: user
            })
        } else {
            raw = await _entity.findOne({ where: { id: data.id } })
            if (raw?.isEditable?.() === false) {
                throw 'FORBIDDEN_EDIT'
            }
        }

        if (data.skipSaving || classMetadata.name === 'descriptor') {
            return raw
        }
        
        // Save deep first update
        await Promise.all(
            Object.keys(data)
                .filter((key) => data[key] !== null && (Array.isArray(data[key]) || typeof data[key] === 'object'))
                .map(async (propertyName, index) => {
                    const fieldMetadata = metadataStorage.getFieldMetadata(classMetadata.className, propertyName)
                    const subClassMetadata = metadataStorage.getClassMetadata(fieldMetadata.relation)

                    if (!subClassMetadata) {
                        return;
                    }
                    raw[propertyName] = data[propertyName]
                    // const value = data[propertyName]
                    // if (Array.isArray(data[propertyName])) {
                    //     raw[propertyName] = await Promise.all(
                    //         value.map((item) => saveObject(subClassMetadata.name, { ...item, skipSaving: !_.isNil(item?.id) }))
                    //     )
                    // } else {
                    //     raw[propertyName] = await saveObject(subClassMetadata.name, value)
                    // }
                })
        )

        // Save top level props
        Object.keys(data)
                .filter((key) => !Array.isArray(data[key]) && typeof data[key] !== 'object')
                .filter((key) => {
                    const fieldMetadata = metadataStorage.getFieldMetadata(classMetadata.className, key)
                    return fieldMetadata !== undefined && fieldMetadata.readonly !== true
                })
                .forEach((key) => {
                    raw[key] = data[key]
                })

        await raw.save()
        return raw
    }

    return {
        saveObject
    }
}

export const DESCRIPTORS_REGEX = /Descriptor(?:s)?$/

export const LIST_OF_VALUES_REGEX = /Value(?:s)?$/

export const toUpperSnakeCase = (str: string) => {
    return _.startCase(str).replace(' ', '_').toUpperCase()
}
