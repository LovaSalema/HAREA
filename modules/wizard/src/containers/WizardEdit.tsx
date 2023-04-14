import { ControlList, Dialog, GenericSuspense, useListGraphqlQuery, useTranslations, useUrlParamsValue } from "@mzara/component"
import { WIZARD_LIST_ID } from "containers/Wizard"
import { useCallback } from "react"
import { To, useNavigate, useParams } from "react-router-dom"
import { useWizardEditForm } from "../hooks/useWizardEditForm"

const WizardEdit = (props: WizardEditProps) => {

    const [
        TITLE
    ] = useTranslations(i18n)
    const { id } = useParams()
    const urlParams = useUrlParamsValue()
    const control = useWizardEditForm(id ? parseInt(id) : undefined)
    const navigate = useNavigate()
    const { invalidateQuery } = useListGraphqlQuery(WIZARD_LIST_ID)

    const closeDialog = useCallback(() => {
        navigate(-1 as To, { replace: true })
        invalidateQuery()
    }, [urlParams])

    return (
        <Dialog open title={TITLE} onDismiss={() => closeDialog()}>
            <GenericSuspense>
                <ControlList
                    {...control}
                    onBeforeSaving={props.clone ? (value) => ({ id: undefined, ...value }) : undefined}
                    onSubmited={() => closeDialog()}
                    onCancel={() => closeDialog()}
                />
            </GenericSuspense>
        </Dialog>
    )
}

type WizardEditProps = {
    clone?: boolean
}

const i18n = [
    'Bo.Wizard.Edit.Dialog.title',
]

export default WizardEdit
