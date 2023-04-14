import { ControlList, Dialog, GenericSuspense, Step, useListGraphqlQuery, useTranslationRoute, useTranslations, useUrlParamsValue } from "@mzara/component"
import { USER_ORGANISATION_LIST_ID } from "views/organisation/containers/UserOrganisation"
import { useCallback } from "react"
import { To, useNavigate, useParams } from "react-router-dom"
import { useUserOrganisationEditForm } from "../hooks/useUserOrganisationEditForm"

const UserOrganisationEdit = (props: UserOrganisationEditProps) => {

    const [
        TITLE
    ] = useTranslations(i18n)
    const { id } = useParams()
    const translationRoute = useTranslationRoute()
    const steps = useUserOrganisationEditForm()
    const navigate = useNavigate()
    const { invalidateQuery } = useListGraphqlQuery(USER_ORGANISATION_LIST_ID)

    const closeDialog = useCallback(() => {
        navigate(-1 as To, { replace: true })
        invalidateQuery()
    }, [])

    const handleStepFinished = (value: Record<string, any>) => {
        invalidateQuery()
        navigate(translationRoute(`/user/organisation/${value.id}`))
    }

    return (
        <Dialog open title={TITLE} onDismiss={() => closeDialog()}>
            <GenericSuspense>
                <Step 
                    steps={steps}
                    defaultValue={[{ id }, { id }]}
                    onStepFinished={handleStepFinished} 
                    />
            </GenericSuspense>
        </Dialog>
    )
}

type UserOrganisationEditProps = {
    clone?: boolean
}

const i18n = [
    'Generic.UserOrganisation.Edit.Dialog.title',
]

export default UserOrganisationEdit
