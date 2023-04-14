import { ControlListProps } from "@mzara/component";

export const useCurriculumVitaeFilterForm = ():ControlListProps => {
    return {
        data: {
            forms: [
                {
                    type: 'text',
                    name: 'name_like',
                    label: "Nom"
                },
                {
                    type: 'de-select',
                    name: 'state',
                    label:'Etat',
                    multiple: true,
                    tp: 'RECRUITING_CV_STATE',
                    className: 'scroll-selected'
                },
                {
                    type: 'select',
                    name: 'recrutingAdvert',
                    label: 'Annonce',
                    multiple: true,
                    GQLProps: {
                        gql,
                        labelProp: 'title',
                        valueProp: 'id',
                        rootProp: 'recruitingAdverts.data'
                    }
                }
            ],
            hideFooter: true,
            value: {},
            next: {},
            back: {},
            graphQL: {
                entity: 'recruitingCuriculumVitae',
            }
        },
        id: 'curriculumVitae-filter-form'
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