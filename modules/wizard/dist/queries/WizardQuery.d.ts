import { TWizard } from "@mzara/graphql";
import { GraphQLQueryClass } from "@mzara/component";
export declare class WizardQuery implements GraphQLQueryClass<TWizard, TResponse> {
    queryKey: string;
    gql: string;
    variables?: any;
    constructor(variables?: any);
    mapFn(data: TResponse): TWizard;
}
export declare type TResponse = {
    wizard: TWizard;
};
//# sourceMappingURL=WizardQuery.d.ts.map