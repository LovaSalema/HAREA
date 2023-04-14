import { AppRouteProps } from "@mzara/component";
import React from "react";

const DesignerTemplateDetailsContainer = React.lazy(() => import('./containers/DesignerTemplateDetailsContainer'))
export const DesignerTemplateDetailsRoutes: Array<AppRouteProps> = [
    {
        path: 'designer',
        title: 'Harea.Evaluation.Template.Details.Designer.title',
        element: <DesignerTemplateDetailsContainer />
    }
]