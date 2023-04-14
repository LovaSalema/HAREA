import { AppRouteProps } from '@mzara/component'
import React from 'react'
import { CVEditRoutes } from './views/edit/CVEditRoutes'


const CVListContainer = React.lazy(() => import('./container/CVListContainer'))

export const CvtRoutes: Array<AppRouteProps> = [
    {
        path: 'cv',
        title: 'Harea.CV.List.title',
        element: <CVListContainer />,
        children: [
            ...CVEditRoutes,
        ]
       
    },
]
