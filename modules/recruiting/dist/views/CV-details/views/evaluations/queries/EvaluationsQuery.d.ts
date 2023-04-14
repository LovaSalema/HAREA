import { GraphQLQueryClass } from "@mzara/component";
import { TEvaluation, TEvaluationsResponse } from "@mzara/graphql";
export declare class EvaluationsQuery implements GraphQLQueryClass<TEvaluationsResponse, TResponse> {
    queryKey: string;
    gql: string;
    variables?: any;
    constructor(variables?: any);
    mapFn(data: TResponse): TEvaluationsResponse;
}
export declare type TResponse = {
    evaluations: {
        total: number;
        data: Array<TEvaluation>;
    };
};
//# sourceMappingURL=EvaluationsQuery.d.ts.map