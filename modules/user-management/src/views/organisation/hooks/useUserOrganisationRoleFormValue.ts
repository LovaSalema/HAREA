

import { ControlListProps, useRuntimeEnv, useTranslations } from "@mzara/component";
import { TUserOrganisation } from "@mzara/graphql";
import { useMemo } from "react";
import { useUserOrganisationDetailsQuery } from "./useUserOrganisationDetailsQuery";

export const useUserOrganisationRoleFormValue = (id: number) => {

    const { runtimeEnv } = useRuntimeEnv()
    const { data } = useUserOrganisationDetailsQuery(id, true)

    const categories = useMemo(() => {
        return data.roles.reduce<Array<string>>((all, item) => {
            if (!all.some((item1) => item1 === item.descriptorKey)) {
                all.push(item.descriptorKey)
            }
            return all
        }, [])
    }, [data])
    
    return useMemo(() => {
        return {
            id: data.id,
            ...(categories.reduce((all, category) => {
                all[category] = data.roles.map((item) => item.id)
                return all
            }, {}))
        }
    }, [categories])
}
