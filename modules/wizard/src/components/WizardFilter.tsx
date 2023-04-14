import { Box, ControlList, useListFilterState, useTranslations } from "@mzara/component"
import _ from "lodash"
import { WIZARD_LIST_ID } from "../containers/Wizard"
import { useWizardListFilter } from "../hooks/useWizardListFilter"

export const WizardFilter = () => {

    const control = useWizardListFilter()
    const { filter, setFilter, resetGlobalFilterValue } = useListFilterState(WIZARD_LIST_ID)
    const [
        FILTER,
    ] = useTranslations(i18n)

    return (
        <Box className="box-transparent box-shadow-none box-p-0" title={FILTER} icon="fa-solid fa-filter">
            <ControlList
                {...control}
                value={{
                    ...filter?.data,
                    tags: !_.isEmpty(filter?.data?.tags.id_among) ? filter?.data?.tags.id_among?.map((item) => ({ id: item })) : undefined,
                }}
                onChange={(value) => setFilter((v: any) => ({ 
                    ...v, 
                    page: 0, 
                    data: { 
                        ...v.data, 
                        ...value,
                        tags: {
                            id_among: value.tags?.map((item) => item.id)
                        },
                    }

                }))}
            />
        </Box>
    )
}

const i18n = [
    'std_filter'
]
