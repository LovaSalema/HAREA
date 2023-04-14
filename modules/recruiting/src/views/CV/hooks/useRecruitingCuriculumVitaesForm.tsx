import { ControlListProps } from "@mzara/component"

export const useRecruitingCuriculumVitaeForm = ():ControlListProps => {
    return {
        data: {
            forms: [
                {
                    type: 'text',
                    name: 'name',
                    label: "Nom",
                    required: true
                },
                {
                    type: 'text',
                    name: 'phone',
                    label: "Téléphone",
                    required: true
                },
                {
                    type: 'text',
                    name: 'email',
                    label: "Email",
                    required: true
                },
                {
                    type: 'text',
                    name: 'adress',
                    label: "Adresse"
                },
                {
                    type: 'text',
                    name: 'school',
                    label: "Lycée ou Université"
                },
                {
                    type: 'text',
                    name: 'degree',
                    label: "Diplôme"
                },
                {
                    type: 'textarea',
                    name: 'comment',
                    label: "Commentaire"
                },
                {
                    type: 'file',
                    multiple: true,
                    name: 'files',
                    label: "Pièce jointe"
                },
               
            ],
            value: {},
            next: {
                label: "Ajouter CV"
            },
            back: {
                label: "Annuler CV"
            },
            graphQL: {
                entity: 'recruitingCuriculumVitae'
            }
        },
        id: 'CV-add-form'
    }
}