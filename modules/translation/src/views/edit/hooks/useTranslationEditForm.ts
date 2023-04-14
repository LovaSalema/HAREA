import { ControlListProps, useTranslations } from "@mzara/component";
import { useMemo } from "react";

export const useTranslationEditForm = (id?: number) => {

    const [
        KE_LABEL,
        KE_DESCRIPTION,
        VAL_LABEL,
        VAL_DESCRIPTION,
        ZONE_LABEL,
        ZONE_DESCRIPTION,
        APP_LABEL,
        APP_DESCRIPTION,
        COMMENTS_LABEL,
        COMMENTS_DESCRIPTION,
        QUALITY_LABEL,
        QUALITY_DESCRIPTION,
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
                        name: 'translationKey',
                        className: '',
                        label: KE_LABEL,
                        placeholder: KE_DESCRIPTION,
                        required: true,
                    },
                    {
                        type: 'text',
                        name: 'value',
                        className: '',
                        label: VAL_LABEL,
                        placeholder: VAL_DESCRIPTION,
                        required: true
                    },
                    {
                        type: 'text',
                        name: 'comment',
                        className: '',
                        label: COMMENTS_LABEL,
                        placeholder: COMMENTS_DESCRIPTION
                    },
                    {
                        type: 'de-select',
                        name: 'language',
                        tp: 'APP_ZONE',
                        className: '',
                        label: ZONE_LABEL,
                        placeholder: ZONE_DESCRIPTION,
                        required: true
                    },
                    {
                        type: 'de-select',
                        name: 'appName',
                        tp: 'APP_NAME',
                        className: '',
                        label: APP_LABEL,
                        placeholder: APP_DESCRIPTION,
                        required: true
                    },
                    {
                        type: 'de-select',
                        name: 'quality',
                        tp: 'TRANSLATION_QUALITY',
                        className: '',
                        label: QUALITY_LABEL,
                        placeholder: QUALITY_DESCRIPTION,
                        required: true
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
                    entity: 'translation',
                    entityId: id
                },
            },
            id: 'translation-edit-form'
        }
    }, [KE_LABEL])
}

const i18n = [
    'Generic.txt.translate.form.ke.label',
    'Generic.txt.translate.form.ke.description',
    'Generic.txt.translate.form.val.label',
    'Generic.txt.translate.form.val.description',
    'Generic.txt.translate.form.zone.label',
    'Generic.txt.translate.form.zone.description',
    'Generic.txt.translate.form.app.label',
    'Generic.txt.translate.form.app.description',
    'Generic.txt.translate.form.comments.label',
    'Generic.txt.translate.form.comments.description',
    'Generic.txt.translate.form.quality.label',
    'Generic.txt.translate.form.quality.description',
    'Generic.txt.translate.form.save.title',
    'Generic.txt.translate.form.cancel.title',

]
