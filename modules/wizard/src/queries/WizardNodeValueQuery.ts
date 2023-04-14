import { TWizardNode } from "@mzara/graphql"
import { ControlListProps, GraphQLQueryClass } from "@mzara/component"

export class WizardNodeValueQuery implements GraphQLQueryClass<ControlListProps, TResponse> {
    public queryKey: string = 'App.Bo.WizardNodesValueQuery'

    public gql: string = `
        query WizardNodesValueQuery($id: Float) {
            wizardNode (filter: { id: $id }) { value }
        }
    `

    variables?: any

    constructor(variables?: any) {
        this.variables = variables
    }

    mapFn(data: TResponse): ControlListProps {
        return JSON.parse(data.wizardNode.value || '{}')
    }
}

export type TResponse = {
    wizardNode: TWizardNode
}
