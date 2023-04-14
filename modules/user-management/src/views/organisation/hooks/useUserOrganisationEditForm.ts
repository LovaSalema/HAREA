import { ControlListProps, useRuntimeEnv, useTranslations } from "@mzara/component";
import { useMemo } from "react";
import { useUserOrganisationOwnerQuery } from "./useUserOrganisationOwnerQuery";

/**
 * This hook only build controlList form, no value is perfomed here
 */
export const useUserOrganisationEditForm = () => {

    const { data } = useUserOrganisationOwnerQuery(true)

    const [
        METADATA_TITLE,
        METADATA_DESCRIPTION,
        METADATA_KEY_LABEL,
        METADATA_DESIGNATION_LABEL,
        METADATA_COMMENTS_LABEL,
        ROLES_TITLE,
        ROLES_DESCIPTION,
    ] = useTranslations(i18n);

    const metadataForm = useMemo((): ControlListProps => {
        return {
            data: {
                // title: METADATA_TITLE,
                // description: METADATA_DESCRIPTION,
                forms: [
                    {
                        type: 'hidden',
                        name: 'id'
                    },
                    {
                        type: 'text',
                        name: 'organisationKey',
                        className: '',
                        label: METADATA_KEY_LABEL
                    },
                    {
                        type: 'text',
                        name: 'designation',
                        className: '',
                        label: METADATA_DESIGNATION_LABEL
                    },
                    {
                        type: 'text',
                        name: 'comment',
                        className: '',
                        label: METADATA_COMMENTS_LABEL
                    },
                ],
                graphQL: {
                    entity: 'userOrganisation'
                }
            },
        }
    }, [])

    const rolesForm = useMemo((): ControlListProps => {

        const categories = data.roles.reduce<Array<string>>((all, item) => {
            if (!all.some((item1) => item1 === item.descriptorKey)) {
                all.push(item.descriptorKey)
            }
            return all
        }, [])

        return {
            data: {
                // title: ROLES_TITLE,
                // description: ROLES_DESCIPTION,
                forms: [
                    {
                        type: 'hidden',
                        name: 'id'
                    },
                    ...categories.reduce((all, category) => {
                        const roles = data.roles.filter((item) => item.descriptorKey === category)
                        all = [
                            ...all,
                            {
                                type: 'checkbox',
                                name: `roles-${category}`,
                                group: 'roles',
                                label: `Generic.de.${category}`,
                                multiple: true,
                                options: roles.map((item) => ({
                                    label: item.translationKey,
                                    value: item.id
                                }))
                            }
                        ]
                        return all
                    }, [])
                ],
                graphQL: {
                    
                }
            },
            onBeforeSaving: (value: Record<string, any>) => {
                return {
                    ...value,
                    ...(Object.keys(value).reduce((all, key) => {
                        if (/^roles/.test(key)) {
                            all[key] = undefined
                        }
                        return all
                    }, {})),
                    roles: Object.keys(value).reduce((all, key) => {
                        if (/^roles/.test(key)) {
                            all = all.concat(
                                value[key].map((item) => ({ id: item }))
                            )
                        }
                        return all
                    }, []),
                }
            }
        }
    }, [data])

    return useMemo(() => ([
        metadataForm,
        rolesForm
    ]), [metadataForm, rolesForm])
}

const i18n = [

    'Generic.UserOrganisation.form.Metadata.title',
    'Generic.UserOrganisation.form.Metadata.description',
    'Generic.UserOrganisation.form.Metadata.Key.label',
    'Generic.UserOrganisation.form.Metadata.Designation.label',
    'Generic.UserOrganisation.form.Metadata.Comments.label',

    'Generic.UserOrganisation.form.Roles.title',
    'Generic.UserOrganisation.form.Roles.desciption',

]
