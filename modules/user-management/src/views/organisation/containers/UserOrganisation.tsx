import { BreadCrumb, Button, List, useCdnFlagUrl, DateSpan, useUrlParamsValue, useUrlParamsEncode, MenuItemProps, Dialog, useGraphqlDelete, useListGraphqlQuery, RightSidebar, GenericSuspense, useTranslations, useTranslation, useTranslationRoute, Chip } from "@mzara/component"
import { Link, Outlet } from "react-router-dom"
import { UserOrganisationFilter } from "../components/UserOrganisationFilter"
import { useUserOrganisationListSort } from "../hooks/useUserOrganisationListSort"
import { useUserOrganisationBreadCrumb } from "../hooks/useUserOrganisationBreadCrumb"
import { UserOrganisationsQuery } from "../queries/UserOrganisationsQuery"
import { TUserOrganisation } from "@mzara/graphql"
import { useState } from "react"
import { useUserOrganisationListMenu } from "../hooks/useUserOrganisationListMenu"

const UserOrganisation = () => {

    const breadCrumb = useUserOrganisationBreadCrumb()
    const menus = useUserOrganisationListMenu()
    const [
        TITLE,
        ADD,
        CREATED_AT,
        UPDATED_AT,
        CONFIRMATION,
        OK,
        CANCEL,
        USERS
    ] = useTranslations(i18n)
    const t = useTranslation()
    const cdn = useCdnFlagUrl()
    const sortItems = useUserOrganisationListSort()
    const translatedRoute = useTranslationRoute()
    const urlParams = useUrlParamsValue()
    const encodeUrl = useUrlParamsEncode()
    const deleteMutation = useGraphqlDelete('userOrganisation')
    const [deleteItems, setDeleteItems] = useState<Array<number>>([])
    const { invalidateQuery } = useListGraphqlQuery(USER_ORGANISATION_LIST_ID)

    const handleMenuClick = (row: TUserOrganisation, menu: MenuItemProps) => {
        if (menu.ke === 'delete') {
            setDeleteItems([row.id])
        }
    }

    const handleDeleteConfirmed = () => {
        deleteMutation.mutate({
            ids: deleteItems
        }, {
            onSuccess: () => {
                invalidateQuery()
                setDeleteItems([])
            }
        })
    }

    return (
        <div className="flex flex-row w-full">

            <div className="flex flex-col gap-5 flex-1">
                <div className="flex items-center justify-between">
                    <h4 className="font-semibold">{TITLE}</h4>
                    <Link to={translatedRoute(`user/organisation/create?${encodeUrl(urlParams)}`)}>
                        <Button
                            startIcon="fa-solid fa-plus"
                            className='btn btn-primary'
                            label={ADD}
                        />
                    </Link>
                </div>
                <BreadCrumb items={breadCrumb.reverse()} />

                <div className="flex w-full">
                    <List
                        id={USER_ORGANISATION_LIST_ID}
                        GQLRequest={UserOrganisationsQuery}
                        menus={menus}
                        sort={{ items: sortItems }}
                        defaultFilter={{
                            pageSize: 50,
                            page: 0,
                            sort: [{ sort: 'DESC', value: 'updatedAt' }]
                        }}
                        onMenuClick={handleMenuClick}
                        onRenderRow={(row: TUserOrganisation) => (
                            <div className="flex flex-col gap-2">
                                <p className="flex gap-2">
                                    <Link to={translatedRoute(`user/organisation/${row.id}?${encodeUrl(urlParams)}`)}>
                                        <b>{row.designation}</b>
                                    </Link>
                                </p>

                                <ul className="flex items-center sm:gap-10 gap-4">
                                    <li className="flex items-center gap-1">
                                        <i title={CREATED_AT} className="fa-solid fa-clock text-[#6C6868]"></i>
                                        <span className="text-[12px]"><DateSpan value={row.createdAt!} /></span>
                                    </li>
                                    <li className="flex items-center gap-1">
                                        <i title={UPDATED_AT} className="fa-solid fa-clock text-[#6C6868]"></i>
                                        <span className="text-[12px]"><DateSpan value={row.updatedAt!} /></span>
                                    </li>
                                    <li className="flex items-center gap-1">
                                        <i title={USERS} className="fa-solid fa-users text-[#6C6868]"></i>
                                        <span className="text-[12px]">{row.userCount as any}</span>
                                    </li>
                                </ul>
                            </div>
                        )}
                    />
                </div>

            </div>
            <RightSidebar>
                <UserOrganisationFilter />
            </RightSidebar>
            <GenericSuspense>
                <Outlet />
            </GenericSuspense>

            {
                deleteItems.length > 0 &&
                <Dialog
                    open={deleteItems.length > 0}
                    onDismiss={() => setDeleteItems([])}
                    onCancel={() => setDeleteItems([])}
                    onConfirm={() => handleDeleteConfirmed()}
                    title={CONFIRMATION}
                    btnOk={{ label: OK, isSubmit: deleteMutation.isLoading }}
                    btnCancel={{ label: CANCEL }}
                />
            }
        </div>
    )
}

export const USER_ORGANISATION_LIST_ID = 'User.Organisation.List'

const i18n = [
    'Generic.UserManagement.Menu.User.Organisation.Title',
    'std_add',
    'std_created_at',
    'std_updated_at',
    'std_confirmation',
    'std_ok',
    'std_cancel',
    'std_users'
]

export default UserOrganisation
