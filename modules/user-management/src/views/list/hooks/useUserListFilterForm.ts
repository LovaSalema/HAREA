import { ControlListProps } from "@mzara/component";

export const useUserListFilterForm = ():ControlListProps => {
    return {
        data: {
            forms: [
                {
                    type: 'text',
                    name: 'firstName_like',
                    label: 'Nom'
                },
                {
                    type: 'text',
                    name: 'lastName_like',
                    label: 'Prénoms'
                },
                {
                    type: 'text',
                    name: 'email_like',
                    label: 'Email'
                },
                {
                    type: 'text',
                    name: 'job_like',
                    label: 'Poste'
                }
            ],
            hideFooter: true,
            value: {},
            graphQL: {
                entity: 'users'
            }
        },
        id: 'user-list-filter-form'
    }
}