import { ControlListProps, useGraphqlQuery } from "@mzara/component"
import { WizardNodeValueQuery } from "../queries/WizardNodeValueQuery"

export const useWizardNodeValueQuery = (id?: number, suspense?: boolean) => {
    return useGraphqlQuery<WizardNodeValueQuery, ControlListProps>(new WizardNodeValueQuery({ id }), { enabled: id !== undefined && id !== -1, suspense })
}
