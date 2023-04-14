import { BreadCrumbItemProps } from "@mzara/component";

export const useTemplateBreadCrumb = (): Array<BreadCrumbItemProps> => {
    return [
        {
            label: 'Home'
        },
        {
            label: 'Evaluation'
        },
        {
            label: 'Template'
        }
    ]
}