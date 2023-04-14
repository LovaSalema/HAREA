import { AppRouteProps } from '@mzara/component'
import React from 'react'
import WizardNodeParams from './views/params/containers/WizardNodeParams'

const WizardNodeDetails = React.lazy(() => import('./containers/WizardNodeDetails'))
const WizardNodeDetailsAbout = React.lazy(() => import('./views/about/containers/WizardNodeDetailsAbout'))
const WizardNodeDetailsDesigner = React.lazy(() => import('./views/designer/containers/WizardNodeDetailsDesigner'))
const WizardNodeDetailsTesting = React.lazy(() => import('./views/test/containers/WizardNodeDetailsTesting'))


export const WizardNodeDetailsRoute: Array<AppRouteProps> = [
    {
        path: ':id', 
        title: '',
        element: <WizardNodeDetails />,
        children: [
            {
                path: 'about', 
                title: 'std_about',
                element: <WizardNodeDetailsAbout />,
            },
            {
                path: 'designer', 
                title: 'std_designer',
                element: <WizardNodeDetailsDesigner />,
            },
            {
                path: 'test', 
                title: 'std_test',
                element: <WizardNodeDetailsTesting />,
            },
            
            {
                path: 'params', 
                title: 'std_params',
                element: <WizardNodeParams />,
            },
        ]
    }
]
