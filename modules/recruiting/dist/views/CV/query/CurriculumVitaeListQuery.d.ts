import { GraphQLQueryClass } from "@mzara/component";
import { TRecruitingCuriculumVitae } from "@mzara/graphql";
import { TRecruitingCuriculumVitaesResponse } from "@mzara/graphql";
export declare class CurriculumVitaeListQuery implements GraphQLQueryClass<TRecruitingCuriculumVitaesResponse, TResponseCurriculumVitae> {
    queryKey: string;
    gql: string;
    variables?: any;
    constructor(variables?: any);
    mapFn(data: TResponseCurriculumVitae): TRecruitingCuriculumVitaesResponse;
}
export declare type TResponseCurriculumVitae = {
    recruitingCuriculumVitaes: {
        total: number;
        data: Array<TRecruitingCuriculumVitae>;
    };
};
//# sourceMappingURL=CurriculumVitaeListQuery.d.ts.map