import _ from "lodash"
import { useContextUserGroups } from "./useContextUserGroups"

export const useContextUserGroupRoles = async () => {
    const groups = await useContextUserGroups()
    const roles = await Promise.all(groups.map((group) => group.roles))
    return _.flatten(roles).map((item) => item.descriptorKey)
}
