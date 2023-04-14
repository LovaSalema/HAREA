import { TWizard } from "@mzara/graphql";
import { GraphQLQueryClass } from "@mzara/component";
export declare class WizardDetailsQuery implements GraphQLQueryClass<TWizard, TResponse> {
    queryKey: string;
    gql: string;
    variables?: any;
    constructor(variables?: any);
    mapFn(data: TResponse): TWizard;
}
export declare type TResponse = {
    wizard: TWizard;
};
//# sourceMappingURL=WizardDetailsQuery.d.ts.map