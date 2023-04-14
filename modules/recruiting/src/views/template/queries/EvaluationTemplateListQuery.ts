import { GraphQLQueryClass } from "@mzara/component";
import { TEvaluationTemplate, TEvaluationTemplatesResponse } from "@mzara/graphql";

export class EvaluationTemplateListQuery implements GraphQLQueryClass<TEvaluationTemplatesResponse, TResponse> {
    public queryKey: string = 'App.Harea.Evalutation.EvalutionTemplateListQuery';
    public gql: string = `
        query EvaluationTemplateListQuery(
            $pageSize: Float,
            $page: Float,
            $data: JSONObject
        ){
            evaluationTemplates(filter: {
                data: $data,
                pageSize: $pageSize,
                page: $page
            }) {
                total
                data {
                    id title description isPublic tags{id value color} evaluations{id}
                }
            }
        }
    `;

    variables?: any;

    constructor(variables?: any) {
        this.variables = variables
    }
    mapFn(data: TResponse): TEvaluationTemplatesResponse{
        return {
            total: data.evaluationTemplates.total,
            data: data.evaluationTemplates.data
        }
    };
}

export type TResponse = {
    evaluationTemplates: {
        total: number,
        data: Array<TEvaluationTemplate>
    }
}