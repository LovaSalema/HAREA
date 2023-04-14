import { ControlListProps } from "@mzara/component"

export const useContractListFilterForm = ():ControlListProps => {
    return {
        data: {
            forms: [
                {
                    type: 'text',
                    name: 'designation_like',
                    label: "Designation"
                },
                {
                    type: 'lov-select',
                    multiple: true,
                    name: 'tags',
                    label: 'tags',
                    tp: 'EMPOLYEE_CONTRACT_TAGS'
                },
            ],
            value: {},
            hideFooter: true,
            graphQL: {
                entity: 'employeeContract',
            }
        },
        id: 'employeeContract-filter-form'
    }
}