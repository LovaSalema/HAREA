import { ControlListProps } from "@mzara/component"
import { FlowDefault, FlowShellProps } from "@mzara/flow"
import { useMemo } from "react"
import { useWizardDetailsQuery } from "../../../hooks/useWizardDetailsQuery"

export const useWizardSequentialDetailsValue = (id?: number, suspense?: boolean) => {

    const { data } = useWizardDetailsQuery(id, suspense)

    return useMemo((): Array<number> => {
        return data.value ? JSON.parse(data.value) : []
    }, [data])
}

