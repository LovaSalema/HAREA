import { AppRouteProps } from '@mzara/component'
import { UserListRoutes } from 'views/list/UserListRoutes'
import { UserOrganisationRoutes } from 'views/organisation/UserOrganisationRoutes'
import { UserDetailsRoutes } from 'views/user-details/UserDetailsRoutes'

export const UserRoutes: Array<AppRouteProps> = [
    ...UserOrganisationRoutes, ...UserListRoutes, ...UserDetailsRoutes
]
