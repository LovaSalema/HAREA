import { AppRouteProps } from '@mzara/component'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { UserOrganisationViewRoutes } from './views/UserOrganisationViewRoutes'

const UserOrganisation = React.lazy(() => import('./containers/UserOrganisation'))
const UserOrganisationEdit = React.lazy(() => import('./containers/UserOrganisationEdit'))
const UserOrganisationDetails = React.lazy(() => import('./containers/UserOrganisationDetails'))

export const UserOrganisationRoutes: Array<AppRouteProps> = [
    { 
        path: 'user/organisation', 
        title: 'Generic.UserOrganisation.title',
        element: <UserOrganisation />,
        children: [
            {
                path: 'create',
                title: 'Generic.UserOrganisation.Create.title',
                element: <UserOrganisationEdit />,
            }
        ]
    },
    { 
        path: 'user/organisation', 
        title: 'Generic.UserOrganisation.title',
        element: <Outlet />,
        children: [
            {
                path: ':id',
                title: '${designation}',
                element: <UserOrganisationDetails />,
                children: UserOrganisationViewRoutes
            }
        ]
    },
]
