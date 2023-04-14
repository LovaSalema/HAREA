import { Box, ControlList, MainLogo, Menu, MenuItemProps, useControlListResultMapping, useTranslation } from "@mzara/component"
import { useWizardNodesMetadataQuery } from "hooks/useWizardNodesMetadataQuery"
import { useWizardNodeValueQuery } from "hooks/useWizardNodeValueQuery"
import _ from "lodash"
import { useCallback, useMemo, useState } from "react"
import { useWizardSequentialDetailsValue } from "view/designer/hooks/useWizardSequentialDetailsValue"

export const WizardSequential = ({ id, wizardId, defaultValue, layout, ...props }: WizardSequentialProps) => {

    const t = useTranslation()
    const [value, setValue] = useState<Array<Record<string, any>>>(defaultValue || [])
    const [index, setIndex] = useState(0)
    const nodeIds = useWizardSequentialDetailsValue(wizardId, true)
    const active = useMemo(() => nodeIds[index], [index])
    const { data: wizards } = useWizardNodesMetadataQuery(nodeIds, true)
    const { data: wizardNodeControl, isLoading: isWizardNodeLoading } = useWizardNodeValueQuery(active)
    const mapResult = useControlListResultMapping(wizardNodeControl?.data?.resultMapping)

    const isCreation = useMemo(() => layout === 'CREATION', [layout])

    const handleSubmited = (_value: Record<string, any>) => {
        if (isCreation) {
            const nextVal = _.clone(value)
            nextVal[index] = _value
            nextVal[index + 1] = mapResult(_value)
            setValue((v) => nextVal)
            if (index === nodeIds.length - 1) {
                props.onWizardFinished?.(nextVal)
                return;
            }
            setIndex((v) => v + 1)
        }
    }

    const handleCancelClick = (value?: Record<string, any>) => {
        if (isCreation) {
            setValue((v) => {
                const val = _.clone(v)
                val[index] = value
                return val
            })
            setIndex((v) => v - 1)
        }
    }

    const menus = useMemo((): Array<MenuItemProps> => {
        return (wizards || [])?.map((item) => ({
            label: t(item.valueTitle as any),
            value: item.id
        }))
    }, [wizards, t])

    const handleMenuClick = useCallback((item: MenuItemProps) => {
        if (!isCreation) {
            const index = menus.findIndex((item1) => item1.value === item.value)
            setIndex(index)
        }
    }, [isCreation, menus])

    const nextDefaultValue = useMemo(() => {
        return value?.[index]
    }, [value, index])

    return (
        <div className={`flex ${layout === 'CREATION' ? 'flex-col' : 'flex-row'} gap-5`}>
            <div>
                <Box className="p-0 w-60">
                    <Menu
                        type={layout === 'CREATION' ? 'HORIZONTAL' : 'VERTICAL'}
                        items={menus}
                        activeFn={(menu) => menu.value === active}
                        onClick={handleMenuClick}
                    />
                </Box>
            </div>
            {
                isWizardNodeLoading &&
                <MainLogo />
            }
            {
                !isWizardNodeLoading &&
                <Box className="flex-1">
                    <ControlList
                        key={`step-${index}`}
                        {...wizardNodeControl}
                        data={{
                            hideBack: true,
                            ...wizardNodeControl.data,
                            graphQL: {
                                ...wizardNodeControl.data.graphQL,
                                entityId: id
                            },
                        }}
                        defaultValue={nextDefaultValue}
                        onSubmited={handleSubmited}
                        onCancel={handleCancelClick}
                    />
                </Box>
            }
        </div>
    )
}

export type WizardSequentialProps = {
    wizardId?: number
    id: number
    index?: number
    layout?: 'CREATION' | 'PARAMS'
    defaultValue?: Array<Record<string, any>>
    onWizardFinished?: (value: any) => void
}
