import { useGraphqlQuery } from "@mzara/component";
import { RecruitingCuriculumVitaeDetailsQuery } from "../query/RecruitingCuriculumVitaeDetailsQuery";

export const useCuriculumVitaeDetailsQuery = (id?: number, suspense?: boolean) => {
    return useGraphqlQuery( new RecruitingCuriculumVitaeDetailsQuery({id}), {enabled : id!==undefined, suspense})
}