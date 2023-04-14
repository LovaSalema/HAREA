import { AppRouteProps } from "@mzara/component";
import React from "react";
import { EvaluationResultsRoutes } from "./views/evaluation-results/EvaluationResultsRoutes";

const EvaluationContainer = React.lazy(() => import('./container/EvaluationContainer'))

export const EvaluationsRoutes : Array<AppRouteProps> = [
    { 
        path: 'evaluations', 
        title: 'Generic.Auth.Cv.result.title',
        element: <EvaluationContainer/>,
        children: [
            ...EvaluationResultsRoutes
        ]
    }
]