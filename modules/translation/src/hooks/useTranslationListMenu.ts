import { TTranslation } from "@mzara/graphql"
import { MenuItemProps, useTranslationRoute, useTranslations, useUrlParamsEncode, useUrlParamsValue } from "@mzara/component"
import { ListRowMenuProps } from "@mzara/component"
import { useMemo } from "react"

export const useTranslationListMenu = () => {
    
    const [
        EDIT,
        DELETE,
        CLONE
    ] = useTranslations(i18n)
    
    const translatedRoute = useTranslationRoute()
    const urlParams = useUrlParamsValue()
    const encodeUrl = useUrlParamsEncode()

    return useMemo((): Array<ListRowMenuProps> => ([
        {
            ke: 'edit',
            startIcon: 'fa-solid fa-pen',
            label: EDIT,
            linkFn: (row: TTranslation) => translatedRoute(`translation/edit/${row.id}?${encodeUrl(urlParams)}`),
            disabledFn: (row: TTranslation) => !row.isEditable,
        },
        {
            ke: 'clone',
            startIcon: 'fa-solid fa-copy',
            label: CLONE,
            linkFn: (row: TTranslation) => translatedRoute(`translation/clone/${row.id}?${encodeUrl(urlParams)}`),
            disabledFn: (row: TTranslation) => !row.isEditable,
        },
        {
            ke: 'delete',
            startIcon: 'fa-solid fa-trash',
            label: DELETE,
            disabledFn: (row: TTranslation) => !row.isDeletable,
        }
    ]), [urlParams])
}

const i18n = [
    'std_edit',
    'std_delete',
    'std_clone',
]
