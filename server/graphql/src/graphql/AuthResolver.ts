import { useUserFind } from "@hooks/user/useUserFind";
import { TSession, TSessionUser, TUser } from "@_types/base";
import { Resolver, Query, Arg, Mutation, Ctx, Info } from "type-graphql";
import { AuthCode, LoginInput, LogoutInput, SendCodeInput, UserErrorEnum } from "./schema/AuthSchema";
import {v4 as uuid} from 'uuid';
import { useUserAuth } from "../hooks/user/useUserAuth";
import { useContext, useContextSession } from "@hooks/context";
import { useSessionLoginUserDevice } from "@hooks/session/useSessionLoginUserDevice";
import { useSessionLogoutUserDevice } from "@hooks/session/useSessionLogoutUserDevice";
import { useGenericResolverFieldsDataOne } from "@hooks/resolver/useGenericResolverFieldsDataOne";

@Resolver()
export class AuthResolver {

    @Query(() => TSessionUser, { nullable: true })
    async runtimeEnv() {
        const context = await useContext()
        return context?.sessionUser;
    }

    @Mutation(() => Boolean)
    async logout() {
        const session = await useContextSession()
        await useSessionLogoutUserDevice(session.id)
        return true
    }


    @Mutation(() => Boolean)
    async logoutDevice(@Arg("data") data: LogoutInput) {
        const session: TSession = await useGenericResolverFieldsDataOne({ className: "TFlow", filter: { id: data.id, page: 0 } })
        if (!(await session.isEditable())) {
            throw new Error('FORBIDDEN')
        }
        await useSessionLogoutUserDevice(data.id)
        return true
    }

    @Mutation(() => String)
    async login(@Arg("data") data: LoginInput) {
        const { result, user } = await useUserAuth(data.userName, data.password)
        if (result !== AuthCode.OK) {
            throw new Error(result)
        }

        const session = await useContextSession()
        await useSessionLoginUserDevice(session, user, data.remember)
        return AuthCode.OK
    }
}