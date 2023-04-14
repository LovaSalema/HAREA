import { MenuItemProps, useTranslationRoute, useTranslations } from "@mzara/component"
import { useMemo } from "react"
import { useUserOrganisationDetailsQuery } from "./useUserOrganisationDetailsQuery"

export const useUserOrganisationDetailsMenu = (id: number) => {
    
    const [
        ABOUT,
        PARAMS,
    ] = useTranslations(i18n)
    
    const { data } = useUserOrganisationDetailsQuery(id, true)
    const translatedRoute = useTranslationRoute()

    return useMemo((): Array<MenuItemProps> => ([
        {
            ke: 'about',
            label: ABOUT,
            link: translatedRoute(`user/organisation/${id}/about`)
        },
        {
            ke: 'parameters',
            label: PARAMS,
            link: translatedRoute(`user/organisation/${id}/parameters`)
        },
    ]), [data])
}

const i18n = [
    'std_about',
    'std_params',
]
