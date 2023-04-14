import { Button, Dropdown, IconButton, Menu, useTranslations } from "@mzara/component"
import { useState } from "react"
import { useUserFilterMenu } from "../hooks/useUserFilterMenu"

export const UserListFilter = (props: UserListFilterProps) => {

    const [
        USERS,
        INVITE
    ] = useTranslations(i18n)
    const [anchorEl, setAnchorEl] = useState<HTMLElement>()
    const menus = useUserFilterMenu(props.id)

    return (
        <span className="flex justify-between">
            <span>
                {USERS}
            </span>
            {/* <span>
                <Button
                    label={INVITE}
                    startIcon="fa-solid fa-paper-plane"
                    className="btn btn-primary"
                />
                <IconButton
                    icon="fa-solid fa-filter"
                    onClick={(e) => setAnchorEl(e.currentTarget)}
                />
                <Dropdown anchorEl={anchorEl} onClose={() => setAnchorEl(undefined)}>
                    <Menu
                        items={menus}
                        onClick={(menu) => props.onFilterMenuChange?.(menu.id)}
                    />
                </Dropdown>
            </span> */}
        </span>
    )
}

export type UserListFilterProps = {
    id: number
    onAddClick?: () => void
    onFilterMenuChange?: (id?: number) => void
}

const i18n = [
    'std_users',
    'std_invite'
]
