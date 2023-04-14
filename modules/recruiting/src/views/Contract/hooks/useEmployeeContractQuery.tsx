import { useGraphqlQuery} from "@mzara/component"
import { EmployeeContractsQuery } from "../query/EmployeeContactsQuery"


export const useEmployeeContractQuery = (id?: number, suspense?: boolean)=>{
    return useGraphqlQuery (new EmployeeContractsQuery({id}),  {enabled : id!==undefined, suspense})
}