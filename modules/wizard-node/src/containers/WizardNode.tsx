import { BreadCrumb, Button, List, useCdnFlagUrl, DateSpan, useUrlParamsValue, useUrlParamsEncode, MenuItemProps, Dialog, useGraphqlDelete, useListGraphqlQuery, RightSidebar, GenericSuspense, useTranslations, useTranslation, useTranslationRoute, Chip } from "@mzara/component"
import { Link, Outlet } from "react-router-dom"
import { TWizard, TWizardNode } from "@mzara/graphql"
import { useState } from "react"
import { useWizardNodeBreadCrumb } from "hooks/useWizardNodeBreadCrumb"
import { useWizardNodeListMenu } from "hooks/useWizardNodeListMenu"
import { useWizardNodeListSort } from "hooks/useWizardNodeListSort"
import { WizardNodesQuery } from "queries/WizardNodesQuery"
import { WizardNodeFilter } from "components/WizardNodeFilter"

const WizardNode = () => {

    const breadCrumb = useWizardNodeBreadCrumb()
    const menus = useWizardNodeListMenu()
    const [
        ADD,
        CREATED_AT,
        UPDATED_AT,
        CONFIRMATION,
        OK,
        CANCEL,
        WIZARD_NODE
    ] = useTranslations(i18n)
    const t = useTranslation()
    const sortItems = useWizardNodeListSort()
    const translatedRoute = useTranslationRoute()
    const urlParams = useUrlParamsValue()
    const encodeUrl = useUrlParamsEncode()
    const deleteMutation = useGraphqlDelete('wizardNode')
    const [deleteItems, setDeleteItems] = useState<Array<number>>([])
    const { invalidateQuery } = useListGraphqlQuery(WIZARD_NODE_LIST_ID)

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
                    <h4 className="font-semibold">{WIZARD_NODE}</h4>
                    <Link to={translatedRoute(`wizard-node/create?${encodeUrl(urlParams)}`)}>
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
                        id={WIZARD_NODE_LIST_ID}
                        GQLRequest={WizardNodesQuery}
                        menus={menus}
                        separator
                        sort={{ items: sortItems }}
                        defaultFilter={{
                            pageSize: 50,
                            page: 0,
                            sort: [{ sort: 'DESC', value: 'updatedAt' }]
                        }}
                        onMenuClick={handleMenuClick}
                        onRenderRow={(row: TWizardNode) => (
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-col">
                                    <Link to={translatedRoute(`wizard-node/${row.id}?${encodeUrl(urlParams)}`)}>
                                        <h5><b>{t(row.title)}</b></h5>
                                    </Link>
                                </div>
                                <ul className="flex items-center sm:gap-10 gap-4">

                                    <li className="flex items-center gap-1">
                                        <i className="fa-solid fa-key text-[#6C6868]"></i>
                                        <span className="text-[12px]">{row.nodeKey}</span>
                                    </li>
                                    <li className="flex items-center gap-1">
                                        <i title={UPDATED_AT} className="fa-solid fa-clock text-[#6C6868]"></i>
                                        <span className="text-[12px]"><DateSpan value={row.updatedAt!} /></span>
                                    </li>
                                </ul>
                                <div className="flex gap-2">
                                    {
                                        row.tags?.map((tag, index) => (<Chip key={index} color={tag.color} label={tag.value} />))
                                    }
                                </div>
                            </div>
                        )}
                    />
                </div>

            </div>
            <RightSidebar>
                <WizardNodeFilter />
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

export const WIZARD_NODE_LIST_ID = 'Wizard.Node.List'

const i18n = [
    'std_add',
    'std_created_at',
    'std_updated_at',
    'std_confirmation',
    'std_ok',
    'std_cancel',
    'Bo.WizardNode.title'
]

export default WizardNode
