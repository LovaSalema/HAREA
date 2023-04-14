import { Box, ButtonSubmit, Chip, ControlListProps, Metadata, RightSidebar, useGraphqlMutation, useTranslations } from "@mzara/component"
import { useParams } from "react-router-dom"
import { useWizardNodeDetailsQuery } from 'views/details/hooks/useWizardNodeDetailsQuery'
import _ from 'lodash'
import { ControlListDesigner, ControlListDesignerProperties, useControlListDesignerValueState } from "@mzara/control-list-designer"
import { useEffect, useMemo, useState } from "react"
import { TWizardNode } from "@mzara/graphql"
import { WIZARD_NODE_MUTATION } from "../queries/WizardNodeMutation"

const WizardNodeDetailsDesigner = () => {

    const [
        SAVE,
        PROPERTIES
    ] = useTranslations(i18n)
    const { id } = useParams()
    const { data } = useWizardNodeDetailsQuery(parseInt(id), true)
    const [dirty, setDirty] = useState(false)
    const [value] = useControlListDesignerValueState(id)
    const mutation = useGraphqlMutation<TWizardNode>(WIZARD_NODE_MUTATION)

    const defaultValue = useMemo(() => {
        const _val = JSON.parse(data.value || JSON.stringify(defaultForm))
        _val.data.nodeKey = data.nodeKey
        return _val
    }, [data])

    useEffect(() => {
        if (value && !_.isEqual(defaultValue.data, value.data)) {
            setDirty(true)
        }
    }, [value])

    const handleSaveClick = () => {
        mutation.mutate({
            data: {
                id: data.id,
                nodeKey: value.data.nodeKey,
                value: JSON.stringify(value)
            }
        }, {
            onSuccess: () => setDirty(false)
        })
    }

    return (
        <div className="flex flex-col gap-3">
            <div className="flex">
                <ButtonSubmit
                    className='btn-primary ml-auto'
                    startIcon="fa-solid fa-save"
                    label={SAVE}
                    isSubmit={mutation.isLoading}
                    onClick={handleSaveClick}
                    disabled={!dirty}
                />
            </div>

            <div className="max-w-xl w-full m-auto">
                <ControlListDesigner id={id} defaultValue={defaultValue} />
            </div>

            <RightSidebar className="right-sidebar-absolute">
                <Box title={PROPERTIES} icon="fa-solid fa-cog" className="box-transparent box-shadow-none box-p-0">
                    <ControlListDesignerProperties id={id} />
                </Box>
            </RightSidebar>
        </div>
    )
}

const i18n = [
    'std_save',
    'Bo.WizardNode.Details.ControlDesigner.Properties.title',
]

const defaultForm: ControlListProps = {
    data: {
        title: 'Titre',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        forms: [],
        value: {},
        next: {
            label: 'Suivant'
        },
        back: {
            label: 'Précédent'
        }
    }
}

export default WizardNodeDetailsDesigner
