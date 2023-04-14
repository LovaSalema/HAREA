import { useGraphqlQuery } from "@mzara/component";
import { ContractDetailsQuery } from "../query/ContractDetailsQuery";

export const useContractDetailsQuery = (id?: number, suspense?: boolean)=>{
    return useGraphqlQuery (new ContractDetailsQuery({id}),  {enabled : id!==undefined, suspense})
}