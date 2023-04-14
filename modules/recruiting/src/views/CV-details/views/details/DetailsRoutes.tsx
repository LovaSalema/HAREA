import { AppRouteProps } from "@mzara/component";
import React from "react";

const DetailsContainer= React.lazy(() => import('./containers/DetailsContainer'))

export const DetailsRoutes : Array<AppRouteProps> = [
    { 
        path: 'details', 
        title: 'Generic.Auth.Cv.details.title',
        element: <DetailsContainer />
    }
]