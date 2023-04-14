import { useGraphqlMutation, useTranslation } from "@mzara/component"

export const useLoginMutation = () => {

    const t = useTranslation()

    return useGraphqlMutation(LOGIN, {
        transformErrorMessage: (e) => {
            if (e.message === 'FAIL') {
                return t('std_password_does_match_err')
            }
            return undefined
        }
    })
}


export const LOGIN = `
mutation login($userName: String!, $password: String!, $remember: Boolean!) {
    login(
        data: {
            userName: $userName, 
            password: $password, 
            remember: $remember
        }
    )
}
`
