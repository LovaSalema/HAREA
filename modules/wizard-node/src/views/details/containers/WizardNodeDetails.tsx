import { useEffect, useMemo, useState } from 'react'
import { Box, BreadCrumb, ButtonSubmit, ControlListProps, GenericSuspense, Menu, RightSidebar, useGraphqlMutation, useTranslation, useTranslationRoute, useTranslations } from "@mzara/component"
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom"
import { useWizardNodeDetailsQuery } from 'views/details/hooks/useWizardNodeDetailsQuery'
import { useWizardNodeDetailsBreadCrumb } from 'hooks/useWizardNodeDetailsBreadCrumb'
import { ControlListDesigner, ControlListDesignerProperties, useControlListDesignerValueState } from '@mzara/control-list-designer'
import { WIZARD_NODE_MUTATION } from 'views/details/views/designer/queries/WizardNodeMutation'
import { TWizardNode } from '@mzara/graphql'
import _ from 'lodash'
import { useWizardNodeDetailsMenu } from '../hooks/useWizardNodeDetailsMenu'

const WizardNodeDetails = () => {

    const [
        SAVE,
        PROPERTIES
    ] = useTranslations(i18n)
    const t = useTranslation()
    const { id } = useParams()
    const { data } = useWizardNodeDetailsQuery(parseInt(id), true)
    const breadCrumb = useWizardNodeDetailsBreadCrumb(data.title)
    const menuItems = useWizardNodeDetailsMenu(id)
    const location = useLocation()
    const navigate = useNavigate()
    const translatedRoute = useTranslationRoute()
    const [, , , , tab] = location.pathname.split('/')

    useEffect(() => {
        if (!tab) {
            navigate(translatedRoute(`wizard-node/${id}/about`), { replace: true })
        }
    }, [])

    return (
        <div className="flex flex-row w-full">
            <div className="flex flex-col gap-5 flex-1">
                <div className="flex items-center justify-between">
                    <div>
                        <h4 className="font-semibold">{t(data.title)}</h4>
                        <h6>{data.nodeKey}</h6>
                    </div>
                </div>
                <BreadCrumb items={breadCrumb.reverse()} />
                <Box className='box-padding-0'>
                    <Menu
                        items={menuItems}
                        type="HORIZONTAL"
                        activeFn={(menu) => menu.ke === tab}
                        
                    />
                </Box>
                <div>
                    <GenericSuspense>
                        <Outlet />
                    </GenericSuspense>
                </div>
            </div>
            <RightSidebar />
        </div>
    )
}


const i18n = [
    'std_save',
    'Bo.WizardNode.Details.ControlDesigner.Properties.title',
]

export default WizardNodeDetails
