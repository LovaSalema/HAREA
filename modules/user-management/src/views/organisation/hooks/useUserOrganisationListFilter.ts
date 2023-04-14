import { ControlListProps, useTranslations } from "@mzara/component";
import { useMemo } from "react";

export const useUserOrganisationListFilter = () => {

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
                        name: 'organisationKey_like',
                        className: '',
                        label: KEY_LABEL,
                    },
                    {
                        type: 'text',
                        name: 'designation_like',
                        className: '',
                        label: TITLE_LABEL,
                    },
                    {
                        type: 'textarea',
                        name: 'comment_like',
                        className: '',
                        label: COMMENT_LABEL,
                    },
                ],
                value: {},
                hideFooter: true
            },
            id: 'user-organisation-filter-form'
        }
    }, [KEY_LABEL])
}

const i18n = [
    'Bo.UserOrganisation.form.key.label',
    'Bo.UserOrganisation.form.key.description',
    'Bo.UserOrganisation.form.title.label',
    'Bo.UserOrganisation.form.title.description',
    'Bo.UserOrganisation.form.comment.label',
    'Bo.UserOrganisation.form.comment.description',
    'Bo.UserOrganisation.form.tags.label',
    'Bo.UserOrganisation.form.tags.description',
]
