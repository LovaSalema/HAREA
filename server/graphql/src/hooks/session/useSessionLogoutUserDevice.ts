import { TSession } from "@_types/base"
import { useSessionUserDisableSession } from "./useSessionUserDisableSession"
import { useSessionUserEnableAnonymousSession } from "./useSessionUserEnableAnonymousSession"

export const useSessionLogoutUserDevice = async (sessionId: number) => {
    await useSessionUserDisableSession(sessionId)
    await useSessionUserEnableAnonymousSession(sessionId)
}
