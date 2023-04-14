import { AppRouteProps } from "@mzara/component";
import React from "react";

const AboutTemplateDetailsContainer = React.lazy(() => import('./containers/AboutTemplateDetailsContainer'))
export const AboutTemplateDetailsRoutes: Array<AppRouteProps> = [
    {
        path: 'about',
        title: 'Harea.Evaluation.Template.Details.About.title',
        element: <AboutTemplateDetailsContainer />
    }
]