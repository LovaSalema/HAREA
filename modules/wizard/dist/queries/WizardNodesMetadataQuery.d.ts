import { TWizardNode } from "@mzara/graphql";
import { GraphQLQueryClass } from "@mzara/component";
export declare class WizardNodesMetadataQuery implements GraphQLQueryClass<Array<TWizardNode>, TResponse> {
    queryKey: string;
    gql: string;
    variables?: any;
    constructor(variables?: any);
    mapFn(data: TResponse): Array<TWizardNode>;
}
export declare type TResponse = {
    wizardNodes: {
        total: number;
        data: Array<TWizardNode>;
    };
};
//# sourceMappingURL=WizardNodesMetadataQuery.d.ts.map