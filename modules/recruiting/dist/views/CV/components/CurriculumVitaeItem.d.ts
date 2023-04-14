import { TDescriptor } from "@mzara/graphql";
export declare const CurriculumVitaeItem: ({ name, advertName, id, state, ...props }: CurriculumVitaeItemProps) => JSX.Element;
export declare const stateDict: {
    NEW: string;
    TESTING: string;
    INTERVIEW: string;
    REJECTED: string;
};
export declare const ColorState: {
    NEW: string;
    TESTING: string;
    INTERVIEW: string;
    REJECTED: string;
};
export declare type CurriculumVitaeItemProps = {
    name?: string;
    advertName?: string;
    id: number;
    state?: TDescriptor;
};
//# sourceMappingURL=CurriculumVitaeItem.d.ts.map