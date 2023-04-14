import { TWizardNode } from "@mzara/graphql";
import { ControlListProps, GraphQLQueryClass } from "@mzara/component";
export declare class WizardNodeValueQuery implements GraphQLQueryClass<ControlListProps, TResponse> {
    queryKey: string;
    gql: string;
    variables?: any;
    constructor(variables?: any);
    mapFn(data: TResponse): ControlListProps;
}
export declare type TResponse = {
    wizardNode: TWizardNode;
};
//# sourceMappingURL=WizardNodeValueQuery.d.ts.map