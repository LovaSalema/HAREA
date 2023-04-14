import { ControlList, Dialog, useListGraphqlQuery, useTranslationRoute, useUrlParamsEncode, useUrlParamsValue } from "@mzara/component"
import { useNavigate } from "react-router-dom"
import { EVALUATION_TEMPLATE_LIST } from "views/template/containers/TemplateContainer"
import { useCreateEvaluationTemplateForm } from "../hooks/useCreateEvaluationTemplateForm"

const CreateEvaluationTemplateContainer = () => {
    const controlAdd = useCreateEvaluationTemplateForm()
    const {invalidateQuery} = useListGraphqlQuery(EVALUATION_TEMPLATE_LIST)
    const navigate = useNavigate()
    const t = useTranslationRoute()
    const urlParams = useUrlParamsValue()
    const encodeUrl = useUrlParamsEncode()
    const closeDialog = () => {
        invalidateQuery()
        navigate(t(`recruiting/template?${encodeUrl(urlParams)}`))
    }
    return (
        <Dialog open onDismiss={() => closeDialog()} title='Ajouter un template'>
            <ControlList 
                {...controlAdd}
                onSubmited={() => closeDialog()}
            />
        </Dialog>
    )
}

export default CreateEvaluationTemplateContainer