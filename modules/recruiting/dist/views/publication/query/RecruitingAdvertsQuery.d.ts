import { GraphQLQueryClass } from "@mzara/component";
import { TRecruitingAdvert, TRecruitingAdvertsResponse } from "@mzara/graphql";
export declare class RecruitingAdvertsQuery implements GraphQLQueryClass<TRecruitingAdvertsResponse, TResponseAdverts> {
    queryKey: string;
    gql: string;
    variables?: any;
    constructor(variables?: any);
    mapFn(data: TResponseAdverts): TRecruitingAdvertsResponse;
}
export declare type TResponseAdverts = {
    recruitingAdverts: {
        total: number;
        data: Array<TRecruitingAdvert>;
    };
};
//# sourceMappingURL=RecruitingAdvertsQuery.d.ts.map