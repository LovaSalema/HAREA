import { SortBarItemProps, useTranslations } from "@mzara/component"

export const useWizardListSort = (): Array<SortBarItemProps> => {
    const [
        KEY,
        CREATED_AT,
        UPDATED_AT
    ] = useTranslations(i18n)
    return [
        { label: KEY, value: 'wizardKey' },
        { label: CREATED_AT, value: 'createdAt', className:"ml-auto" },
        { label: UPDATED_AT, value: 'updatedAt' },
    ]
}

const i18n = [
    'Generic.txt.translate.form.ke.label',
    'std_created_at',
    'std_updated_at',
]
