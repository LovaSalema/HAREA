import { useGraphqlQuery } from "@mzara/component"
import { UserDetailsQuery } from "../queries/UserDetailsQuery"

export const useUserDetailsQuery = (id?: number, suspense?: boolean) => {
    return useGraphqlQuery(new UserDetailsQuery({id}), {enabled: id !== undefined, suspense})
}