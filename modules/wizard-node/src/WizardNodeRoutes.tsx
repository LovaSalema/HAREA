import { AppRouteProps } from '@mzara/component'
import React from 'react'
import { WizardNodeEditRoute } from 'views/create/WizardNodeEditRoute'
import { WizardNodeDetailsRoute } from 'views/details/WizardNodeDetailsRoute'

const WizardNode = React.lazy(() => import('./containers/WizardNode'))
const WizardNodeDetails = React.lazy(() => import('./views/details/containers/WizardNodeDetails'))

export const WizardNodeRoutes: Array<AppRouteProps> = [
    { 
        path: 'wizard-node', 
        title: 'Bo.WizardNode.title',
        element: <WizardNode />,
        children: [
            ...WizardNodeEditRoute
        ]
    },
    {
        path: 'wizard-node', 
        title: 'Bo.WizardNode.title',
        children: WizardNodeDetailsRoute
    }
]
