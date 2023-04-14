import { AppRouteProps } from '@mzara/component'
import React from 'react'

const CVAddContainer = React.lazy(() => import('./containers/CVAddContainer'))

export const CVEditRoutes: Array<AppRouteProps> = [
    { 
        path: 'create', 
        title: 'Harea.CV.List.Edit.title',
        element: <CVAddContainer />,
    },
]
