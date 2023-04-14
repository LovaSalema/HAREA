import { Box, ControlList, useListFilterState, useTranslations } from "@mzara/component"
import _ from "lodash"
import { TRANSLATION_LIST_ID } from "../containers/Translation"
import { useTranslationListFilter } from "../hooks/useTranslationListFilter"

export const TranslationFilter = () => {

    const control = useTranslationListFilter()
    const { filter, setFilter, resetGlobalFilterValue } = useListFilterState(TRANSLATION_LIST_ID)
    const [
        FILTER,
    ] = useTranslations(i18n)

    return (
        <Box className="box-transparent box-shadow-none box-p-0" title={FILTER} icon="fa-solid fa-filter">
            <ControlList
                {...control}
                value={{
                    ...filter?.data,
                    language: !_.isEmpty(filter?.data?.language.id_among) ? filter?.data?.language.id_among?.map((item) => ({ id: item })) : undefined,
                    appName: !_.isEmpty(filter?.data?.appName.id_among) ? filter?.data?.appName.id_among?.map((item) => ({ id: item })) : undefined,
                    quality: !_.isEmpty(filter?.data?.quality.id_among) ? filter?.data?.quality.id_among?.map((item) => ({ id: item })) : undefined,
                }}
                onChange={(value) => setFilter((v: any) => ({ 
                    ...v, 
                    page: 0, 
                    data: { 
                        ...v.data, 
                        ...value,
                        language: {
                            id_among: value.language?.map((item) => item.id)
                        },
                        appName: {
                            id_among: value.appName?.map((item) => item.id)
                        },
                        quality: {
                            id_among: value.quality?.map((item) => item.id)
                        }
                    }

                }))}
            />
        </Box>
    )
}

const i18n = [
    'std_filter'
]
