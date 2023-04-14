import { AppRouteProps } from '@mzara/component'
import React from 'react'
import WizardDetails from 'containers/WizardDetails'
import { WizardDetailsViewRoutes } from 'view/WizardDetailsViewRoutes'

const Translation = React.lazy(() => import('./containers/Wizard'))
const WizardEdit = React.lazy(() => import('./containers/WizardEdit'))

export const WizardRoutes: Array<AppRouteProps> = [
    { 
        path: 'wizard', 
        title: 'Bo.Wizard.title',
        element: <Translation />,
        children: [
            {
                path: 'create',
                title: 'Bo.Wizard.Create.title',
                element: <WizardEdit />,
            }
        ]
    },
    {
        path: 'wizard/:id', 
        title: 'Bo.Wizard.title',
        element: <WizardDetails />,
        children: [
            ...WizardDetailsViewRoutes
        ]
    },
]
