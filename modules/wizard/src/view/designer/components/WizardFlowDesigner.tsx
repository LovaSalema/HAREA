import { Box, ButtonSubmit, useGraphqlMutation, useTranslations } from "@mzara/component"
import { Flow, FlowShellProps } from "@mzara/flow"
import { useWizardDetailsQuery } from "hooks/useWizardDetailsQuery"
import _ from "lodash"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { WIZARD_MUTATION } from "../containers/WizardDetailsDesigner"
import { useWizardFlowDetailsValue, WizardDetailsValue } from "../hooks/useWizardFlowDetailsValue"
import { useWizardFlowEdgeControl } from "../hooks/useWizardFlowEdgeControl"
import { useWizardFlowNodeControl } from "../hooks/useWizardFlowNodeControl"

export const WizardFlowDesigner = (props: Props) => {
    const [
        SAVE
    ] = useTranslations(i18n)
    const { id } = useParams()
    const flowNodeControl = useWizardFlowNodeControl()
    const flowEdgeControl = useWizardFlowEdgeControl([])
    const defaultValue = useWizardFlowDetailsValue(parseInt(id), true)
    const [value, setValue] = useState<WizardDetailsValue | Array<number>>()
    const mutation = useGraphqlMutation(WIZARD_MUTATION)
    const { invalidateQuery } = useWizardDetailsQuery(parseInt(id), true)

    useEffect(() => {
        if (!_.isEqual(defaultValue, value)) {
            setValue(defaultValue)
        }
    }, [defaultValue])

    const handleSaveClick = () => {
        mutation.mutate({
            data: {
                id: parseInt(id),
                value: JSON.stringify(value)
            }
        }, {
            onSuccess: () => invalidateQuery()
        })
    }

    return (
        <>
            <div className="flex items-center justify-end">
                <ButtonSubmit
                    className='btn-primary'
                    startIcon="fa-solid fa-save"
                    label={SAVE}
                    disabled={mutation.isLoading || _.isEqual(defaultValue, value)}
                    onClick={handleSaveClick}
                />
            </div>
            <Box className="h-[80vh] p-0">
                <Flow
                    initialNodes={defaultValue.nodes as any}
                    initialEdges={defaultValue.edges}
                    nodeCustomProperties={flowNodeControl}
                    edgeCustomProperties={flowEdgeControl}
                    onChange={(nodes, edges) => setValue({ nodes, edges })}
                />
            </Box>
        </>

    )
}

const i18n = [
    'std_save'
]

type Props = {

}
