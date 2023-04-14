import { MenuItemProps, useTranslation } from "@mzara/component"
import { useMemo } from "react"
import { useUserOrganisationDetailsQuery } from "views/organisation/hooks/useUserOrganisationDetailsQuery"

export const useUserFilterMenu = (id: number) => {

    const t = useTranslation()
    const { data } = useUserOrganisationDetailsQuery(id, true)

    return useMemo((): Array<MenuItemProps> => {
        return [
            {
                id: undefined,
                label: t('std_all'),
            },
            ...data.groups.map<MenuItemProps>((item) => ({
                id: item.id,
                label: item.designation
            }))
        ]
    }, [data])
}
