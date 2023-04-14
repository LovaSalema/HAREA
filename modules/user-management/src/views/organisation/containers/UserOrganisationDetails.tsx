import { useEffect } from 'react'
import { Box, BreadCrumb, Button, GenericSuspense, Menu, RightSidebar, useTranslations } from "@mzara/component"
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom"
import { useUserOrganisationDetailsQuery } from "views/organisation/hooks/useUserOrganisationDetailsQuery"
import { useUserOrganisationDetailsMenu } from '../hooks/useUserOrganisationDetailsMenu'
import { useUserOrganisationDetailsBreadCrumb } from '../hooks/useUserOrganisationDetailsBreadCrumb'

const UserOrganisationDetails = () => {

    const [
        SAVE
    ] = useTranslations(i18n)

    const [, , , , , tab] = location.pathname.split("/");
    const { id } = useParams()
    const { data } = useUserOrganisationDetailsQuery(parseInt(id), true)
    const breadCrumb = useUserOrganisationDetailsBreadCrumb(data.designation)
    const menus = useUserOrganisationDetailsMenu(parseInt(id))
    const navigate = useNavigate()

    useEffect(() => {
        if (!menus.some((item) => item.ke === tab)) {
            navigate(menus[0].link)
        }
    }, [])

    return (
        <div className="flex flex-row w-full">
            <div className="flex flex-col gap-5 flex-1">
                <div className="flex items-center justify-between">
                    <h4 className="font-semibold">{data.designation}</h4>
                </div>
                <BreadCrumb items={breadCrumb.reverse()} />
                <Menu type="HORIZONTAL" className="menuPublication" items={menus} activeFn={(menu) => menu.ke === tab} />
                <GenericSuspense>
                    <Outlet />
                </GenericSuspense>
            </div>
            <RightSidebar />


        </div>
    )
}

const i18n = [
    'std_save'
]

export default UserOrganisationDetails
