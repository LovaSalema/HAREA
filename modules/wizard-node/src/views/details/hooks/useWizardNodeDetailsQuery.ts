import { useGraphqlQuery } from "@mzara/component"
import { TWizardNode } from "@mzara/graphql"
import { WizardNodeDetailsQuery } from "../queries/WizardNodeDetailsQuery"

export const useWizardNodeDetailsQuery = (id?: number, suspense?: boolean) => {
    return useGraphqlQuery<WizardNodeDetailsQuery, TWizardNode>(new WizardNodeDetailsQuery({ id }), { enabled: id !== undefined, suspense })
}
