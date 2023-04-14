import { BreadCrumbItemProps } from "@mzara/component";
import { useParams } from "react-router-dom";
import { useEvaluationTemplateDetailsQuery } from "../views/about/hooks/useEvaluationTemplateDetailsQuery";

export const useTemplateDetailsBreadCrumb = (): Array<BreadCrumbItemProps> => {
    const {id} = useParams()
    const {data} = useEvaluationTemplateDetailsQuery(parseInt(id), true)
    return [
        {
            label: 'Home'
        },
        {
            label: 'Evaluation'
        },
        {
            label: 'Template'
        },
        {
            label: data?.title
        }
    ]
}