import { AppRouteProps } from '@mzara/component'
import React from 'react'

const WizardEdit = React.lazy(() => import('./containers/WizardEdit'))

export const WizardNodeEditRoute: Array<AppRouteProps> = [
    {
        path: 'create',
        title: 'Bo.Wizard.Create.title',
        element: <WizardEdit />,
    },
    {
        path: 'edit/:id',
        title: 'Bo.Wizard.Edit.title',
        element: <WizardEdit />,
    },
    {
        path: 'clone/:id',
        title: 'Bo.Wizard.Clone.title',
        element: <WizardEdit clone />,
    },
]
