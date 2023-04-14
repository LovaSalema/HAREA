import { TWizard, TWizardsResponse } from "@mzara/graphql";
import { GraphQLQueryClass } from "@mzara/component";
export declare class WizardsQuery implements GraphQLQueryClass<TWizardsResponse, TResponse> {
    queryKey: string;
    gql: string;
    variables?: any;
    constructor(variables?: any);
    mapFn(data: TResponse): TWizardsResponse;
}
export declare type TResponse = {
    wizards: {
        total: number;
        data: Array<TWizard>;
    };
};
//# sourceMappingURL=WizardsQuery.d.ts.map