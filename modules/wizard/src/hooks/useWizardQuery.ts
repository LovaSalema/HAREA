import { useGraphqlQuery } from "@mzara/component"
import { TWizard } from "@mzara/graphql"
import { WizardQuery } from "queries/WizardQuery"

export const useWizardQuery = (wizardKey?: string, suspense?: boolean) => {
    return useGraphqlQuery<WizardQuery, TWizard>(new WizardQuery({ wizardKey }), { enabled: wizardKey !== undefined, suspense })
}
