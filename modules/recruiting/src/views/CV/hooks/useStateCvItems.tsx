import { MenuItemProps } from "@mzara/component"
import { useMemo,useState } from "react"
import { useDescriptorsCvStateQuery } from "./useDescriptorsCvStateQuery";

export const useStateCvItems = () => {
    const {data}= useDescriptorsCvStateQuery('RECRUITING_CV_STATE', true);   
    
    return useMemo((): Array<MenuItemProps> => {
        const CvState= [...data.descriptors.data, 
            data.descriptors.data[0].label='Nouveau', 
            data.descriptors.data[1].label='En cours de test', 
            data.descriptors.data[2].label='Entretient',
            data.descriptors.data[3].label='Réjeté'
        ];
        return [CvState[0], CvState[1],CvState[2], CvState[3]];
    }, [])
}



