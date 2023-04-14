import { FlowDefault, FlowShellProps } from "@mzara/flow"
import { useMemo } from "react"
import { useWizardDetailsQuery } from "../../../hooks/useWizardDetailsQuery"

export const useWizardFlowDetailsValue = (id?: number, suspense?: boolean) => {

    const { data } = useWizardDetailsQuery(id, suspense)

    return useMemo((): WizardDetailsValue => {
        return data.value ? JSON.parse(data.value) : FlowDefault
    }, [data])
}

export type WizardDetailsValue = {
    nodes: FlowShellProps['initialNodes']
    edges: FlowShellProps['initialEdges']
}
