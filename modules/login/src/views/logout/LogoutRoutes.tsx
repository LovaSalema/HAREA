import { AppRouteProps } from '@mzara/component'
import React from 'react'

const LogoutContainer = React.lazy(() => import('./containers/LogoutContainer'))

export const LogoutRoutes: Array<AppRouteProps> = [
    { 
        path: 'logout', 
        title: 'Generic.Auth.Logout.title',
        element: <LogoutContainer />
    }
]
