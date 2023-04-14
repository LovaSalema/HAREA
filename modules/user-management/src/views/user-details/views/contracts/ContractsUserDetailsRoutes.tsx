import { AppRouteProps } from "@mzara/component";
import React from "react";

const ContractsUserDetailsContainer = React.lazy(() => import('./containers/ContractsUserDetailsContainer'))
export const ContractsUserDetailsRoutes: Array<AppRouteProps> = [
    {
        path: 'contracts',
        title: 'Harea.User.Details.Vacation.title',
        element: <ContractsUserDetailsContainer />
    }
]