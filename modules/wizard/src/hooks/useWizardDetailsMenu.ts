import { MenuItemProps, useTranslationRoute, useTranslations } from "@mzara/component"
import { useMemo } from "react"

export const useWizardDetailsMenu = (id: number) => {
    
    const [
        ABOUT,
        DESIGNER,
        PARAMS
    ] = useTranslations(i18n)
    
    const translatedRoute = useTranslationRoute()

    return useMemo((): Array<MenuItemProps> => ([
        {
            ke: 'about',
            label: ABOUT,
            link: translatedRoute(`wizard/${id}/about`),
            
        },
        {
            ke: 'designer',
            label: DESIGNER,
            link: translatedRoute(`wizard/${id}/designer`),
        },
        {
            ke: 'params',
            label: PARAMS,
            link: translatedRoute(`wizard/${id}/params`),
        },
    ]), [ABOUT])
}

const i18n = [
    'std_about',
    'std_designer',
    'std_params'
]
