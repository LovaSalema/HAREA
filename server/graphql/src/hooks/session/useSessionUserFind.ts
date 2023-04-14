import { TSession, TSessionUser, TUser } from "@_types/base"

export const useSessionUserFind = (sessionId: number, userId?: number) => {
    return TSessionUser.findOne({ where: { session: { id: sessionId }, user: { id: userId } } })
}
