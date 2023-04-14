import { MetadataField, MetadataStorage } from "./MetadataStorage"
import { useMetadataStorage } from "./useMetadataStorage"

export const Metadata = (metadata?: Omit<MetadataField, 'field'>) => {
    return (target: any, key: string) => {
        const metadataStorage: MetadataStorage = useMetadataStorage()
        metadataStorage.collectFieldMetadata(target.constructor.name, key, { ...metadata, field: key })
    }
}
