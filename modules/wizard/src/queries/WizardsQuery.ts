import { TWizard, TWizardsResponse } from "@mzara/graphql"
import { GraphQLQueryClass } from "@mzara/component"

export class WizardsQuery implements GraphQLQueryClass<TWizardsResponse, TResponse> {
    public queryKey: string = 'App.Bo.WizardsQuery'

    public gql: string = `
        query WizardsQuery(
                $key: String,
                $pageSize: Float, 
                $page: Float,
                $sort: [TFilterSort!],
                $data: JSONObject
            ) {
            wizards (filter: {
                key: $key,
                pageSize: $pageSize,
                page: $page,
                sort: $sort,
                data: $data
            }) {
                total
                data {
                    id wizardKey type title comment createdAt updatedAt isEditable isDeletable
                    tags { value color }
                }
            }
        }
    `

    variables?: any

    constructor(variables?: any) {
        this.variables = variables
    }

    mapFn(data: TResponse): TWizardsResponse {
        return {
            total: data.wizards.total,
            data: data.wizards.data
        }
    }
}

export type TResponse = {
    wizards: {
        total: number,
        data: Array<TWizard>
    }
}
