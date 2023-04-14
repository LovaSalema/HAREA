import { TSession, TUser } from "@_types/base"
import { useSessionUserCreateSession } from "./useSessionUserCreateSession"
import { useSessionUserDisableSession } from "./useSessionUserDisableSession"
import { useSessionUserEnable } from "./useSessionUserEnable"
import { useSessionUserFind } from "./useSessionUserFind"

const createSession = useSessionUserCreateSession()
export const useSessionLoginUserDevice = async (session: TSession, user?: TUser, remember?: boolean) => {
    await useSessionUserDisableSession(session.id)

    const sessionUser = await useSessionUserFind(session.id, user.id)
    if (sessionUser) {
        await useSessionUserEnable(sessionUser, remember)
        return;
    }
    await createSession({ session, user, active: true, authenticated: true, remember })
}
