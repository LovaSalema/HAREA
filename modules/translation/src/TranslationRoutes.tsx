import { AppRouteProps } from '@mzara/component'
import { TranslationEditRoutes } from './views/edit/TranslationEditRoutes'
import React from 'react'

const Translation = React.lazy(() => import('./containers/Translation'))

export const TranslationRoutes: Array<AppRouteProps> = [
    { 
        path: 'translation', 
        title: 'Bo.Translation.title',
        element: <Translation />,
        children: [
            ...TranslationEditRoutes
        ]
    }
]
