import { GraphQLQueryClass } from "@mzara/component";
import { TEvaluation, TEvaluationsResponse } from "@mzara/graphql";

export class EvaluationsQuery implements GraphQLQueryClass<TEvaluationsResponse, TResponse>{
    public queryKey: string = 'App.Harea.EvaluationsQuery';
    public gql: string = `
        query EvaluationQuery($email: String){
            evaluations(filter: {data: {email: $email}}){
                total
                data{
                    id evaluationTemplate {id title}
                }
            }
        }
    `;
    variables?: any;
    constructor(variables?: any) {
        this.variables = variables
    }
    mapFn(data: TResponse):TEvaluationsResponse {
        return {
            total: data.evaluations.total,
            data: data.evaluations.data
        }
    }
}

export type TResponse = {
    evaluations: {
        total: number,
        data: Array<TEvaluation>
    }
}