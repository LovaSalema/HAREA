import { TSessionUser } from "@_types/base"

export const useSessionUserDisableSession = (sessionId: number) => {
    return TSessionUser.update({ session: { id: sessionId } }, { active: false })
}
