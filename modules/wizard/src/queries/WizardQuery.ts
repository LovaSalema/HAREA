import { TWizard } from "@mzara/graphql"
import { GraphQLQueryClass } from "@mzara/component"

export class WizardQuery implements GraphQLQueryClass<TWizard, TResponse> {
    public queryKey: string = 'App.Bo.WizardQuery.Details'

    public gql: string = `
        query WizardQuery(
                $wizardKey: String!
            ) {
            wizard (filter: { data: { wizardKey_equals: $wizardKey } }) {
                id type value
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
