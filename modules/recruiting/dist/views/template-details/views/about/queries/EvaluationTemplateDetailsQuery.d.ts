import { GraphQLQueryClass } from "@mzara/component";
import { TEvaluationTemplate } from "@mzara/graphql";
export declare class EvaluationTemplateDetailsQuery implements GraphQLQueryClass<TEvaluationTemplate, TResponse> {
    queryKey: string;
    gql: string;
    variables?: any;
    constructor(variables?: any);
    mapFn(data: TResponse): TEvaluationTemplate;
}
export declare type TResponse = {
    evaluationTemplate: TEvaluationTemplate;
};
//# sourceMappingURL=EvaluationTemplateDetailsQuery.d.ts.map