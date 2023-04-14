import { AppRouteProps } from "@mzara/component";
import React from "react";

const CvListContainer= React.lazy(()=>import('./containers/CvListContainer') )
export const CvListPublicationRoutes : Array <AppRouteProps>=[
    {
        path:'cv',
        title: 'Harea.Recruiting.Publicattion.cv',
        element : <CvListContainer/>
    }
]