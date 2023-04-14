import { useContextUser } from "./useContextUser"

export const useContextUserGroups = async () => {
    const user = await useContextUser()
    return user.groups
}
