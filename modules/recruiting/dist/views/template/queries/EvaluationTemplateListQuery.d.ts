import { GraphQLQueryClass } from "@mzara/component";
import { TEvaluationTemplate, TEvaluationTemplatesResponse } from "@mzara/graphql";
export declare class EvaluationTemplateListQuery implements GraphQLQueryClass<TEvaluationTemplatesResponse, TResponse> {
    queryKey: string;
    gql: string;
    variables?: any;
    constructor(variables?: any);
    mapFn(data: TResponse): TEvaluationTemplatesResponse;
}
export declare type TResponse = {
    evaluationTemplates: {
        total: number;
        data: Array<TEvaluationTemplate>;
    };
};
//# sourceMappingURL=EvaluationTemplateListQuery.d.ts.map