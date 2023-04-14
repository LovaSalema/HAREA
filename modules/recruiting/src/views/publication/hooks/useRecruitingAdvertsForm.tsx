import { ControlListProps } from "@mzara/component"

export const useRecruitingAdvertsForm = (id?: number):ControlListProps => {
    return {
        data: {
            forms: [
                {
                    type: 'hidden',
                    name: 'id',
                },
                {
                    type: 'de-select',
                    name: 'category',
                    label: 'Categorie',
                    tp: 'RECRUITING_ADVERT_CATEGORY'
                },
                {
                    type: 'text',
                    name: 'title',
                    label: "Titre de l'annonce"
                },
                {
                    type: 'textarea',
                    name: 'description',
                    label: "Description"
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
                },
                {
                    type: 'images',
                    multiple: true,
                    name: 'images',
                    label: 'Uploader vos images'
                }
            ],
            value: {},
            next: {
                label: "Ajouter l'annonce"
            },
            back: {
                label: "Annuler l'annonce"
            },
            graphQL: {
                entity: 'recruitingAdvert',
                entityId: id
            }
        },
        id: 'recruitingAdverts-edit-form'
    }
}