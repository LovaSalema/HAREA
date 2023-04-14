import { useGraphqlQuery } from "@mzara/component"
import { EvaluationsQuery } from "../queries/EvaluationsQuery"

export const useEvaluationQuery = (email?: string, suspense?: boolean) => {
    return useGraphqlQuery(new EvaluationsQuery({email}), {enabled: email !== undefined, suspense})
}