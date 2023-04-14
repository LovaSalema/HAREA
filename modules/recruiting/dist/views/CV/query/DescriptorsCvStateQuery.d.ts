import { GraphQLQueryClass } from "@mzara/component";
import { TDescriptor } from "@mzara/graphql";
export declare class DescriptorsCvStateQuery implements GraphQLQueryClass<TDescriptor, TDescriptorResponse> {
    queryKey: string;
    gql: string;
    variables?: any;
    constructor(variables?: any);
    mapFn(data: TDescriptorResponse): TDescriptor;
}
export declare type TDescriptorResponse = {
    descriptor: TDescriptor;
};
//# sourceMappingURL=DescriptorsCvStateQuery.d.ts.map