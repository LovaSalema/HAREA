import { useGraphqlQuery } from "@mzara/component"
import { EvaluationTemplateDetailsQuery } from "../queries/EvaluationTemplateDetailsQuery"

export const useEvaluationTemplateDetailsQuery = (id: number, suspense: boolean) => {
    return useGraphqlQuery(new EvaluationTemplateDetailsQuery({id}), {enabled: id !== undefined, suspense})
}