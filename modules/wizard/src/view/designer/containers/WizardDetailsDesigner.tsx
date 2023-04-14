import { useEffect, useState } from 'react'
import { ButtonSubmit, useGraphqlMutation, useTranslations } from "@mzara/component"
import { useParams } from "react-router-dom"
import { useWizardDetailsQuery } from "hooks/useWizardDetailsQuery"
import _ from 'lodash'
import { WizardFlowDesigner } from '../components/WizardFlowDesigner'
import { useWizardFlowDetailsValue, WizardDetailsValue } from '../hooks/useWizardFlowDetailsValue'
import { WizardSequentialDesigner } from '../components/WizardSequentialDesigner'

const WizardDetailsDesigner = () => {

    const [
        SAVE
    ] = useTranslations(i18n)
    const { id } = useParams()
    const { data } = useWizardDetailsQuery(parseInt(id), true)

    return (
        <div className="flex flex-row w-full gap-4 mr-4">
            <div className="flex flex-col gap-5 flex-1">
                {
                    data.type === 'FLOW' &&
                    <WizardFlowDesigner />
                }
                {
                    data.type === 'SEQUENTIAL' &&
                    <WizardSequentialDesigner />
                }
            </div>
        </div>
    )
}

export const WIZARD_MUTATION = `
    mutation SaveWizardDetails ($data: JSONObject) {
        saveWizard (data: { data: $data }) { id }
    }
`

const i18n = [
    'std_save'
]

export default WizardDetailsDesigner
