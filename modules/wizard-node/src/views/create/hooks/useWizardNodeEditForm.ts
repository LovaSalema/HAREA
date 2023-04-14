import { ControlListProps, useTranslations } from "@mzara/component";
import { useMemo } from "react";

export const useWizardNodeEditForm = (id?: number) => {

    const [
        KEY_LABEL,
        TITLE_LABEL,
        DESCRIPTION_LABEL,
        COMMENT_LABEL,
        SAVE,
        CANCEL,
        TAGS_LABEL
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
                        type: 'textarea',
                        name: 'description',
                        className: '',
                        label: DESCRIPTION_LABEL
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
                        tp: 'WIZARD_NODE_TAGS',
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
                    entity: 'wizardNode',
                    entityId: id
                },
            },
            id: 'translation-edit-form'
        }
    }, [KEY_LABEL])
}

const i18n = [
    'Bo.WizardNode.form.key.label',
    'Bo.WizardNode.form.title.label',
    'Bo.WizardNode.form.description.label',
    'Bo.WizardNode.form.comment.label',
    'std_save',
    'std_cancel',
    'Bo.WizardNode.form.tags.label',

]
