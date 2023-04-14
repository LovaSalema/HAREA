import { ControlListProps, useTranslations } from "@mzara/component";
import { useMemo } from "react";

export const useWizardNodeListFilter = () => {

    const [
        KEY,
        TITLE,
        DESCRIPTION,
        COMMENT,
    ] = useTranslations(i18n);

    return useMemo((): ControlListProps => {
        return {
            data: {
                forms: [
                    {
                        type: 'text',
                        name: 'nodeKey_like',
                        className: '',
                        label: KEY,
                    },
                    {
                        type: 'text',
                        name: 'title_like',
                        className: '',
                        label: TITLE,
                    },
                    {
                        type: 'text',
                        name: 'description_like',
                        className: '',
                        label: DESCRIPTION,
                    },
                    {
                        type: 'text',
                        name: 'comment_like',
                        className: '',
                        label: COMMENT,
                    },
                ],
                value: {},
            },
            id: 'wizard-node-filter-form'
        }
    }, [KEY])
}

const i18n = [
    'Bo.WizardNode.form.key.label',
    'Bo.WizardNode.form.title.label',
    'Bo.WizardNode.form.description.label',
    'Bo.WizardNode.form.comment.label',
]
