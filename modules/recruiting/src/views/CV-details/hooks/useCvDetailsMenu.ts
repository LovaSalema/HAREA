import { MenuItemProps, useTranslationRoute } from '@mzara/component';
import {useMemo} from 'react';

 export const useCvDetailsMenu = (id: string)=> {
    const translateRoute = useTranslationRoute();
    return useMemo(():Array<MenuItemProps> =>([
        {
            ke : 'details',
            label: 'pièce jointe',
            link : translateRoute(`recruiting/cv/${id}/details`)
        },
        {
            ke : 'evaluations',
            label: 'Evaluations',
            link : translateRoute(`recruiting/cv/${id}/evaluations`)
        }

    ]), [])
}