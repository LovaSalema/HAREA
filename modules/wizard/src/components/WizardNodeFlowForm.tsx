import { ControlList, Dialog, IconButton, Select, useTranslationRoute, useTranslations } from "@mzara/component"
import { FlowData, FlowNodeEditDialogProps } from "@mzara/flow"
import { useWizardNodeEditForm } from "hooks/useWizardNodeEditForm"
import { useState } from "react"
import { Link } from "react-router-dom"

export const WizardNodeFlowForm = (props: WizardNodeFlowFormProps) => {

    const [
        TITLE
    ] = useTranslations(i18n)

    const translationRoute = useTranslationRoute()

    return (
        <>
            <div className="flex items-end">
                <Select
                    label={TITLE}
                    value={props.data.wizardNodeId}
                    GQLConfig={{ refetchOnMount: true }}
                    GQLProps={{
                        gql,
                        labelProp: 'title',
                        valueProp: 'id',
                        rootProp: 'wizardNodes.data'
                    }}
                />
                <IconButton icon="fa-solid fa-cog" onClick={() => props.onEditClick?.(props.data.wizardNodeId)} />
                {
                    props.data.wizardNodeId &&
                    <Link to={translationRoute(`wizard/${props.id}/node/${props.data.wizardNodeId}`)}>
                        <IconButton icon="fa-solid fa-pen" />
                    </Link>
                }
            </div>
        </>
    )
}

const i18n = [
    'Bo.Wizard.Designer.Flow.Edit.FormNode.label',
]

const gql = `
    query WizardNodesSelectQuery {
        wizardNodes {
            total
            data {
                id title
            }
        }
    }
`

export type WizardNodeFlowFormProps = {
    id: number
    data: FlowData,
    onEditClick?: (id: number) => void
}
