import { TSessionUserDate } from "@_types/base"
import moment from "moment"

export const useSessionUserNewFork = async (sessionUserId: number) => {
    const sessionUserDate = TSessionUserDate.create({
        sessionUser: { id: sessionUserId },
        dateBegin: moment().toDate(),
        dateEnd: null
    })
    await sessionUserDate.save()
}
