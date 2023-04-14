import { ControlListProps, useTranslation } from "@mzara/component"
import { useMemo } from "react"

export const useUserAffiliateControlList = () => {

    const t = useTranslation()
    return useMemo((): ControlListProps => {
        return {
            data: {
                forms: [
                    {
                        type: 'select',
                        multiple: true,
                        name: 'users',
                        label: t('std_users'),
                    }
                ]
            }
        }
    }, [])
}
