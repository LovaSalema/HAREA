import { BreadCrumbItemProps } from "@mzara/component";

export const useBreadCrumbContract = (): Array<BreadCrumbItemProps> => {
    return [
        {
            label: "Home",
        },
        {
            label: "Template",
        },
        {
            label: "Contract",
        },
    ];
};
