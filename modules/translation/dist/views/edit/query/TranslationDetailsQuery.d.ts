import { TTranslation } from "@mzara/graphql";
import { GraphQLQueryClass } from "@mzara/component";
export declare class TranslationDetailsQuery implements GraphQLQueryClass<TTranslation, TResponse> {
    queryKey: string;
    gql: string;
    variables?: any;
    constructor(variables?: any);
    mapFn(data: TResponse): TTranslation;
}
export declare type TResponse = {
    translation: TTranslation;
};
//# sourceMappingURL=TranslationDetailsQuery.d.ts.map