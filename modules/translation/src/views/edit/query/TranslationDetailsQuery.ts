import { TTranslation } from "@mzara/graphql"
import { GraphQLQueryClass } from "@mzara/component"

export class TranslationDetailsQuery implements GraphQLQueryClass<TTranslation, TResponse> {
    public queryKey: string = 'App.Bo.TranslationDetailsQuery.Details'

    public gql: string = `
        query translationsQuery(
                $id: Float
            ) {
            translation (filter: { id: $id }) {
                id translationKey value comment
                appZoneDescriptor { id value }
                appNameDescriptor { id value }
                translationQualityDescriptor { id value }
            }
        }
    `

    variables?: any

    constructor(variables?: any) {
        this.variables = variables
    }

    mapFn(data: TResponse): TTranslation {
        return data.translation
    }
}

export type TResponse = {
    translation: TTranslation
}
