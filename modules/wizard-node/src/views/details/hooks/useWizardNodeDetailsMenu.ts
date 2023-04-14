import { MenuItemProps, useTranslationRoute, useTranslations } from "@mzara/component"
import { useMemo } from "react"

export const useWizardNodeDetailsMenu = (id: string) => {
    
    const [
        ABOUT,
        DESIGNER,
        TEST,
        PARAMS
    ] = useTranslations(i18n)
    
    const translatedRoute = useTranslationRoute()

    return useMemo((): Array<MenuItemProps> => ([
        {
            ke: 'about',
            label: ABOUT,
            link: translatedRoute(`wizard-node/${id}/about`)
        },
        {
            ke: 'designer',
            label: DESIGNER,
            link: translatedRoute(`wizard-node/${id}/designer`)
        },
        {
            ke: 'test',
            label: TEST,
            link: translatedRoute(`wizard-node/${id}/test`)
        },
        {
            ke: 'params',
            label: PARAMS,
            link: translatedRoute(`wizard-node/${id}/params`)
        },
    ]), [ABOUT])
}

const i18n = [
    'std_about',
    'std_designer',
    'std_test',
    'std_params',
]
