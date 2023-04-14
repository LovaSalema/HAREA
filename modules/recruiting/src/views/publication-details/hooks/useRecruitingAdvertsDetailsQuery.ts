import { useGraphqlQuery } from "@mzara/component"
import { RecruitingAdvertsDetailsQuery } from "../../publication-details/query/RecruitingAdvertsDetailsQuery"

export const useRecruitingAdvertsDetailsQuery = (id?: number, suspense?: boolean) => {
    return useGraphqlQuery(new RecruitingAdvertsDetailsQuery({id}), {enabled: id !== undefined,suspense})
}