import { useMemo } from "react"

export const useWizardFlowNodeControl = () => {

    return useMemo(() => {
        return [
            {
                type: 'select',
                name: 'nodeId',
                label: 'Bo.Wizard.Designer.Flow.Edit.FormNode.label',
                GQLConfig: { refetchOnMount: true },
                GQLProps: {
                    gql: `
                        query WizardNodesSelectQuery {
                            wizardNodes {
                                total
                                data {
                                    id title
                                }
                            }
                        }
                    `,
                    labelProp: 'title',
                    valueProp: 'id',
                    rootProp: 'wizardNodes.data'
                }
            },
        ]
    }, [])
}
