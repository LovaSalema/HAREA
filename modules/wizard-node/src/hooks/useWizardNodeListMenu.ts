import { TWizardNode } from "@mzara/graphql"
import { useTranslationRoute, useTranslations, useUrlParamsEncode, useUrlParamsValue } from "@mzara/component"
import { ListRowMenuProps } from "@mzara/component"
import { useMemo } from "react"

export const useWizardNodeListMenu = () => {
    
    const [
        EDIT,
        CLONE,
        DELETE
    ] = useTranslations(i18n)
    
    const translatedRoute = useTranslationRoute()
    const urlParams = useUrlParamsValue()
    const encodeUrl = useUrlParamsEncode()

    return useMemo((): Array<ListRowMenuProps> => ([
        {
            ke: 'edit',
            startIcon: 'fa-solid fa-pen',
            label: EDIT,
            linkFn: (row: TWizardNode) => translatedRoute(`wizard-node/edit/${row.id}?${encodeUrl(urlParams)}`),
            disabledFn: (row: TWizardNode) => !row.isEditable,
        },
        {
            ke: 'clone',
            startIcon: 'fa-solid fa-copy',
            label: CLONE,
            linkFn: (row: TWizardNode) => translatedRoute(`wizard-node/clone/${row.id}?${encodeUrl(urlParams)}`),
            disabledFn: (row: TWizardNode) => !row.isEditable,
        },
        {
            ke: 'delete',
            startIcon: 'fa-solid fa-trash',
            label: DELETE,
            disabledFn: (row: TWizardNode) => !row.isDeletable,
        }
    ]), [urlParams])
}

const i18n = [
    'std_edit',
    'std_clone',
    'std_delete',
]
