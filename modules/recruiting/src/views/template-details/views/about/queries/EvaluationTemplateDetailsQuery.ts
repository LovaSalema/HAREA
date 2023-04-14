import { GraphQLQueryClass } from "@mzara/component";
import { TEvaluationTemplate } from "@mzara/graphql";

export class EvaluationTemplateDetailsQuery implements GraphQLQueryClass<TEvaluationTemplate, TResponse> {
    public queryKey: string = 'App.Harea.EvaluationTemplateDetailsQuery';
    public gql: string = `
        query EvaluationTemplateDetails($id: Float){
            evaluationTemplate(filter: {id: $id}){
                id title description isPublic tags{value color} evaluations{
                    id
                }
            }
        }
    `;
    variables?: any;
    constructor(variables?: any) {
        this.variables = variables
    }
    mapFn(data: TResponse): TEvaluationTemplate {
        return data.evaluationTemplate
    };
}

export type TResponse = {
    evaluationTemplate: TEvaluationTemplate
}