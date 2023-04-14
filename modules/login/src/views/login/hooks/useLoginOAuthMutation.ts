import { useGraphqlMutation } from "@mzara/component"

export const useLoginOAuthMutation = () => {
    return useGraphqlMutation(OAUTH)
}

export const OAUTH = `
mutation oauth(
    $auth_type: String!, 
    $id: String,
    $id_token: String!
) {
    oauth(
        data: {
            auth_type: $auth_type, 
            id: $id,
            id_token: $id_token
        }
    )
}
`
