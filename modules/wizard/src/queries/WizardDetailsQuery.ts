import { TWizard } from "@mzara/graphql"
import { GraphQLQueryClass } from "@mzara/component"

export class WizardDetailsQuery implements GraphQLQueryClass<TWizard, TResponse> {
    public queryKey: string = 'App.Bo.WizardDetailsQuery.Details'

    public gql: string = `
        query WizardDetailsQuery(
                $id: Float
            ) {
            wizard (filter: { id: $id }) {
                id wizardKey type title value comment
                tags { id value }
            }
        }
    `

    variables?: any

    constructor(variables?: any) {
        this.variables = variables
    }

    mapFn(data: TResponse): TWizard {
        return data.wizard
    }
}

export type TResponse = {
    wizard: TWizard
}
