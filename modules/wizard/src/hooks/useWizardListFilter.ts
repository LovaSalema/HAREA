import { ControlListProps, useTranslations } from "@mzara/component";
import { useMemo } from "react";

export const useWizardListFilter = () => {

    const [
        KEY_LABEL,
        KEY_DESCRIPTION,
        TITLE_LABEL,
        TITLE_DESCRIPTION,
        COMMENT_LABEL,
        COMMENT_DESCRIPTION,
        TAGS_LABEL,
        TAGS_DESCRIPTION,
    ] = useTranslations(i18n);

    return useMemo((): ControlListProps => {
        return {
            data: {
                forms: [
                    {
                        type: 'text',
                        name: 'wizardKey_like',
                        className: '',
                        label: KEY_LABEL,
                    },
                    {
                        type: 'text',
                        name: 'title_like',
                        className: '',
                        label: TITLE_LABEL,
                    },
                    {
                        type: 'text',
                        name: 'comment_like',
                        className: '',
                        label: COMMENT_LABEL,
                    },
                    {
                        type: 'lov-select',
                        name: 'tags',
                        tp: 'WIZARD_TAGS',
                        multiple: true,
                        className: '',
                        label: TAGS_LABEL,
                    },
                ],
                value: {},
            },
            id: 'wizard-filter-form'
        }
    }, [KEY_LABEL])
}

const i18n = [
    'Bo.Wizard.form.key.label',
    'Bo.Wizard.form.key.description',
    'Bo.Wizard.form.title.label',
    'Bo.Wizard.form.title.description',
    'Bo.Wizard.form.comment.label',
    'Bo.Wizard.form.comment.description',
    'Bo.Wizard.form.tags.label',
    'Bo.Wizard.form.tags.description',
]
