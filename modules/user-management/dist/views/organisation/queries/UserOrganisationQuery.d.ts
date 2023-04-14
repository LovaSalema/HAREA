import { TUserOrganisation } from "@mzara/graphql";
import { GraphQLQueryClass } from "@mzara/component";
export declare class UserOrganisationDetailsQuery implements GraphQLQueryClass<TUserOrganisation, TResponse> {
    queryKey: string;
    gql: string;
    variables?: any;
    constructor(variables?: any);
    mapFn(data: TResponse): TUserOrganisation;
}
export declare type TResponse = {
    userOrganisation: TUserOrganisation;
};
//# sourceMappingURL=UserOrganisationQuery.d.ts.map