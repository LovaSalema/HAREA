import { BreadCrumbItemProps } from "@mzara/component";

export const useUserDetailsBreadCrumb = (): Array<BreadCrumbItemProps> => {
    return [
        {
            label: 'Home'
        },
        {
            label: 'User'
        },
        {
            label: 'Details'
        },
    ]
}