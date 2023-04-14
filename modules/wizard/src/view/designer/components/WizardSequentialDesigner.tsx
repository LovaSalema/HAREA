import { Box, Button, ButtonSubmit, ControlList, Dialog, MainLogo, Menu, MenuItemProps, RightSidebar, useGraphqlMutation, useTranslation, useTranslations } from "@mzara/component"
import { ControlListDesigner, ControlListDesignerProperties, useControlListDesignerValueState } from "@mzara/control-list-designer"
import { TWizardNode } from "@mzara/graphql"
import _ from "lodash"
import { useCallback, useEffect, useMemo, useState } from "react"
import { useParams } from "react-router-dom"
import { WIZARD_MUTATION } from "../containers/WizardDetailsDesigner"
import { useWizardNodeValueQuery } from "../../../hooks/useWizardNodeValueQuery"
import { useWizardSequentialDetailsValue } from "../hooks/useWizardSequentialDetailsValue"
import { useWizardNodesMetadataQuery } from "hooks/useWizardNodesMetadataQuery"

export const WizardSequentialDesigner = (props: WizardSequentialDesignerProps) => {

    const [
        NEW,
        SAVE,
        CONFIRMATION,
        OK,
        CANCEL
    ] = useTranslations(i18n)
    const t = useTranslation()
    const { id } = useParams()
    const [active, setActive] = useState<number>()
    const nodeIds = useWizardSequentialDetailsValue(parseInt(id), true)
    const [value, setValue] = useState(nodeIds)
    const { data: wizards, isLoading: isWizardsloading, invalidateQuery: invalidateWizardQuery } = useWizardNodesMetadataQuery(value)
    const { data: wizardNodeDefaultValue, isLoading: isWizardNodeLoading, invalidateQuery: invalidateWizardNodeQuery } = useWizardNodeValueQuery(active)
    
    const wizardMutation = useGraphqlMutation(WIZARD_MUTATION)
    const wizardNodeMutation = useGraphqlMutation<TWizardNode>(WIZARD_NODE_MUTATION)
    const [nodeValue] = useControlListDesignerValueState(active?.toString())
    const [removeDialog, setRemoveDialog] = useState(false)

    useEffect(() => {
        if (!active) {
            setActive(wizards?.[0]?.id)
        }
    }, [wizards])

    const menus = useMemo((): Array<MenuItemProps> => {
        return [
            ...(wizards || [])?.map((item) => ({
                label: t(item.valueTitle as any),
                value: item.id
            })),
            {
                label: NEW,
                startIcon: 'fa-solid fa-plus',
                value: -1
            }
        ]
    }, [wizards])

    const handleMenuClick = useCallback((item: MenuItemProps) => {
        setActive(item.value)
    }, [])

    const handleBeforeSubmit = useCallback((value: Record<string, any>) => {
        if (value.createNew !== true) {
            setValue((v) => [...v, value.nodeId])
            setActive(value.nodeId)
            return false
        }
        return value
    }, [])

    const handleSubmited = useCallback((value: any) => {
        setValue((v) => [...v, value.saveWizardNode.id])
        setActive(value.saveWizardNode.id)
    }, [])

    
    const handleSaveClick = () => {
        wizardMutation.mutate({
            data: {
                id: parseInt(id),
                value: JSON.stringify(value)
            }
        }, {
            onSuccess: () => invalidateWizardQuery()
        })
        wizardNodeMutation.mutate({
            data: {
                id: active,
                value: JSON.stringify(nodeValue)
            }
        }, {
            onSuccess: () => invalidateWizardNodeQuery()
        })
    }

    const handleRemoveConfirm = useCallback(() => {
        setValue((v) => v.filter((item) => item !== active))
        setActive(undefined)
        setRemoveDialog(false)
    }, [active])

    const isWizardDirty = useMemo(() => {
        return !_.isEqual(value, nodeIds)
    }, [value, nodeIds])

    const isWizardNodeDirty = useMemo(() => {
        return !_.isEqual(_.omitBy(nodeValue, _.isNil), wizardNodeDefaultValue)
    }, [nodeValue, wizardNodeDefaultValue])
    
    return (
        <>
            <div className="flex items-center justify-end">
                <Button startIcon="fa-solid fa-times" label="Retirer la formulaire" onClick={() => setRemoveDialog(true)} />
                <ButtonSubmit
                    className='btn-primary'
                    startIcon="fa-solid fa-save"
                    label={SAVE}
                    disabled={(!isWizardDirty && !isWizardNodeDirty)}
                    isSubmit={wizardMutation.isLoading || wizardNodeMutation.isLoading}
                    onClick={handleSaveClick}
                />
            </div>
            <div className="flex gap-5">
                <div>
                    <Box className="w-60 p-0">
                        <Menu
                            items={menus}
                            activeFn={(menu) => menu.value === active}
                            onClick={handleMenuClick}
                        />
                    </Box>
                </div>
                <div className="flex flex-col gap-5 flex-1">
                    {
                        !isWizardNodeLoading &&
                        <>
                            <div className="max-w-xl w-full m-auto">
                                <ControlListDesigner id={active?.toString()} defaultValue={wizardNodeDefaultValue} />
                            </div>

                            <RightSidebar className="right-sidebar-absolute">
                                <ControlListDesignerProperties id={active?.toString()} />
                            </RightSidebar>
                        </>
                    }
                    {
                        (isWizardsloading || isWizardNodeLoading) &&
                        <MainLogo />
                    }
                </div>

                {
                    active === -1 &&
                    <Dialog
                        open={active === -1}
                        onClose={() => setActive(wizards[0]?.id)}>
                        <ControlList
                            data={{ forms: [] }}
                            nodeKey="Generic.Wizard.Designer.Sequential.Import.Form"
                            onBeforeSaving={handleBeforeSubmit}
                            onSubmited={handleSubmited}
                        />
                    </Dialog>
                }

                {
                    removeDialog &&
                    <Dialog
                        open={removeDialog}
                        title={CONFIRMATION}
                        btnOk={{ label: OK }}
                        btnCancel={{ label: CANCEL }}
                        onConfirm={handleRemoveConfirm}
                        onCancel={() => setRemoveDialog(false)}
                        onClose={() => setRemoveDialog(false)}
                        />
                }
            </div>
        </>

    )
}

export const WIZARD_NODE_MUTATION = `
mutation ($data: JSONObject) {
    saveWizardNode (data: { data: $data }){ id }
}
`

export type WizardSequentialDesignerProps = {
    
}

const i18n = [
    'std_new',
    'std_save',
    'std_confirmation',
    'std_ok',
    'std_cancel'
]

