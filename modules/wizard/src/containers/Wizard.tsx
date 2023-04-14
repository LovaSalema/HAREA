import { BreadCrumb, Button, List, useCdnFlagUrl, DateSpan, useUrlParamsValue, useUrlParamsEncode, MenuItemProps, Dialog, useGraphqlDelete, useListGraphqlQuery, RightSidebar, GenericSuspense, useTranslations, useTranslation, useTranslationRoute, Chip } from "@mzara/component"
import { Link, Outlet } from "react-router-dom"
import { WizardFilter } from "../components/WizardFilter"
import { useWizardListSort } from "../hooks/useWizardListSort"
import { useWizardBreadCrumb } from "../hooks/useWizardBreadCrumb"
import { useWizardListMenu } from "../hooks/useWizardListMenu"
import { WizardsQuery } from "../queries/WizardsQuery"
import { TWizard } from "@mzara/graphql"
import { useState } from "react"

const Wizard = () => {

    const breadCrumb = useWizardBreadCrumb()
    const menus = useWizardListMenu()
    const [
        ADD,
        CREATED_AT,
        UPDATED_AT,
        CONFIRMATION,
        OK,
        CANCEL,
        WIZARD,
        TYPE
    ] = useTranslations(i18n)
    const t = useTranslation()
    const cdn = useCdnFlagUrl()
    const sortItems = useWizardListSort()
    const translatedRoute = useTranslationRoute()
    const urlParams = useUrlParamsValue()
    const encodeUrl = useUrlParamsEncode()
    const deleteMutation = useGraphqlDelete('wizard')
    const [deleteItems, setDeleteItems] = useState<Array<number>>([])
    const { invalidateQuery } = useListGraphqlQuery(WIZARD_LIST_ID)

    const handleMenuClick = (row: TWizard, menu: MenuItemProps) => {
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
                    <h4 className="font-semibold">{WIZARD}</h4>
                    <Link to={translatedRoute(`wizard/create?${encodeUrl(urlParams)}`)}>
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
                        id={WIZARD_LIST_ID}
                        GQLRequest={WizardsQuery}
                        menus={menus}
                        sort={{ items: sortItems }}
                        defaultFilter={{
                            pageSize: 50,
                            page: 0,
                            sort: [{ sort: 'DESC', value: 'updatedAt' }]
                        }}
                        onMenuClick={handleMenuClick}
                        separator
                        onRenderRow={(row: TWizard) => (
                            <div className="flex flex-col gap-2">
                                <p className="flex gap-2">
                                    <Link to={translatedRoute(`wizard/${row.id}?${encodeUrl(urlParams)}`)}>
                                        <b>{row.title}</b>
                                    </Link>
                                </p>
                                <ul className="flex items-center sm:gap-10 gap-4">
                                    <li className="flex items-center gap-1">
                                        <i className="fa-solid fa-key text-[#6C6868]"></i>
                                        <span className="text-[12px]">{row.wizardKey}</span>
                                    </li>
                                    <li className="flex items-center gap-1">
                                        <i title={UPDATED_AT} className="fa-solid fa-clock text-[#6C6868]"></i>
                                        <span className="text-[12px]"><DateSpan value={row.updatedAt!} /></span>
                                    </li>
                                    <li className="flex items-center gap-1">
                                        <i title={TYPE} className={`fa-solid ${row.type === 'SEQUENTIAL' ? 'fa-layer-group' : 'fa-code-branch'} text-[#6C6868]`}></i>
                                        <span className="text-[12px]">{t(`Bo.WizardNode.form.type.${row.type}.label`)}</span>
                                    </li>
                                </ul>
                                <div className="flex gap-2 w-full">
                                    {
                                        row.tags?.map((item, index) => (<Chip key={index} label={item.value} color={item.color} />))
                                    }
                                </div>

                            </div>
                        )}
                    />
                </div>

            </div>
            <RightSidebar>
                <WizardFilter />
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

export const WIZARD_LIST_ID = 'Wizard.List'

const i18n = [
    'std_add',
    'std_created_at',
    'std_updated_at',
    'std_confirmation',
    'std_ok',
    'std_cancel',
    'Bo.Wizard.title',
    'std_type'
]

export default Wizard
