import { AppRouteProps } from "@mzara/component";
import React from "react";
import { AboutPublicationDetailsRoutes } from "./views/about/AboutPublicationDetailsRoutes";
import { CvListPublicationRoutes } from "./views/cv/CvListPublicationRoutes";


const PublicationDetailsContainer = React.lazy(()=> import('./containers/PuclicationDetailsContainer'));
export const PublicationDetailsRoutes : Array <AppRouteProps> = [
    { 
        path: 'publication/:id', 
        title: 'Harea.Recruiting.Publication.menu',
        element: <PublicationDetailsContainer />,
        children : [
            ...AboutPublicationDetailsRoutes,
            ...CvListPublicationRoutes
        ]
    },
]