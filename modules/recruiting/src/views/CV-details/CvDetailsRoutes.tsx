import { AppRouteProps } from "@mzara/component";
import React from "react";
import { DetailsRoutes } from "./views/details/DetailsRoutes";
import { EvaluationsRoutes } from "./views/evaluations/EvaluationsRoutes";

const CvDetailsContainer = React.lazy(() => import('./containers/CvDetailsContainer'))

export const CvDetailsRoutes : Array<AppRouteProps> = [
    { 
        path: 'cv/:id', 
        title: 'Generic.Auth.Cv.title',
        element: <CvDetailsContainer />,
        children : [
                ...EvaluationsRoutes,
                ...DetailsRoutes
        ]
    }
]