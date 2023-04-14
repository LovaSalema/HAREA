import { TUserOrganisation, TUserOrganisationsResponse } from "@mzara/graphql";
import { GraphQLQueryClass } from "@mzara/component";
export declare class UserOrganisationsQuery implements GraphQLQueryClass<TUserOrganisationsResponse, TResponse> {
    queryKey: string;
    gql: string;
    variables?: any;
    constructor(variables?: any);
    mapFn(data: TResponse): TUserOrganisationsResponse;
}
export declare type TResponse = {
    userOrganisations: {
        total: number;
        data: Array<TUserOrganisation>;
    };
};
//# sourceMappingURL=UserOrganisationsQuery.d.ts.map