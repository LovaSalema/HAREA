import { TUserOrganisation } from "@mzara/graphql"
import { useTranslationRoute, useTranslations, useUrlParamsEncode, useUrlParamsValue } from "@mzara/component"
import { ListRowMenuProps } from "@mzara/component"
import { useMemo } from "react"

export const useUserOrganisationListMenu = () => {
    
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
            linkFn: (row: TUserOrganisation) => translatedRoute(`user/organisation/${row.id}?${encodeUrl(urlParams)}`),
            disabledFn: (row: TUserOrganisation) => !row.isEditable,
        },
        {
            ke: 'delete',
            startIcon: 'fa-solid fa-trash',
            label: DELETE,
            disabledFn: (row: TUserOrganisation) => !row.isDeletable,
        }
    ]), [urlParams])
}

const i18n = [
    'std_edit',
    'std_delete',
    'std_clone',
]
