import { Field, InputType } from "type-graphql"

@InputType()
export class LoginInput{

    @Field()
    userName: string

    @Field()
    password: string

    @Field()
    remember?: boolean
}

@InputType()
export class LogoutInput{

    /**
     * session id
     */
    @Field()
    id: number
}

@InputType()
export class SendCodeInput{
    @Field()
    userName: string
}

@InputType()
export class CheckCodeInput {
    @Field()
    id?: string

    @Field()
    code?: string

    @Field({ nullable: true })
    password?: string
}

export enum AuthCode {
    NOT_FOUND = 'NOT_FOUND',
    BLOCKED = 'BLOCKED',
    OK = 'OK',
    FAIL = 'FAIL',
}

export enum UserErrorEnum {
    USER_ALREADY_EXIST = 'USER_ALREADY_EXIST',
    USER_NOT_FOUND = 'USER_NOT_FOUND',
    USER_UPDATE_PASSWORD_DONT_MATCH = 'USER_UPDATE_PASSWORD_DONT_MATCH',
    USER_UPDATE_PASSWORD_DIDNT_CHANGE = 'USER_UPDATE_PASSWORD_DIDNT_CHANGE',
    USER_RESET_PASSWORD_CODE_DONT_MATCH = 'USER_RESET_PASSWORD_CODE_DONT_MATCH',
    USER_RESET_PASSWORD_CODE_EXPIRED = 'USER_RESET_PASSWORD_CODE_EXPIRED'
}
