import { useGraphqlQuery } from "@mzara/component"
import { TUserOrganisation } from "@mzara/graphql"
import { UserOrganisationOwnerQuery } from "../queries/UserOrganisationOwnerQuery"

export const useUserOrganisationOwnerQuery = (suspense?: boolean) => {
    return useGraphqlQuery<UserOrganisationOwnerQuery, TUserOrganisation>(new UserOrganisationOwnerQuery(), { suspense })
}
