
import { Wizard } from "components/Wizard"
import { useParams } from "react-router-dom"

const WizardDetailsParams = () => {

    const { id } = useParams()

    return (
        <Wizard
            wizardKey="Generic.Wizard.Params.Wizard"
            id={parseInt(id)}
            layout="PARAMS"
            />
    )
}

export default WizardDetailsParams
