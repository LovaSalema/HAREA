import { AppRouteProps } from "@mzara/component";
import React from "react";
import { AboutTemplateDetailsRoutes } from "./views/about/AboutTemplateDetailsRoutes";
import { DesignerTemplateDetailsRoutes } from "./views/designer/DesignerTemplateDetailsRoutes";
import { ParamsTemplateDetailsRoutes } from "./views/params/ParamsTemplateDetailsRoutes";

const TemplateDetailsContainer = React.lazy(() => import('./containers/TemplateDetailsContainer'))
export const TemplateDetailsRoutes: Array<AppRouteProps> =[
    {
        path: 'template/:id',
        title: 'Harea.Evaluation.Template.Details.title',
        element: <TemplateDetailsContainer />,
        children: [
            ...AboutTemplateDetailsRoutes, ...DesignerTemplateDetailsRoutes, ...ParamsTemplateDetailsRoutes
        ]
    }
]