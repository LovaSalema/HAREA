import { GraphQLQueryClass } from "@mzara/component";
import { TRecruitingCuriculumVitae } from "@mzara/graphql";
import { TRecruitingCuriculumVitaesResponse } from "@mzara/graphql";
export declare class RecruitingCuriculumVitaesQuery implements GraphQLQueryClass<TRecruitingCuriculumVitaesResponse, TResponse> {
    queryKey: string;
    gql: string;
    variables?: any;
    constructor(variables?: any);
    mapFn?(data: TResponse): TRecruitingCuriculumVitaesResponse;
}
export declare type TResponse = {
    recruitingCuriculumVitaes: {
        total: number;
        data: Array<TRecruitingCuriculumVitae>;
    };
};
//# sourceMappingURL=RecruitingCuriculumVitaesQuery.d.ts.map