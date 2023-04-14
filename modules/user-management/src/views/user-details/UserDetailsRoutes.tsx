import { AppRouteProps } from "@mzara/component";
import React from "react";
import { AboutUserDetailsRoutes } from "./views/about/AboutUserDetailsRoutes";
import { ContractsUserDetailsRoutes } from "./views/contracts/ContractsUserDetailsRoutes";
import { DevicesUserDetailsRoutes } from "./views/devices/DevicesUserDetailsRoutes";
import { ParamsUserDetailsRoutes } from "./views/params/ParamsUserDetailsRoutes";
import { VacationUserDetailsRoutes } from "./views/vacation/VacationUserDetailsRoutes";

const UserDetailsContainer = React.lazy(() => import('./containers/UserDetailsContainer'))
export const UserDetailsRoutes: Array<AppRouteProps> = [
    {
        path: 'user/:id',
        title: 'Harea.User.List.Details.title',
        element: <UserDetailsContainer />,
        children: [
            ...AboutUserDetailsRoutes,
            ...ParamsUserDetailsRoutes,
            ...ContractsUserDetailsRoutes,
            ...VacationUserDetailsRoutes,
            ...DevicesUserDetailsRoutes
        ]
    }
]