import { AppRouteProps } from "@mzara/component";
import React from "react";

const VacationUserDetailsContainer = React.lazy(() => import('./containers/VacationUserDetailsContainer'))
export const VacationUserDetailsRoutes: Array<AppRouteProps> = [
    {
        path: 'vacation',
        title: 'Harea.User.Details.Vacation.title',
        element: <VacationUserDetailsContainer />
    }
]