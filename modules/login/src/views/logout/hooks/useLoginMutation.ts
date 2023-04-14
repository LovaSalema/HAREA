import { useGraphqlMutation } from "@mzara/component"

export const useLogoutMutation = () => {
    return useGraphqlMutation(LOGOUT)
}


export const LOGOUT = `
    mutation {
        logout
    }
`
