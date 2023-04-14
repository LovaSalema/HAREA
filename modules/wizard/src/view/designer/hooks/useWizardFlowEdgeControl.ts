import { useStepControlListCondition } from '@mzara/control-list-designer'

export const useWizardFlowEdgeControl = (variables: Array<string>) => {
    const conditionForm = useStepControlListCondition(variables || [])
    return [
        conditionForm
    ]
}
