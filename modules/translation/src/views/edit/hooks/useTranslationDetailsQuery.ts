import { useGraphqlQuery } from "@mzara/component"
import { TranslationDetailsQuery } from "../query/TranslationDetailsQuery"

export const useTranslationDetailsQuery = (id?: number, suspense?: boolean) => {
    return useGraphqlQuery(new TranslationDetailsQuery({id}), { enabled: id !== undefined, suspense })
}
