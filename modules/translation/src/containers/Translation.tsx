import { BreadCrumb, Button, useTranslations, List, useCdnFlagUrl, DateSpan, useTranslationRoute, useTranslation, useUrlParamsValue, useUrlParamsEncode, MenuItemProps, Dialog, useGraphqlDelete, useListGraphqlQuery, RightSidebar, GenericSuspense } from "@mzara/component"
import { Link, Outlet } from "react-router-dom"
import { TranslationFilter } from "../components/TranslationFilter"
import { useTranslationListSort } from "../hooks/useTranslationListSort"
import { useTranslationBreadCrumb } from "../hooks/useTranslationBreadCrumb"
import { useTranslationListMenu } from "../hooks/useTranslationListMenu"
import { TranslationsQuery } from "../queries/TranslationsQuery"
import { TTranslation } from "@mzara/graphql"
import { useState } from "react"

const Translation = () => {

    const breadCrumb = useTranslationBreadCrumb()
    const menus = useTranslationListMenu()
    const [
        ADD,
        CREATED_AT,
        UPDATED_AT,
        CONFIRMATION,
        OK,
        CANCEL,
        APP,
        QUALITY,
        TRANSLATION
    ] = useTranslations(i18n)
    const t = useTranslation()
    const cdn = useCdnFlagUrl()
    const sortItems = useTranslationListSort()
    const translatedRoute = useTranslationRoute()
    const urlParams = useUrlParamsValue()
    const encodeUrl = useUrlParamsEncode()
    const deleteMutation = useGraphqlDelete('translation')
    const [deleteItems, setDeleteItems] = useState<Array<number>>([])
    const { invalidateQuery } = useListGraphqlQuery(TRANSLATION_LIST_ID)

    const handleMenuClick = (row: TTranslation, menu: MenuItemProps) => {
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
                    <h4 className="font-semibold">{TRANSLATION}</h4>
                    <Link to={translatedRoute(`translation/create?${encodeUrl(urlParams)}`)}>
                        <Button
                            startIcon="fa-solid fa-plus"
                            className='btn btn-primary'
                            label={ADD}
                        />
                    </Link>
                </div>
                <div className="flex items-center w-full gap-2 h-14">
                    <BreadCrumb items={breadCrumb} />
                </div>

                <div className="flex w-full">
                    <List
                        id={TRANSLATION_LIST_ID}
                        GQLRequest={TranslationsQuery}
                        menus={menus}
                        sort={{ items: sortItems }}
                        separator
                        defaultFilter={{
                            pageSize: 50,
                            page: 0,
                            sort: [{ sort: 'DESC', value: 'updatedAt' }]
                        }}
                        onMenuClick={handleMenuClick}
                        onRenderRow={(row: TTranslation) => (
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col">
                                    <Link to={translatedRoute(`translation/edit/${row.id}?${encodeUrl(urlParams)}`)}>
                                        <h5><b>{row.translationKey}</b></h5>
                                    </Link>
                                    <p>{row.value}</p>
                                </div>
                                <ul className="flex items-center sm:gap-10 gap-4">
                                    <li className="flex items-center gap-1">
                                        <img
                                            src={cdn(row.language?.value)}
                                            title={t(row.language?.translationKey as any || '')}
                                            alt={t(row.language?.translationKey as any || '')}
                                            className="w-4 h-4" />
                                        <span className="text-[12px]">{t(row.language.translationKey as any)}</span>
                                    </li>
                                    <li className="flex items-center gap-1">
                                        <i title={UPDATED_AT} className="fa-solid fa-clock text-[#6C6868]"></i>
                                        <span className="text-[12px]"><DateSpan value={row.updatedAt!} /></span>
                                    </li>
                                    <li className="flex items-center gap-1">
                                        <i title={APP} className="fa-solid fa-desktop text-[#6C6868]"></i>
                                        <span className="text-[12px]">{t(row.appName.translationKey as any)}</span>
                                    </li>
                                    <li className="flex items-center gap-1">
                                        <i title={QUALITY} className="fa-solid fa-vials text-[#6C6868]"></i>
                                        <span className="text-[12px]">{t(row.quality.translationKey as any)}</span>
                                    </li>
                                </ul>
                            </div>
                        )}
                    />
                </div>

            </div>
            <RightSidebar>
                <TranslationFilter />
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

export const TRANSLATION_LIST_ID = 'Translation.List'

const i18n = [
    'std_add',
    'std_created_at',
    'std_updated_at',
    'std_confirmation',
    'std_ok',
    'std_cancel',
    'Generic.txt.translate.form.app.label',
    'Generic.txt.translate.form.quality.label',
    'Generic.txt.traduction.label'
]

export default Translation
