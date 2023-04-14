import { Box, ControlList, List, Metadata, useTranslationRoute, useTranslations } from "@mzara/component"
import { TUser, TUserGroup } from "@mzara/graphql"
import { useMemo } from "react"
import { Link, useParams } from "react-router-dom"
import { useUserOrganisationDetailsQuery } from "views/organisation/hooks/useUserOrganisationDetailsQuery"
import { useUserOrganisationEditForm } from "views/organisation/hooks/useUserOrganisationEditForm"
import { useUserOrganisationRoleFormValue } from "views/organisation/hooks/useUserOrganisationRoleFormValue"
import { UserList } from "../components/UserList"

const UserOrganisationDetailsAbout = () => {

    const [
        INFO,
        METADATA_KEY_LABEL,
        METADATA_DESIGNATION_LABEL,
        METADATA_COMMENTS_LABEL,
        ROLES_TITLE,
        USERS,
        GROUP_TITLE
    ] = useTranslations(i18n)
    const { id } = useParams()
    const { data } = useUserOrganisationDetailsQuery(parseInt(id), true)
    const [, rolesForm] = useUserOrganisationEditForm()
    const rolesValue = useUserOrganisationRoleFormValue(parseInt(id))
    const translatedRoute = useTranslationRoute()

    const groups = useMemo(() => {
        return data.groups
    }, [data])


    return (
        <div className="flex gap-5">
            <div className="basis-8/12 flex flex-col gap-5">
                <Box title={INFO} className="flex flex-col gap-3 ">
                    <Metadata label={METADATA_KEY_LABEL} value={data.organisationKey} />
                    <Metadata label={METADATA_DESIGNATION_LABEL} value={data.designation} />
                    <Metadata label={METADATA_COMMENTS_LABEL} value={data.comment} />
                </Box>
                <Box className="basis-8/12" title={ROLES_TITLE}>
                    <ControlList
                        {...rolesForm}
                        data={{
                            ...rolesForm.data,
                            hideFooter: true
                        }}
                        value={rolesValue}
                        readonly
                    />
                </Box>

            </div>
            <div className="basis-4/12 flex flex-col gap-5">
                <Box className="box-transparent p-0" title={GROUP_TITLE}>
                    <List
                        rows={groups}
                        pagination={false}
                        search={false}
                        selection={false}
                        onRenderRow={(row: TUserGroup) => (
                            <div>
                                <h5 className="font-bold"><Link to={translatedRoute(`user/organisation/role/${row.id}`)}>{row.designation}</Link></h5>
                                <ul className="flex items-center sm:gap-10 gap-4">
                                    <li className="flex items-center gap-1">
                                        <i className="fa-solid fa-key text-[#6C6868]"></i>
                                        <span className="text-[12px]">{row.groupKey}</span>
                                    </li>
                                    <li className="flex items-center gap-1">
                                        <i title={USERS} className="fa-solid fa-users text-[#6C6868]"></i>
                                        <span className="text-[12px]">{row.userCount as any}</span>
                                    </li>
                                </ul>
                            </div>
                        )}
                    />
                </Box>
                
                <UserList id={parseInt(id)} />
            </div>
        </div>
    )

}

export default UserOrganisationDetailsAbout

const i18n = [
    'std_info',
    'Generic.UserOrganisation.form.Metadata.Key.label',
    'Generic.UserOrganisation.form.Metadata.Designation.label',
    'Generic.UserOrganisation.form.Metadata.Comments.label',
    'Generic.UserOrganisation.form.Roles.title',
    'std_users',
    'Generic.UserOrganisation.form.Group.title',
]
