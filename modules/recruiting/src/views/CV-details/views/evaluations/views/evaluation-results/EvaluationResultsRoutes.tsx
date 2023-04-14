import { AppRouteProps } from "@mzara/component"
import React from "react"

const EvaluationResultsContainer = React.lazy(() => import('./containers/EvaluationResultsContainer'))
export const EvaluationResultsRoutes: Array<AppRouteProps> = [
    {
        path: ':idEvaluation/results',
        title: 'Harea.CV.Details.Evaluations.Results.title',
        element: <EvaluationResultsContainer />
    }
]