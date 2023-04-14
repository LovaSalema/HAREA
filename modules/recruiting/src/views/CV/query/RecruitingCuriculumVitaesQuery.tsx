import { GraphQLQueryClass } from "@mzara/component";
import { TRecruitingCuriculumVitae } from "@mzara/graphql";
import { TRecruitingCuriculumVitaesResponse } from "@mzara/graphql";
export class RecruitingCuriculumVitaesQuery implements GraphQLQueryClass <TRecruitingCuriculumVitaesResponse, TResponse>{
    public queryKey: string = 'App.Harea.RecruitingCuriculumVitaesQuery' 
    public gql: string = 
    `
        query RecruitingCuriculumVitaes {
                recruitingCuriculumVitaes{ 
                    total
                    data{
                    id name phone email adress  school degree comment 
                      comments{value} recrutingAdvert{title} employee{firstName lastName}
                      files{value}}
            }
            
        }
    `
    variables?: any
    constructor(variables?: any){
        this.variables=variables
    }
    mapFn?(data: TResponse) : TRecruitingCuriculumVitaesResponse{
            return {
                total : data.recruitingCuriculumVitaes.total,
                data: data.recruitingCuriculumVitaes.data
            }
    };
    
}

export type TResponse = {
    recruitingCuriculumVitaes: {
        total: number,
        data: Array<TRecruitingCuriculumVitae>
    }
}