import { GraphQLQueryClass } from "@mzara/component";
import { TRecruitingCuriculumVitae, TRecruitingCuriculumVitaesResponse } from "@mzara/graphql";


export class RecruitingAdvertCvListQuery implements GraphQLQueryClass <TRecruitingCuriculumVitaesResponse, TResponse>{
    public queryKey: string = 'App.Harea.RecruitingAdvertCvListQuery' 
    public gql : string = `
            query recruitingAdvertsCvListQuery($id: Float){
                    recruitingAdvert(filter: {id: $id}){
                        id title description dateEnd tags{value color}
                            cvs { 
                                id name phone email email adress school degree 
                                }
        }
    }
    `
    variables?: any
 
 constructor(variables?: any){
    this.variables = variables
 }

 mapFn(data: TResponse):TRecruitingCuriculumVitaesResponse {
    return data.recruitingAdvert.cvs.data
 };

}

export type TResponse = {
    recruitingAdvert: {
        cvs :{
            total: number,
            data: TRecruitingCuriculumVitaesResponse
        }
       
    }}