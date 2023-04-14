import { AppRouteProps } from "@mzara/component";
import React from "react";
import { CreateEvaluationTemplateRoutes } from "./views/create/CreateEvaluationTemplateRoutes";

const TemplateContainer = React.lazy(() => import('./containers/TemplateContainer'))
export const TemplateRoutes: Array<AppRouteProps> = [
    {
        path: 'template',
        title: 'Harea.Evaluation.Template.List.title',
        element: <TemplateContainer />,
        children: [
            ...CreateEvaluationTemplateRoutes
        ]
    }
]