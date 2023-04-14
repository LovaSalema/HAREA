import { TUserOrganisation, TUserOrganisationsResponse } from "@mzara/graphql"
import { GraphQLQueryClass } from "@mzara/component"

export class UserOrganisationsQuery implements GraphQLQueryClass<TUserOrganisationsResponse, TResponse> {
    public queryKey: string = 'App.Bo.UserOrganisationsQuery'

    public gql: string = `
        query UserOrganisationsQuery(
                $key: String,
                $pageSize: Float, 
                $page: Float,
                $sort: [TFilterSort!],
                $data: JSONObject
            ) {
            userOrganisations (filter: {
                key: $key,
                pageSize: $pageSize,
                page: $page,
                sort: $sort,
                data: $data
            }) {
                total
                data {
                    id organisationKey designation createdAt updatedAt isEditable isDeletable userCount
                }
            }
        }
    `

    variables?: any

    constructor(variables?: any) {
        this.variables = variables
    }

    mapFn(data: TResponse): TUserOrganisationsResponse {
        return {
            total: data.userOrganisations.total,
            data: data.userOrganisations.data
        }
    }
}

export type TResponse = {
    userOrganisations: {
        total: number,
        data: Array<TUserOrganisation>
    }
}
