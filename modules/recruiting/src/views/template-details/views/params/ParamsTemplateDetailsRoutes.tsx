import { AppRouteProps } from "@mzara/component";
import React from "react";

const ParamsTemplateDetailsContainer = React.lazy(() => import('./containers/ParamsTemplateDetailsContainer'))
export const ParamsTemplateDetailsRoutes: Array<AppRouteProps> = [
    {
        path: 'params',
        title: 'Harea.Evaluation.Template.Details.Params.title',
        element: <ParamsTemplateDetailsContainer />
    }
]