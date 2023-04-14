import { MetadataClassParams, MetadataStorage } from "./MetadataStorage"
import { useMetadataStorage } from "./useMetadataStorage"

export const MetadataClass = (metadata?: MetadataClassParams) => {
    return (target: any) => {
        const metadataStorage: MetadataStorage = useMetadataStorage()
        const inst = new target({})
        const className = inst.constructor.name
        metadataStorage.collectClassMetadata(className, {
            entity: target,
            name: '',
            ...(metadata || {})
        })
        var parentTarget = Object.getPrototypeOf(target.prototype).constructor.name
        if (parentTarget !== 'Object') {
            metadataStorage.mergeFields(className, parentTarget)
        }
    }
}
