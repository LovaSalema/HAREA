import { AppRouteProps } from '@mzara/component'
import React from 'react'

const WizardDetailsAbout = React.lazy(() => import('./about/containers/WizardDetailsAbout'))
const WizardDetailsDesigner = React.lazy(() => import('./designer/containers/WizardDetailsDesigner'))
const WizardDetailsParams = React.lazy(() => import('./params/containers/WizardDetailsParams'))

export const WizardDetailsViewRoutes: Array<AppRouteProps> = [
    { 
        path: 'about', 
        title: 'Bo.Wizard.About.title',
        element: <WizardDetailsAbout />,
    },
    { 
        path: 'designer', 
        title: 'Bo.Wizard.Designer.title',
        element: <WizardDetailsDesigner />,
    },
    { 
        path: 'params', 
        title: 'Bo.Wizard.Params.title',
        element: <WizardDetailsParams />,
    },
]
