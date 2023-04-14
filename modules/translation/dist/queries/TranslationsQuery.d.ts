import { TTranslation, TTranslationsResponse } from "@mzara/graphql";
import { GraphQLQueryClass } from "@mzara/component";
export declare class TranslationsQuery implements GraphQLQueryClass<TTranslationsResponse, TResponse> {
    queryKey: string;
    gql: string;
    variables?: any;
    constructor(variables?: any);
    mapFn(data: TResponse): TTranslationsResponse;
}
export declare type TResponse = {
    translations: {
        total: number;
        data: Array<TTranslation>;
    };
};
//# sourceMappingURL=TranslationsQuery.d.ts.map