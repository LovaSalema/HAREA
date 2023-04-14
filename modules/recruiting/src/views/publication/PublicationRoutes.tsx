import { AppRouteProps } from '@mzara/component'
 import React, { Children } from 'react'
const PublicationContainer = React.lazy(() => import('./containers/PublicationContainer'))
const ListCVAdverts = React.lazy(() => import('./components/ListCVAdverts'))

export const PublicationRoutes: Array<AppRouteProps> = [
    { 
        path: 'publication', 
        title: 'Harea.Recruiting.Publication.title',
        element: <PublicationContainer />,
        children: [
            {
                path: 'viewer/:id',
                title: 'Harea.Recruiting.Publication.Viewer.title',
                element: <ListCVAdverts />
            },
        ]
    },
]
