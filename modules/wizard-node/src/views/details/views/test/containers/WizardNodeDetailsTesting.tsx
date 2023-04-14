import { Box, ControlList } from "@mzara/component"
import { useParams } from "react-router-dom"
import { useWizardNodeDetailsQuery } from 'views/details/hooks/useWizardNodeDetailsQuery'
import _ from 'lodash'
import { useMemo } from "react"

const WizardNodeDetailsTesting = () => {

    const { id } = useParams()
    const { data } = useWizardNodeDetailsQuery(parseInt(id), true)

    return (
        <div className="flex flex-col gap-3">
            <Box className="max-w-xl w-full m-auto">
                <ControlList data={{ forms: [] }} nodeKey={data.nodeKey} />
            </Box>
        </div>
    )
}

export default WizardNodeDetailsTesting
