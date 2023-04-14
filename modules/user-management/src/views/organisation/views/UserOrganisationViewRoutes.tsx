import { AppRouteProps } from '@mzara/component'
import React from 'react'

const UserOrganisationDetailsAbout = React.lazy(() => import('./about/containers/UserOrganisationDetailsAbout'))
const UserOrganisationDetailsParameters = React.lazy(() => import('./parameters/containers/UserOrganisationDetailsParameters'))

export const UserOrganisationViewRoutes: Array<AppRouteProps> = [
    { 
        path: 'about', 
        title: 'Generic.UserOrganisation.About.title',
        element: <UserOrganisationDetailsAbout />,
    },
    { 
        path: 'parameters', 
        title: 'Generic.UserOrganisation.Parameters.title',
        element: <UserOrganisationDetailsParameters />,
    },
]
