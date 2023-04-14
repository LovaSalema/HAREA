import { TWizardNode } from "@mzara/graphql"
import { GraphQLQueryClass } from "@mzara/component"

export class WizardNodesMetadataQuery implements GraphQLQueryClass<Array<TWizardNode>, TResponse> {
    public queryKey: string = 'App.Bo.WizardNodesMetadataQuery'

    public gql: string = `
        query WizardNodesMetadataQuery($ids: [Float]) {
            wizardNodes (filter: {
                data: {
                    id_among: $ids
                }
            }) {
                total
                data {
                    id nodeKey valueTitle
                }
            }
        }
    `

    variables?: any

    constructor(variables?: any) {
        this.variables = variables
    }

    mapFn(data: TResponse): Array<TWizardNode> {
        return data.wizardNodes.data
    }
}

export type TResponse = {
    wizardNodes: {
        total: number,
        data: Array<TWizardNode>
    }
}
