import { GraphQLQueryClass } from "@mzara/component";
import { TUser } from "@mzara/graphql";
export declare class UserDetailsQuery implements GraphQLQueryClass<TUser, TResponse> {
    queryKey: string;
    gql: string;
    variables?: any;
    constructor(variables?: any);
    mapFn(data: TResponse): TUser;
}
export declare type TResponse = {
    user: TUser;
};
//# sourceMappingURL=UserDetailsQuery.d.ts.map