import { TSession, TSessionUser } from "@_types/base"

export const useSessionUserGetActive = async (sessionId: number) => {
    return TSessionUser.findOne({
        where: {
            session: { id: sessionId },
            active: true
        }
    })
}
