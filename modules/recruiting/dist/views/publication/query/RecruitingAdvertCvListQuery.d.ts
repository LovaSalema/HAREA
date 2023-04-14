import { GraphQLQueryClass } from "@mzara/component";
import { TRecruitingCuriculumVitaesResponse } from "@mzara/graphql";
export declare class RecruitingAdvertCvListQuery implements GraphQLQueryClass<TRecruitingCuriculumVitaesResponse, TResponse> {
    queryKey: string;
    gql: string;
    variables?: any;
    constructor(variables?: any);
    mapFn(data: TResponse): TRecruitingCuriculumVitaesResponse;
}
export declare type TResponse = {
    recruitingAdvert: {
        cvs: {
            total: number;
            data: TRecruitingCuriculumVitaesResponse;
        };
    };
};
//# sourceMappingURL=RecruitingAdvertCvListQuery.d.ts.map