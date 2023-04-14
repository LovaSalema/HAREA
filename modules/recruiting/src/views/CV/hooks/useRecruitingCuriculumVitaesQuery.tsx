import { useGraphqlQuery } from "@mzara/component";
import { TRecruitingCuriculumVitaesResponse } from "@mzara/graphql";
import { RecruitingCuriculumVitaesQuery } from "../query/RecruitingCuriculumVitaesQuery";

export const useRecruitingCuriculumVitaesQuery = (suspense?: boolean) =>{
    return useGraphqlQuery<RecruitingCuriculumVitaesQuery, TRecruitingCuriculumVitaesResponse>(new RecruitingCuriculumVitaesQuery(), {suspense});
}