import { AppRouteProps } from '@mzara/component'
import React from 'react'

const SignupContainer = React.lazy(() => import('./container/responsiveSignupContainer'))

export const SignupRoutes: Array<AppRouteProps> = [
    { 
        path: 'signup', 
        title: 'Generic.Auth..Signup.title',
        element: <SignupContainer />
    }
]
