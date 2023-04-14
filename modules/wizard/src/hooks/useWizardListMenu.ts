import { TWizard } from "@mzara/graphql"
import { useTranslationRoute, useTranslations, useUrlParamsEncode, useUrlParamsValue } from "@mzara/component"
import { ListRowMenuProps } from "@mzara/component"
import { useMemo } from "react"

export const useWizardListMenu = () => {
    
    const [
        EDIT,
        DELETE,
        CLONE,
        DESIGNER
    ] = useTranslations(i18n)
    
    const translatedRoute = useTranslationRoute()
    const urlParams = useUrlParamsValue()
    const encodeUrl = useUrlParamsEncode()

    return useMemo((): Array<ListRowMenuProps> => ([
        {
            ke: 'edit',
            startIcon: 'fa-solid fa-pen',
            label: EDIT,
            linkFn: (row: TWizard) => translatedRoute(`wizard/edit/${row.id}?${encodeUrl(urlParams)}`),
            disabledFn: (row: TWizard) => !row.isEditable,
        },
        {
            ke: 'designer',
            startIcon: 'fa-solid fa-wand-magic-sparkles',
            label: DESIGNER,
            linkFn: (row: TWizard) => translatedRoute(`wizard/designer/${row.id}?${encodeUrl(urlParams)}`),
            disabledFn: (row: TWizard) => !row.isEditable,
        },
        {
            ke: 'delete',
            startIcon: 'fa-solid fa-trash',
            label: DELETE,
            disabledFn: (row: TWizard) => !row.isDeletable,
        }
    ]), [urlParams])
}

const i18n = [
    'std_edit',
    'std_delete',
    'std_clone',
    'std_designer'
]
