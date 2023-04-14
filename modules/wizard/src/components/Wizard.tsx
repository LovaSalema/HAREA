import { useWizardQuery } from "hooks/useWizardQuery"
import { WizardFlow } from "./WizardFlow"
import { WizardSequential, WizardSequentialProps } from "./WizardSequential"

export const Wizard = (props: WizardProps) => {

    const { data: wizard } = useWizardQuery(props.wizardKey, true)
    return (
        <>
            {
                wizard.type === 'SEQUENTIAL' &&
                <WizardSequential {...props} wizardId={wizard.id} />
            }

            {
                wizard.type === 'FLOW' &&
                <WizardFlow id={wizard.id} />
            }
        </>
    )
}

export type WizardProps = Omit<WizardSequentialProps, 'wizardId'> & {
    wizardKey?: string
}
