import { GraphQLQueryClass } from "@mzara/component";
import { TEmployeeContract, TEmployeeContractsResponse } from "@mzara/graphql";

export class EmployeeContractsQuery implements GraphQLQueryClass <TEmployeeContractsResponse, TResponseContract>{
    public queryKey: string= 'App.Harea.EmployeeContractsQuery' 

    public gql : string = `
    query EmployeeContractsQuery(
        $pageSize: Float,
        $page: Float,
        $data: JSONObject
    ) {
        employeeContracts(filter: {
            data: $data,
            pageSize: $pageSize,
            page: $page
        }){
            total
            data {
                id createdAt updatedAt designation userCreator{ id userName} isOwner isPublic isActive 
                file{ id name value } tags{id value tp}
            }
        }
    }
    `

    variables? : any 
    constructor (variables? : any)
    {
        this.variables = variables
    }

    mapFn(data: TResponseContract) :TEmployeeContractsResponse{
        return {
            total : data.employeeContracts.total,
            data : data.employeeContracts.data
        }
    };
}
export type TResponseContract = {
    employeeContracts: {
        total: number, 
        data : Array<TEmployeeContract>
    }
}