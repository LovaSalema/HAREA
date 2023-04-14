import { GraphQLQueryClass } from "@mzara/component";
import { TUser, TUsersResponse } from "@mzara/graphql";

export class UserListQuery implements GraphQLQueryClass<TUsersResponse, TResponse>{
    public queryKey: string = 'App.Harea.UserManagement.UserListQuery';
    public gql: string = `
        query UserListQuery(
            $pageSize: Float,
            $page: Float,
            $data: JSONObject
        ){
            users(filter: {
                data: $data,
                pageSize: $pageSize,
                page: $page
            }){
                total
                data{
                    id firstName lastName email job recruitingContracts{id designation} profilePicture{id}
                }
            }
        }
    `;
    variables?: any

    constructor(variables: any){
        this.variables = variables
    }
    mapFn(data: TResponse): TUsersResponse {
        return {
            total: data.users.total,
            data: data.users.data
        }
    };

}

export type TResponse = {
    users: {
        total: number,
        data: Array<TUser>
    }
}