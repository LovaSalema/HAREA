import { GraphQLQueryClass } from "@mzara/component";
import { TRecruitingCuriculumVitae } from "@mzara/graphql";
import { TRecruitingCuriculumVitaesResponse } from "@mzara/graphql";
export class CurriculumVitaeListQuery implements GraphQLQueryClass <TRecruitingCuriculumVitaesResponse, TResponseCurriculumVitae>{
    public queryKey: string = 'App.Harea.RecruitingCuriculumVitaesQuery' 
    public gql: string = 
    `
        query CurriculumVitaeListQuery(
            $pageSize: Float,
            $page: Float,
            $data: JSONObject
        ){
            recruitingCuriculumVitaes(filter: {
                data: $data,
                pageSize: $pageSize,
                page: $page
            }){
                total data {
                    id name state{value} recrutingAdvert{
                        id title
                    }
                }
            }
        }
    `
    variables?: any
    constructor(variables?: any){
        this.variables=variables
    }
    mapFn(data: TResponseCurriculumVitae) : TRecruitingCuriculumVitaesResponse{
            return {
                total : data.recruitingCuriculumVitaes.total,
                data: data.recruitingCuriculumVitaes.data
            }
    };
    
}

export type TResponseCurriculumVitae = {
    recruitingCuriculumVitaes: {
        total: number,
        data: Array<TRecruitingCuriculumVitae>
    }
}