import { AppRouteProps } from '@mzara/component'
import React from 'react'

const TranslationEdit = React.lazy(() => import('./containers/TranslationEdit'))

export const TranslationEditRoutes: Array<AppRouteProps> = [
    { 
        path: 'create', 
        title: 'Bo.Translation.Edit.title',
        element: <TranslationEdit />,
    },
    { 
        path: 'edit/:id', 
        title: 'Bo.Translation.Edit.title',
        element: <TranslationEdit />,
    },
    { 
        path: 'clone/:id', 
        title: 'Bo.Translation.Edit.title',
        element: <TranslationEdit clone />,
    },
]
