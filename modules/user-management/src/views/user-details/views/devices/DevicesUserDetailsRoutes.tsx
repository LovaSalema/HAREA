import { AppRouteProps } from "@mzara/component";
import React from "react";

const DevicesUserDetailsContainer = React.lazy(() => import('./containers/DevicesUserDetailsContainer'))
export const DevicesUserDetailsRoutes: Array<AppRouteProps> = [
    {
        path: 'devices',
        title: 'Harea.User.Details.Devices.title',
        element: <DevicesUserDetailsContainer />
    }
]