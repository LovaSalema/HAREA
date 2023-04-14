import { AppRouteProps } from "@mzara/component";
import React from "react";

const ParamsUserDetailsContainer = React.lazy(() => import('./containers/ParamsUserDetailsContainer'))
export const ParamsUserDetailsRoutes: Array<AppRouteProps> = [
    {
        path: 'params',
        title: 'Harea.User.Details.Params.title',
        element: <ParamsUserDetailsContainer />
    }
]