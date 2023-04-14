import { ControlListProps } from "@mzara/component";

export const useCurriculumVitaeForm = ():ControlListProps => {
    return {
        data: {
            forms: [
                {
                    type: 'profile-picture',
                    name: 'profilePicture',
                    label: 'Photo de profil'
                },
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
                    type: 'select',
                    name: 'recrutingAdvert',
                    label: 'Annonce',
                    GQLProps: {
                        gql,
                        labelProp: 'title',
                        valueProp: 'id',
                        rootProp: 'recruitingAdverts.data'
                    },
                    valueObject: true
                }
            ],
            value: {},
            next: {
                label: 'Ajouter un CV'
            },
            back: {
                label: 'Annuler le CV'
            },
            graphQL: {
                entity: 'recruitingCuriculumVitae'
            }
        },
        id: 'CV-add-recruitingAdvert-form'
    }
}

const gql = `
    query RecruitingAdvertsSelectQuery{
        recruitingAdverts{
            total 
            data {
                id title
            }
        }
    }
`