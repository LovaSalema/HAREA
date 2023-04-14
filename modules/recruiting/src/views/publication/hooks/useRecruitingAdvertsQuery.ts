import { useGraphqlQuery } from "@mzara/component"
import { TRecruitingAdvert, TRecruitingAdvertsResponse } from "@mzara/graphql"
import { RecruitingAdvertsQuery } from "../query/RecruitingAdvertsQuery"

export const useRecruitingAdvertsQuery = (suspense?: boolean) => {
    return useGraphqlQuery<RecruitingAdvertsQuery, TRecruitingAdvertsResponse>(new RecruitingAdvertsQuery(), {suspense})
}