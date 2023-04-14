import { useGraphqlQuery } from "@mzara/component"
import { TWizardNode } from "@mzara/graphql"
import { WizardNodesMetadataQuery } from "queries/WizardNodesMetadataQuery"

export const useWizardNodesMetadataQuery = (ids?: Array<number>, suspense?: boolean) => {
    return useGraphqlQuery<WizardNodesMetadataQuery, Array<TWizardNode>>(new WizardNodesMetadataQuery({ ids }), { enabled: ids !== undefined, suspense })
}
