import { useTranslations } from "@mzara/component"
import { useEffect } from "react"
import { useLogoutMutation } from "../hooks/useLoginMutation"

const LogoutContainer = () => {

    const [
        LOADING,
        SUCCESS,
        ERROR,
    ] = useTranslations(i18n)
    const logoutMutation = useLogoutMutation()
    useEffect(() => {
        logoutMutation.mutate({}, {
            onSuccess: () => {
                window.location.href = '/'
            }
        })
    }, [])

    return (
        <h4>
            {
                logoutMutation.isLoading && LOADING
            }

            {
                logoutMutation.isSuccess && SUCCESS
            }

            {
                logoutMutation.isError && ERROR
            }
        </h4>
    )
}

export default LogoutContainer

const i18n = [
    'Generic.Auth.Logout.Loading.label',
    'Generic.Auth.Logout.Success.label',
    'Generic.Auth.Logout.Error.label'
]
