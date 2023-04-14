import { AppRouteProps } from "@mzara/component";
import React from "react";

const UserListContainer = React.lazy(() => import('./containers/UserListContainer'))
export const UserListRoutes: Array<AppRouteProps> = [
    {
        path: 'user/list',
        title: 'Harea.User.List',
        element: <UserListContainer />
    }
]