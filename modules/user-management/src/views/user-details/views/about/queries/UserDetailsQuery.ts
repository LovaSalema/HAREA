import { GraphQLQueryClass } from "@mzara/component";
import { TUser } from "@mzara/graphql";

export class UserDetailsQuery implements GraphQLQueryClass<TUser, TResponse> {
    public queryKey: string = 'App.Harea.UserDetailsQuery.Details';
    public gql: string = `
        query($id: Float){
            user(filter: {id: $id}){
                id
                firstName
                lastName
                fullName
                email
                phone
                skype
                isDisabled
                profilePicture{id}
                recruitingContracts{id designation}
                sessionUsers{id active session{id plateform browser browserVersion}}
            }
        }
    `;
    variables?: any;
    
    constructor(variables?: any){
        this.variables = variables;
    }
    
    mapFn(data: TResponse): TUser {
        return data.user
    };
}

export type TResponse = {
    user: TUser
}