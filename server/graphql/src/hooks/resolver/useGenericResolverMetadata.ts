import { initEntities } from "@_types/Entities"
import { useMetadataStorage } from "@_types/metadata/useMetadataStorage"
import _ from "lodash"

export const useGenericResolverMetadata = (className: string) => {
    const metadataStorage = useMetadataStorage()

    if (_.isEmpty(metadataStorage.fields)) {
        initEntities()
    }

    const metadata = metadataStorage.getClassMetadata(className)
    if (!metadata) {
        throw 'UNKNOWN_CLASS_NAME'
    }

    return metadata
}
