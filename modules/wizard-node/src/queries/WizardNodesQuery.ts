import { TWizardNode, TWizardNodesResponse } from "@mzara/graphql"
import { GraphQLQueryClass } from "@mzara/component"

export class WizardNodesQuery implements GraphQLQueryClass<TWizardNodesResponse, TResponse> {
    public queryKey: string = 'App.Bo.WizardsQuery'

    public gql: string = `
        query WizardNodesQuery(
                $key: String,
                $pageSize: Float, 
                $page: Float,
                $sort: [TFilterSort!],
                $data: JSONObject
            ) {
            wizardNodes (filter: {
                key: $key,
                pageSize: $pageSize,
                page: $page,
                sort: $sort,
                data: $data
            }) {
                total
                data {
                    id nodeKey title comment createdAt updatedAt isEditable isDeletable
                    tags { id color value }
                }
            }
        }
    `

    variables?: any

    constructor(variables?: any) {
        this.variables = variables
    }

    mapFn(data: TResponse): TWizardNodesResponse {
        return {
            total: data.wizardNodes.total,
            data: data.wizardNodes.data
        }
    }
}

export type TResponse = {
    wizardNodes: {
        total: number,
        data: Array<TWizardNode>
    }
}
