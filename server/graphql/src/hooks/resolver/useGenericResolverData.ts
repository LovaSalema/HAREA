import { TFilter, TUser } from "@_types/base"
import { useMetadataStorage } from "@_types/metadata/useMetadataStorage"
import _ from "lodash"
import { FindManyOptions } from "typeorm"
import { useGenericResolverFilter } from "./useGenericResolverFilter"
import { useGenericResolverMetadata } from "./useGenericResolverMetadata"

export const useGenericResolverData = (className: string, filter?: TFilter) => {
    
    const metadata = useGenericResolverMetadata(className)
    const _entity = metadata.entity

    const getData = (returnOneElement?: boolean) => {
        const filterWhere = useGenericResolverFilter(className, filter)
        // fetch data using filterSQL
        let filterEntity: FindManyOptions = {
            ...filterWhere
        }

        if (filter?.sort) {
            filterEntity = {
                ...filterEntity,
                order: filter.sort.reduce((all, item) => {
                    return {
                        ...all,
                        [item.value]: item.sort
                    }
                }, {})
            }
        }

        if (filter?.page) {
            filterEntity = {
                ...filterEntity,
                skip: filter.page * (filter.pageSize || 0),
            }
        }
        
        if (filter?.pageSize) {
            filterEntity = {
                ...filterEntity,
                take: filter.pageSize
            }
        }

        if (returnOneElement) {
            return _entity.findOne(filterEntity)
        }
        
        return _entity.findAndCount(filterEntity)
    }

    return getData

}

