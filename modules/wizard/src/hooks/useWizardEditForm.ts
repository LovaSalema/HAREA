import { ControlListProps, useTranslations } from "@mzara/component";
import { useMemo } from "react";

export const useWizardEditForm = (id?: number) => {

    const [
        KEY_LABEL,
        KEY_DESCRIPTION,
        TITLE_LABEL,
        TITLE_DESCRIPTION,
        COMMENT_LABEL,
        COMMENT_DESCRIPTION,
        TAGS_LABEL,
        TAGS_DESCRIPTION,
        SAVE,
        CANCEL,
        TYPE_LABEL,
        TYPE_FLOW,
        TYPE_SEQUENTIAL,
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
                        type: 'select',
                        name: 'type',
                        label: TYPE_LABEL,
                        required: true,
                        options: [
                            { value: 'FLOW', label: TYPE_FLOW },
                            { value: 'SEQUENTIAL', label: TYPE_SEQUENTIAL },
                        ]
                    },
                    {
                        type: 'text',
                        name: 'wizardKey',
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
                        type: 'textarea',
                        name: 'comment',
                        className: '',
                        label: COMMENT_LABEL
                    },
                    {
                        type: 'lov-select',
                        name: 'tags',
                        tp: 'WIZARD_TAGS',
                        multiple: true,
                        className: '',
                        label: TAGS_LABEL
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
                    entity: 'wizard',
                    entityId: id
                },
            },
            id: 'translation-edit-form'
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
    'std_save',
    'std_cancel',
    'Bo.WizardNode.form.type.label',
    'Bo.WizardNode.form.type.FLOW.label',
    'Bo.WizardNode.form.type.SEQUENTIAL.label',

]
