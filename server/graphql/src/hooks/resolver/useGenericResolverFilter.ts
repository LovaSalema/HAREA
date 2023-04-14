import { TFilter } from "@_types/base/TFilter";
import { useMetadataStorage } from "@_types/metadata/useMetadataStorage";
import _ from "lodash";
import { Between, In, LessThan, LessThanOrEqual, Like, MoreThan, MoreThanOrEqual } from "typeorm";
import { useGenericResolverMetadata } from "./useGenericResolverMetadata";

export const useGenericResolverFilter = (className: string, data?: TFilter): FilterResult | undefined => {

    const metadataStorage = useMetadataStorage()
    const metadata = useGenericResolverMetadata(className)

    const getIdFilter = () => {
        return {
            where: { id: data?.id },
            relations: {}
        }
    }

    const getFilters = () => {
        let result = getFilter(data?.data)

        if (data?.key) {
            const searchKeys = Object.keys(metadata.fields)
                .filter((key) => metadata.fields[key].searchable !== false)
                .map((key) => metadata.fields[key].field)
            const filter = searchKeys.reduce((all: Record<string, any>, key: string) => {
                return {
                    ...all,
                    [`${key}_like`]: data.key
                }
            }, {})
            result = {
                ...result,
                ...getFilter(filter)
            }
        }

        return result
    }

    const getFilterTypeORM = (key: string, value: any, filter: string) => {

        if (filter === 'like') {
            return { [key]: Like(`%${value}%`) }
        } else if (['in', 'among'].includes(filter)) {
            return { [key]: In(value) }
        } else if (filter === 'sup') {
            return { [key]: MoreThan(value) }
        } else if (filter === 'supOrEquals') {
            return { [key]: MoreThanOrEqual(value) }
        } else if (filter === 'inf') {
            return { [key]: LessThan(value) }
        } else if (filter === 'infOrEquals') {
            return { [key]: LessThanOrEqual(value) }
        } else if (filter === 'between') {
            return { [key]: Between(value[0], value[1]) }
        }

        return {
            [key]: value
        }
    }

    const getFilter = (data?: Record<string, any>) => {
        const result: FilterResult = {
            where: {},
            relations: {}
        }

        if (!data) {
            return result
        }

        Object.keys(data || {}).forEach((key, index) => {
            const value = data[key]
            const [_field, filter] = key.split('_')
            const fieldMetadata = metadataStorage.getFieldMetadata(className, _field)

            if (fieldMetadata?.searchable === false) {
                return;
            }

            if (fieldMetadata?.relation && Array.isArray(value)) {
                result.relations = {
                    ...result.relations,
                    [_field]: true
                }
                result.where = {
                    ...result.where,
                    [_field]: value.map((item) => getFilter(item))
                }
            }

            if (fieldMetadata?.relation && _.isObject(value)) {
                result.relations = {
                    ...result.relations,
                    [_field]: true
                }
                result.where = {
                    ...result.where,
                    [_field]: getFilter(value)?.where
                }
                return;
            }
            
            result.where = {
                ...result.where,
                ...getFilterTypeORM(_field, value, filter),
            }
        })

        // Clear empty filter
        result.where = _.omitBy(result.where, (item) => (_.isObject(item) || _.isArray(item)) && _.isEmpty(item))

        return result
    }

    if (data?.id) {
        return getIdFilter()
    }

    return getFilters()
}

type GetFilterParams = GetFilterSQLParams & {
    filter: string
    value?: string
}

type GetFilterSQLParams = {
    column: string
    variableKey?: string
    sign?: string
    prefix?: string
}

type FilterResult = {
    where: Record<string, any>
    relations: Record<string, any>
}

type GenericResolverFilterResult = {
    variables: Record<string, any>
    sql: string
}
