import { AppRouteProps } from "@mzara/component";
import React from "react";

const CreateEvaluationTemplateContainer = React.lazy(() => import('./containers/CreateEvaluationTemplateContainer'))
export const CreateEvaluationTemplateRoutes: Array<AppRouteProps> = [
    {
        path: 'create',
        title: 'App.Harea.Evaluation.Template.Create.title',
        element: <CreateEvaluationTemplateContainer />
    }
]