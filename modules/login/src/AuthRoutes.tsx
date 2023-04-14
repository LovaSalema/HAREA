import { AppRouteProps } from '@mzara/component'
import React from 'react'
import { LoginRoutes } from './views/login/LoginRoutes'
import { LogoutRoutes } from './views/logout/LogoutRoutes'
import {SignupRoutes} from './views/singup/SignupRoutes'
const AuthContainer = React.lazy(() => import('./containers/AuthContainer'))

export const AuthRoutes: Array<AppRouteProps> = [
    { 
        path: 'auth', 
        title: 'Auth.title',
        element: <AuthContainer />,
        children: [
            ...LoginRoutes, 
            ...LogoutRoutes,
            ...SignupRoutes
        ]
    }
]
