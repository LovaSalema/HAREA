import { TWizardNode, TWizardNodesResponse } from "@mzara/graphql";
import { GraphQLQueryClass } from "@mzara/component";
export declare class WizardNodesQuery implements GraphQLQueryClass<TWizardNodesResponse, TResponse> {
    queryKey: string;
    gql: string;
    variables?: any;
    constructor(variables?: any);
    mapFn(data: TResponse): TWizardNodesResponse;
}
export declare type TResponse = {
    wizardNodes: {
        total: number;
        data: Array<TWizardNode>;
    };
};
//# sourceMappingURL=WizardNodesQuery.d.ts.map