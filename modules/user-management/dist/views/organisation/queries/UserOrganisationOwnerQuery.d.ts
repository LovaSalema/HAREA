import { TUserOrganisation } from "@mzara/graphql";
import { GraphQLQueryClass } from "@mzara/component";
export declare class UserOrganisationOwnerQuery implements GraphQLQueryClass<TUserOrganisation, TResponse> {
    queryKey: string;
    gql: string;
    mapFn(data: TResponse): TUserOrganisation;
}
export declare type TResponse = {
    userOrganisation: TUserOrganisation;
};
//# sourceMappingURL=UserOrganisationOwnerQuery.d.ts.map