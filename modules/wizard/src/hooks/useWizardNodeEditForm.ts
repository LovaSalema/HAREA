import { ControlListProps, useTranslations } from "@mzara/component";
import { useMemo } from "react";

export const useWizardNodeEditForm = () => {

    const [
        KEY_LABEL,
        TITLE_LABEL,
        COMMENT_LABEL,
        SAVE,
        CANCEL
    ] = useTranslations(i18n);

    return useMemo((): ControlListProps => {
        return {
            data: {
                forms: [
                    {
                        type: 'hidden',
                        name: 'id'
                    },
                    {
                        type: 'text',
                        name: 'nodeKey',
                        className: '',
                        required: true,
                        label: KEY_LABEL
                    },
                    {
                        type: 'text',
                        name: 'title',
                        className: '',
                        required: true,
                        label: TITLE_LABEL
                    },
                    {
                        type: 'text',
                        name: 'comment',
                        className: '',
                        label: COMMENT_LABEL
                    },
                ],
                value: {},
                next: {
                    label: SAVE
                },
                back: {
                    label: CANCEL
                },
                graphQL: {
                    entity: 'wizardNode'
                },
            },
            id: 'translation-edit-form'
        }
    }, [KEY_LABEL])
}

const i18n = [
    'Bo.WizardNode.form.key.label',
    'Bo.WizardNode.form.title.label',
    'Bo.WizardNode.form.comment.label',
    'std_save',
    'std_cancel'

]
