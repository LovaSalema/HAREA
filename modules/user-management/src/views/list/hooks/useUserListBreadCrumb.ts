import { BreadCrumbItemProps } from "@mzara/component";

export const useUserListBreadCrumb = (): Array<BreadCrumbItemProps> => {
    return [
        {
            label: 'Home'
        },
        {
            label: 'List'
        }
    ]
}