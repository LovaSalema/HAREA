import { ControlList, Dialog, DialogProps } from "@mzara/component"
import { useUserAffiliateControlList } from "../hooks/useUserAffiliateControlList"

export const UserAddForm = (props: UserAddFormProps) => {

    const control = useUserAffiliateControlList()

    const handleSubmit = () => {
        // Todo : affiliate an user
        // Send an email that redirect to signin form
    }

    return (
        <Dialog {...props}>
            <ControlList
                {...control}
                onSubmit={handleSubmit}
                />
        </Dialog>
    )
}

export type UserAddFormProps = DialogProps & {
    
}
