import { ControlListProps } from "@mzara/component"

export const usePublicationFilterForm = ():ControlListProps => {
    return {
        data: {
            forms: [
                {
                    type: 'de-select',
                    multiple: true,
                    name: 'category',
                    label: 'Categorie',
                    tp: 'RECRUITING_ADVERT_CATEGORY'
                },
                {
                    type: 'text',
                    name: 'title_like',
                    label: "Titre"
                },
                {
                    type: 'date',
                    name: 'dateEnd',
                    label: 'Date limite'
                },
                {
                    type: 'lov-select',
                    multiple: true,
                    name: 'tags',
                    label: 'tags',
                    tp: 'RECRUITING_ADVERT_TAGS'
                }
            ],
            value: {},
            hideFooter: true,
            graphQL: {
                entity: 'recruitingAdvert',
            }
        },
        id: 'publication-filter-form'
    }
}