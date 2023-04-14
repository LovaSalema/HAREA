import { GraphQLQueryClass } from "@mzara/component";
import { TDescriptor, TRecruitingCuriculumVitae } from "@mzara/graphql";

export class DescriptorsCvStateQuery implements GraphQLQueryClass <TDescriptor, TDescriptorResponse>{
    public queryKey: string = 'App.Harea.RecruitingCuriculumVitaeDetailsQuery.DescriptorCvState'
    public gql: string = `
    query descriptorsCvState ($tp: String){
        descriptors (filter:{data:{tp: $tp}}){total data{
          id value descriptorKey}}
        }
 `
 variables?: any
constructor(variables?: any){
    this.variables= variables
}
mapFn(data: TDescriptorResponse ) : TDescriptor {
    return data.descriptor
}

}
export type TDescriptorResponse = {
    descriptor : TDescriptor
}