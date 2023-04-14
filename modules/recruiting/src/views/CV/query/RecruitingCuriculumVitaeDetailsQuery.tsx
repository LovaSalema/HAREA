import { GraphQLQueryClass } from "@mzara/component";
import { TRecruitingCuriculumVitae } from "@mzara/graphql";

export class RecruitingCuriculumVitaeDetailsQuery implements GraphQLQueryClass <TRecruitingCuriculumVitae, TCvDetailsResponse>{
    public queryKey: string = 'App.Harea.RecruitingCuriculumVitaeDetailsQuery.Details'
    public gql: string = `
    query recruitingCuriculumVitaes($id: Float){
        recruitingCuriculumVitae(filter: {id : $id}) {
          id name phone email adress school degree comment state{value} files {id name value}
        }
      
      }
 `
 variables?: any
constructor(variables?: any){
    this.variables= variables
}
mapFn(data: TCvDetailsResponse ) : TRecruitingCuriculumVitae {
    return data.recruitingCuriculumVitae
}

}
export type TCvDetailsResponse = {
    recruitingCuriculumVitae : TRecruitingCuriculumVitae
}