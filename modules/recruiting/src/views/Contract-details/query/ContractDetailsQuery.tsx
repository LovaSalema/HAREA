import { GraphQLQueryClass } from "@mzara/component";
import { TEmployeeContract, TEmployeeContractsResponse } from "@mzara/graphql";

export class ContractDetailsQuery implements GraphQLQueryClass<TEmployeeContract, TContractResponse >{
    public queryKey: string='App.Harea.ContractDetailsQuery.details';
    public gql: string= `
    query employeeContractDetails($id: Float){
        employeeContract(filter: {id : $id}) {
            id designation isPublic file{id name} tags{value tp }
        }
      
      }
    `
variables?: any;

constructor(variables?: any){
    this.variables = variables
}
mapFn(data: TContractResponse ) : TEmployeeContract {
    return data.employeeContract
}
}

export type TContractResponse = {
    employeeContract: TEmployeeContract
}