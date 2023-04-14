import { TSessionUserDate } from "@_types/base"
import moment from "moment"

export const useSessionUserCloseFork = async (sessionUserId: number) => {
    const sessionUserDate = await TSessionUserDate.findOne({ where: { sessionUser: { id: sessionUserId }, dateEnd: null } })
    if (sessionUserDate) {
        sessionUserDate.dateEnd = moment().toDate()
        await sessionUserDate.save()
    }
}
