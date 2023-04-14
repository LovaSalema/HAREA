import { TWizard, TWizardNode } from "@mzara/graphql"
import { GraphQLQueryClass } from "@mzara/component"

export class WizardNodeDetailsQuery implements GraphQLQueryClass<TWizardNode, TResponse> {
    public queryKey: string = 'App.Bo.WizardNodeDetailsQuery.Details'

    public gql: string = `
        query WizardNodeDetailsQuery(
                $id: Float
            ) {
                wizardNode (filter: { id: $id }) {
                id nodeKey title description value comment
            }
        }
    `

    variables?: any

    constructor(variables?: any) {
        this.variables = variables
    }

    mapFn(data: TResponse): TWizardNode {
        return data.wizardNode
    }
}

export type TResponse = {
    wizardNode: TWizardNode
}
