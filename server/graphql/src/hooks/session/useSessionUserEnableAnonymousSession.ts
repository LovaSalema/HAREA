import { TSessionUser } from "@_types/base"

export const useSessionUserEnableAnonymousSession = async (sessionId: number) => {
    return TSessionUser.update({ session: { id: sessionId }, user: null }, { active: true })
}
