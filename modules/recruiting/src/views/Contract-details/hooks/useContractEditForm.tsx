import { ControlListProps } from "@mzara/component";

export const useContractEditForm = (id?: number):ControlListProps => {
    return {
        data: {
            forms: [
                {
                    type: 'hidden',
                    name : 'id',
                },
                {
                    type: 'text',
                    name: 'designation',
                    label: "Designation"
                },
                {
                    type: 'toggle',
                    name: 'isPublic',
                    label: "Rendre publique"
                },
                {
                    type: 'lov-select',
                    multiple: true,
                    name: 'tags',
                    label: 'tags',
                    tp: 'EMPOLYEE_CONTRACT_TAGS'
                }
            ],
            value: {},
            next: {
                label: "Modifier le Contrat"
            },
            back: {
                label: "Annuler la modification"
            },
            graphQL: {
                entity: 'employeeContract',
                entityId: id,
            }
        },
        id: 'employeeContractsEdit-add-form'
    }
}