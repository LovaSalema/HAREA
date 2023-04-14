/// <reference types="react" />
import { WizardSequentialProps } from "./WizardSequential";
export declare const Wizard: (props: WizardProps) => JSX.Element;
export declare type WizardProps = Omit<WizardSequentialProps, 'wizardId'> & {
    wizardKey?: string;
};
//# sourceMappingURL=Wizard.d.ts.map