import { GraphQLQueryClass } from "@mzara/component";
import { TRecruitingAdvert } from "@mzara/graphql";
export declare class RecruitingAdvertsDetailsQuery implements GraphQLQueryClass<TRecruitingAdvert, TResponseAvdertDetails> {
    queryKey: string;
    gql: string;
    variables?: any;
    constructor(variables?: any);
    mapFn(data: TResponseAvdertDetails): TRecruitingAdvert;
}
export declare type TResponseAvdertDetails = {
    recruitingAdvert: TRecruitingAdvert;
};
//# sourceMappingURL=RecruitingAdvertsDetailsQuery.d.ts.map