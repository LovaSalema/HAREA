import { MenuItemProps, useTranslationRoute, useTranslations } from "@mzara/component"
import { useMemo } from "react"
import { useParams } from "react-router-dom";
import { useRecruitingAdvertsDetailsQuery } from "./useRecruitingAdvertsDetailsQuery";

export const usePublicationDetailsMenu = () => {
   
    const {id} = useParams()
    const {data} = useRecruitingAdvertsDetailsQuery(parseInt(id), true);
    
    const translatedRoute = useTranslationRoute()

    return useMemo((): Array<MenuItemProps> => ([
        {
            ke: 'about',
            label: 'A propos',
            link: translatedRoute(`recruiting/publication/${id}/about`)
        },
        {
            ke: 'cv',
            label: 'Liste des Cvs',
            badge: data?.cvs?.length==0? '': data?.cvs?.length,
            link: translatedRoute(`recruiting/publication/${id}/cv`)
        },
        {
            ke: 'params',
            label: 'Paramètres',
            link: translatedRoute(`recruiting/publication/${id}/params`)
        },
    ]), [data?.cvs?.length])
}

const i18n = [
    'std_about',
    'std_cv',
    'std_params',
]
