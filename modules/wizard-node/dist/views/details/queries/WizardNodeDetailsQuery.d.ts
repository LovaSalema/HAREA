import { TWizardNode } from "@mzara/graphql";
import { GraphQLQueryClass } from "@mzara/component";
export declare class WizardNodeDetailsQuery implements GraphQLQueryClass<TWizardNode, TResponse> {
    queryKey: string;
    gql: string;
    variables?: any;
    constructor(variables?: any);
    mapFn(data: TResponse): TWizardNode;
}
export declare type TResponse = {
    wizardNode: TWizardNode;
};
//# sourceMappingURL=WizardNodeDetailsQuery.d.ts.map