import { ControlListProps, useTranslations } from "@mzara/component";
import { useMemo } from "react";

export const useTranslationListFilter = () => {

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
        QUALITY_DESCRIPTION
    ] = useTranslations(i18n);

    return useMemo((): ControlListProps => {
        return {
            data: {
                forms: [
                    {
                        type: 'text',
                        name: 'translationKey_like',
                        className: '',
                        label: KE_LABEL,
                        placeholder: KE_DESCRIPTION
                    },
                    {
                        type: 'text',
                        name: 'value_like',
                        className: '',
                        label: VAL_LABEL,
                        placeholder: VAL_DESCRIPTION
                    },
                    {
                        type: 'text',
                        name: 'comment_like',
                        className: '',
                        label: COMMENTS_LABEL,
                        placeholder: COMMENTS_DESCRIPTION
                    },
                    {
                        type: 'de-select',
                        name: 'language',
                        tp: 'APP_ZONE',
                        multiple: true,
                        className: '',
                        label: ZONE_LABEL,
                        placeholder: ZONE_DESCRIPTION
                    },
                    {
                        type: 'de-select',
                        name: 'appName',
                        tp: 'APP_NAME',
                        multiple: true,
                        className: '',
                        label: APP_LABEL,
                        placeholder: APP_DESCRIPTION
                    },
                    {
                        type: 'de-select',
                        name: 'quality',
                        tp: 'TRANSLATION_QUALITY',
                        multiple: true,
                        className: '',
                        label: QUALITY_LABEL,
                        placeholder: QUALITY_DESCRIPTION
                    },
                ],
                value: {},
                hideFooter: true
            },
            id: 'translation-filter-form'
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
    'Generic.txt.translate.form.quality.description'
]
