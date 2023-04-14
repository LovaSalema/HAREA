import { MenuItemProps, useTranslationRoute } from "@mzara/component";
import { useParams } from "react-router-dom";

export const useTemplateDetailsMenu = ():Array<MenuItemProps> => {
    const {id} = useParams()
    const t = useTranslationRoute()
    return [
        {
            ke: 'about',
            label: 'A propos',
            link: t(`recruiting/template/${id}/about`)
        },
        {
            ke: 'designer',
            label: 'Designer',
            link: t(`recruiting/template/${id}/designer`)
        },
        {
            ke: 'params',
            label: 'Paramètre',
            link: t(`recruiting/template/${id}/params`)
        }
    ]
}