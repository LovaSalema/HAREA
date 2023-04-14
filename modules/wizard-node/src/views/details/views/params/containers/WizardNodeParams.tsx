import { useParams } from "react-router-dom"
import _ from 'lodash'
import { Wizard } from "@mzara/wizard"

const WizardNodeParams = () => {

    const { id } = useParams()

    return (
        <Wizard
            wizardKey="Generic.Wizard.Node.Params.Wizard"
            id={parseInt(id)}
            layout="PARAMS"
            />
    )
}

export default WizardNodeParams
