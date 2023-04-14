import { TTranslation, TTranslationsResponse } from "@mzara/graphql"
import { GraphQLQueryClass } from "@mzara/component"

export class TranslationsQuery implements GraphQLQueryClass<TTranslationsResponse, TResponse> {
    public queryKey: string = 'App.Bo.TranslationsQuery'

    public gql: string = `
        query translationsQuery(
                $key: String,
                $pageSize: Float, 
                $page: Float,
                $sort: [TFilterSort!],
                $data: JSONObject
            ) {
            translations (filter: {
                key: $key,
                pageSize: $pageSize,
                page: $page,
                sort: $sort,
                data: $data
            }) {
                total
                data {
                    id translationKey value comment createdAt updatedAt isEditable isDeletable
                    language { translationKey value }
                    appName { translationKey }
                    quality { translationKey }
                }
            }
        }
    `

    variables?: any

    constructor(variables?: any) {
        this.variables = variables
    }

    mapFn(data: TResponse): TTranslationsResponse {
        return {
            total: data.translations.total,
            data: data.translations.data
        }
    }
}

export type TResponse = {
    translations: {
        total: number,
        data: Array<TTranslation>
    }
}
