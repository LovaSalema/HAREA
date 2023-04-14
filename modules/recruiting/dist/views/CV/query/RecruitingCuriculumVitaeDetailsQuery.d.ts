import { GraphQLQueryClass } from "@mzara/component";
import { TRecruitingCuriculumVitae } from "@mzara/graphql";
export declare class RecruitingCuriculumVitaeDetailsQuery implements GraphQLQueryClass<TRecruitingCuriculumVitae, TCvDetailsResponse> {
    queryKey: string;
    gql: string;
    variables?: any;
    constructor(variables?: any);
    mapFn(data: TCvDetailsResponse): TRecruitingCuriculumVitae;
}
export declare type TCvDetailsResponse = {
    recruitingCuriculumVitae: TRecruitingCuriculumVitae;
};
//# sourceMappingURL=RecruitingCuriculumVitaeDetailsQuery.d.ts.map