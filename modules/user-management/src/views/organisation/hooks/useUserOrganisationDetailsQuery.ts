import { useGraphqlQuery } from "@mzara/component"
import { TUserOrganisation } from "@mzara/graphql"
import { UserOrganisationDetailsQuery } from "../queries/UserOrganisationQuery"

export const useUserOrganisationDetailsQuery = (id?: number, suspense?: boolean) => {
    return useGraphqlQuery<UserOrganisationDetailsQuery, TUserOrganisation>(new UserOrganisationDetailsQuery({ data: { id  } }), { enabled: id !== undefined, suspense })
}
