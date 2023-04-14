import { GraphQLQueryClass } from "@mzara/component";
import { TEmployeeContract } from "@mzara/graphql";
export declare class ContractDetailsQuery implements GraphQLQueryClass<TEmployeeContract, TContractResponse> {
    queryKey: string;
    gql: string;
    variables?: any;
    constructor(variables?: any);
    mapFn(data: TContractResponse): TEmployeeContract;
}
export declare type TContractResponse = {
    employeeContract: TEmployeeContract;
};
//# sourceMappingURL=ContractDetailsQuery.d.ts.map