import { useEffect, useState } from 'react'
import { Box, BreadCrumb, GenericSuspense, Menu, RightSidebar, useTranslations } from "@mzara/component"
import { Outlet, useNavigate, useParams } from "react-router-dom"
import { useWizardDetailsBreadCrumb } from "hooks/useWizardDetailsBreadCrumb"
import { useWizardDetailsQuery } from "hooks/useWizardDetailsQuery"
import { useWizardDetailsMenu } from "hooks/useWizardDetailsMenu"
import _ from 'lodash'

const WizardDetails = () => {

    const [
        SAVE
    ] = useTranslations(i18n)
    const { id } = useParams()
    const [, , , ,tab] = location.pathname.split("/");
    const { data } = useWizardDetailsQuery(parseInt(id), true)
    const breadCrumb = useWizardDetailsBreadCrumb(data.title)
    const menus = useWizardDetailsMenu(parseInt(id))
    const navigate = useNavigate()
    
    useEffect(() => {
        if (!menus.some((item) => item.ke === tab)) {
            navigate(menus[0].link, { replace: true })
        }
    }, [])

    return (
        <div className="flex flex-row w-full gap-4">
            <div className="flex flex-col gap-5 flex-1">
                <div className="flex items-center justify-between">
                    <div>
                        <h4 className="font-semibold">{data.title}</h4>
                        <h6>{data.wizardKey}</h6>
                    </div>
                </div>
                <BreadCrumb items={breadCrumb} />

                <Box className=' box-p-0'>
                    <Menu type="HORIZONTAL" className='menuPublication' items={menus} activeFn={(menu) => menu.ke === tab} />
                </Box>

                <GenericSuspense>
                    <Outlet />
                </GenericSuspense>
            </div>
            <RightSidebar>

            </RightSidebar>
        </div>
    )
}

const i18n = [
    'std_save'
]

export default WizardDetails
