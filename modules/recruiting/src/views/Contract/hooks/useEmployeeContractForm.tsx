import { ControlListProps } from "@mzara/component";

export const useEmployeeContractForm = (id?: number):ControlListProps => {
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
                },
                {
                    type: 'file',
                    name: 'file',
                    label: 'Pièce jointe'
                }
            ],
            value: {},
            next: {
                label: "Ajouter le Contrat"
            },
            back: {
                label: "Annuler contrat"
            },
            graphQL: {
                entity: 'employeeContract',
                entityId: id,
            }
        },
        id: 'employeeContracts-add-form'
    }
}