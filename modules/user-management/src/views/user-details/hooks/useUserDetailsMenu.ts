import { MenuItemProps, useTranslationRoute, useUrlParamsValue } from "@mzara/component";
import { useParams } from "react-router-dom";

export const useUserDetailsMenu = (): Array<MenuItemProps> => {
    const {id} = useParams()
    const t = useTranslationRoute()
    return [
        {
            ke: 'about',
            label: 'A propos',
            link: t(`user/${id}/about`)
        },
        {
            ke: 'vacation',
            label: 'Congés',
            link: t(`user/${id}/vacation`)
        },
        {
            ke: 'contracts',
            label: 'Contrats',
            link: t(`user/${id}/contracts`)
        },
        {
            ke: 'devices',
            label: 'Appareils',
            link: t(`user/${id}/devices`)
        },
        {
            ke: 'params',
            label: 'Paramètre',
            link: t(`user/${id}/params`)
        }
        
    ]
}