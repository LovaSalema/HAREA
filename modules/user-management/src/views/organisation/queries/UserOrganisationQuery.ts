import { TUserOrganisation } from "@mzara/graphql"
import { GraphQLQueryClass } from "@mzara/component"

export class UserOrganisationDetailsQuery implements GraphQLQueryClass<TUserOrganisation, TResponse> {
    public queryKey: string = 'App.Bo.UserOrganisationDetailsQuery.Details'

    public gql: string = `
        query UserOrganisationDetailsQuery(
                $id: Float
            ) {
            userOrganisation (filter: { id: $id }) {
                id organisationKey designation userCount
                roles { id translationKey }
                groups { 
                    id groupKey designation comment userCount
                    users {
                        id userName fullName
                        groups { id designation  }
                    }
                }
                isEditable canUpdateRoles
            }
        }
    `

    variables?: any

    constructor(variables?: any) {
        this.variables = variables
    }

    mapFn(data: TResponse): TUserOrganisation {
        return data.userOrganisation
    }
}

export type TResponse = {
    userOrganisation: TUserOrganisation
}
