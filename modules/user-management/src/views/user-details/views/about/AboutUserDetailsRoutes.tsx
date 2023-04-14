import { AppRouteProps } from "@mzara/component";
import React from "react";

const AboutUserDetailsContainer = React.lazy(() => import('./containers/AboutUserDetailsContainer'))
export const AboutUserDetailsRoutes: Array<AppRouteProps> = [
    {
        path: 'about',
        title: 'Harea.User.List.About.title',
        element: <AboutUserDetailsContainer />
    }
]