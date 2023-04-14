/// <reference types="react" />
export declare const WizardSequential: ({ id, wizardId, defaultValue, layout, ...props }: WizardSequentialProps) => JSX.Element;
export declare type WizardSequentialProps = {
    wizardId?: number;
    id: number;
    index?: number;
    layout?: 'CREATION' | 'PARAMS';
    defaultValue?: Array<Record<string, any>>;
    onWizardFinished?: (value: any) => void;
};
//# sourceMappingURL=WizardSequential.d.ts.map