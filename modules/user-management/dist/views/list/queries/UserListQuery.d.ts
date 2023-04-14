import { GraphQLQueryClass } from "@mzara/component";
import { TUser, TUsersResponse } from "@mzara/graphql";
export declare class UserListQuery implements GraphQLQueryClass<TUsersResponse, TResponse> {
    queryKey: string;
    gql: string;
    variables?: any;
    constructor(variables: any);
    mapFn(data: TResponse): TUsersResponse;
}
export declare type TResponse = {
    users: {
        total: number;
        data: Array<TUser>;
    };
};
//# sourceMappingURL=UserListQuery.d.ts.map