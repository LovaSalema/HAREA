import { AuthCode } from "@graphql/schema/AuthSchema"
import { useUserFind } from "./useUserFind"
import crypto from 'crypto'
import { TUser } from "@_types/base/TUser"

export const useUserAuth = async (userName: string, password: string): Promise<ResultAuth> => {
    const user = await useUserFind(userName)
    if (!user) {
        return {
            result: AuthCode.NOT_FOUND
        }
    }
    if (user.isDisabled) {
        return {
            result: AuthCode.BLOCKED
        }
    }
    if (user.password === crypto.createHash('md5').update(password).digest('hex')) {
        return {
            result: AuthCode.OK,
            user: user
        }
    }

    return {
        result: AuthCode.FAIL,
        user: undefined
    }
}

type ResultAuth = {
    result: AuthCode
    user?: TUser
}
