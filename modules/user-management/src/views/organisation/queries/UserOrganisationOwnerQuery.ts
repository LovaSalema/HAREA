import { TUserOrganisation } from "@mzara/graphql"
import { GraphQLQueryClass } from "@mzara/component"

export class UserOrganisationOwnerQuery implements GraphQLQueryClass<TUserOrganisation, TResponse> {
    public queryKey: string = 'App.Bo.UserOrganisationOwnerQuery.Details'

    public gql: string = `
        query UserOrganisationOwnerQuery {
            userOrganisation (filter: { data: {organisationKey: "ISA_SOLUTIONS"} }) {
                id
                roles { id descriptorKey translationKey }
            }
        }
    `

    mapFn(data: TResponse): TUserOrganisation {
        return data.userOrganisation
    }
}

export type TResponse = {
    userOrganisation: TUserOrganisation
}
