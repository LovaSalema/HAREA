import { AppRouteProps } from '@mzara/component'
 import React from 'react'

const LoginContainer = React.lazy(() => import('../login/containers/LoginContainer'))

export const LoginRoutes: Array<AppRouteProps> = [
    { 
        path: 'login', 
        title: 'Generic.Auth..Login.title',
        element: <LoginContainer />
    }
]
