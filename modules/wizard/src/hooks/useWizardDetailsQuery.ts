import { useGraphqlQuery } from "@mzara/component"
import { TWizard } from "@mzara/graphql"
import { WizardDetailsQuery } from "../queries/WizardDetailsQuery"

export const useWizardDetailsQuery = (id?: number, suspense?: boolean) => {
    return useGraphqlQuery<WizardDetailsQuery, TWizard>(new WizardDetailsQuery({ id }), { enabled: id !== undefined, suspense })
}
