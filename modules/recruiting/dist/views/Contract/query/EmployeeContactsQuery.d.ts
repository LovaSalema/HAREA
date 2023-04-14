import { GraphQLQueryClass } from "@mzara/component";
import { TEmployeeContract, TEmployeeContractsResponse } from "@mzara/graphql";
export declare class EmployeeContractsQuery implements GraphQLQueryClass<TEmployeeContractsResponse, TResponseContract> {
    queryKey: string;
    gql: string;
    variables?: any;
    constructor(variables?: any);
    mapFn(data: TResponseContract): TEmployeeContractsResponse;
}
export declare type TResponseContract = {
    employeeContracts: {
        total: number;
        data: Array<TEmployeeContract>;
    };
};
//# sourceMappingURL=EmployeeContactsQuery.d.ts.map