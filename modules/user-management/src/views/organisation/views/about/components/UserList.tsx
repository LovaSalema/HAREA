import { Box, Chip, List, useTranslationRoute, useTranslations } from "@mzara/component"
import { TUser } from "@mzara/graphql"
import { ReactNode, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { useUserOrganisationDetailsQuery } from "views/organisation/hooks/useUserOrganisationDetailsQuery"
import { UserAddForm } from "./UserAddForm"
import { UserListFilter } from "./UserListFilter"

export const UserList = (props: Props) => {

    const [
        USERS,
    ] = useTranslations(i18n)
    const { data } = useUserOrganisationDetailsQuery(props.id, true)
    const translatedRoute = useTranslationRoute()
    const [openInvitation, setOpenInvitation] = useState(false)

    const users = useMemo(() => {
        return data.groups.reduce<Array<TUser>>((all, item) => {
            return all.concat(item.users)
        }, []).reduce<Array<TUser>>((all, item) => {
            if (!all.some((item1) => item1.id === item.id)) {
                all.push(item)
            }
            return all
        }, [])
    }, [data])

    return (
        <Box
            className="box-transparent p-0"
            title={(
                <UserListFilter
                    id={props.id}
                    onAddClick={() => setOpenInvitation(true)}
                />
            )}>
            <List
                rows={users}
                pagination={false}
                search={false}
                selection={false}
                onRenderRow={(row: TUser) => (
                    <div className="flex flex-col gap-2">
                        <h5 className="font-bold"><Link to={translatedRoute(`user/${row.id}`)}>{row.fullName}</Link></h5>
                        <div className="flex gap-2">
                            {
                                row.groups.map((group) => (
                                    <Chip 
                                        key={group.id} 
                                        url={translatedRoute(`user/organisation/role/${group.id}`)}
                                        label={group.designation} 
                                        />
                                ))
                            }
                        </div>
                    </div>
                )}
            />

            <UserAddForm open={openInvitation} onDismiss={() => setOpenInvitation(false)} />
        </Box>
    )
}

const i18n = [
    'std_users',
]

type Props = {
    id: number
}
