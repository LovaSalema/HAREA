import { TSessionUser } from "@_types/base"

export const useSessionUserEnable = async (sessionUser: TSessionUser, remember: TSessionUser['remember'] = true) => {
    sessionUser.active = true
    sessionUser.remember = remember
    await sessionUser.save()
    return 
}