import { BreadCrumbItemProps } from "@mzara/component";

export const useBreadCrumb = (): Array<BreadCrumbItemProps> => {
    return [
        {
            label: "Home",
        },
        {
            label: "Annonce",
        },
        {
            label: "CV",
        },
    ];
};
