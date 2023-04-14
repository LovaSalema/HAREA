import { GraphQLQueryClass } from "@mzara/component";
import { TRecruitingAdvert } from "@mzara/graphql";

export class RecruitingAdvertsDetailsQuery implements GraphQLQueryClass<TRecruitingAdvert, TResponseAvdertDetails>{
 public queryKey: string = 'App.Harea.RecruitingAdvertsDetailsQuery.Details'

 public gql: string = `
    query recruitingAdvertsDetails($id: Float){
        recruitingAdvert(filter: {id: $id}){
         id title description dateEnd tags{value color} createdAt cvs{id name state{value}} images{id}
        }
    }
 `
 variables?: any
 
 constructor(variables?: any){
    this.variables = variables
 }

 mapFn(data: TResponseAvdertDetails):TRecruitingAdvert {
    return data.recruitingAdvert
 };
}


export type TResponseAvdertDetails = {
    recruitingAdvert: TRecruitingAdvert
}