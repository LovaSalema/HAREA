import { ControlListProps } from "@mzara/component";

export const useCreateEvaluationTemplateForm = ():ControlListProps => {
    return {
        data: {
            forms: [
                {
                    type: 'text',
                    name: 'title',
                    label: 'Titre'
                },
                {
                    type: 'textarea',
                    name: 'description',
                    label: 'Description'
                },
                // {
                //     type: 'toogle',
                //     name: 'isPublic',
                //     label: 'Public'
                // },
                {
                    type: 'lov-select',
                    multiple: true,
                    name: 'tags',
                    label: 'Tags'
                }
            ],
            value: {},
            next: {
                label: 'Sauvegarder'
            },
            back: {
                label: 'Annuler'
            },
            graphQL: {
                entity: 'evaluationTemplate'
            }
        },
        id: 'Evaluation-Template-add-form'
    }
}