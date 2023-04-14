import { useContext } from "@hooks/context/useContext"
import { TAppContext } from "@_types/base"

export const useContextSession = async () => {
    const context: TAppContext = useContext()
    const session = await context.sessionUser?.session
    return session
}