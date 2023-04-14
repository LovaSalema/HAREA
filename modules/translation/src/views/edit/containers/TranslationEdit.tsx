import { ControlList, Dialog, GenericSuspense, useListGraphqlQuery, useTranslationRoute, useTranslations, useUrlParamsEncode, useUrlParamsValue } from "@mzara/component"
import { TRANSLATION_LIST_ID } from "containers/Translation"
import { useCallback } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useTranslationEditForm } from "../hooks/useTranslationEditForm"

const TranslationEdit = (props: TranslationEditProps) => {

    const [
        TITLE
    ] = useTranslations(i18n)
    const { id } = useParams()
    const urlParams = useUrlParamsValue()
    const encodeUrl = useUrlParamsEncode()
    const control = useTranslationEditForm(id ? parseInt(id) : undefined)
    const navigate = useNavigate()
    const translatedRoute = useTranslationRoute()

    const { invalidateQuery } = useListGraphqlQuery(TRANSLATION_LIST_ID)

    const closeDialog = useCallback(() => {
        navigate(translatedRoute(`translation?${encodeUrl(urlParams)}`), { replace: true })
        invalidateQuery()
    }, [urlParams])

    return (
        <Dialog open title={TITLE} onDismiss={() => closeDialog()}>
            <GenericSuspense>
                <ControlList
                    {...control}
                    onBeforeSaving={props.clone ? (value) => ({ ...value, id: undefined }) : undefined}
                    onSubmited={() => closeDialog()}
                    onCancel={() => closeDialog()}
                />
            </GenericSuspense>
        </Dialog>
    )
}

type TranslationEditProps = {
    clone?: boolean
}

const i18n = [
    'Bo.Translation.Edit.Dialog.title',
]

export default TranslationEdit
