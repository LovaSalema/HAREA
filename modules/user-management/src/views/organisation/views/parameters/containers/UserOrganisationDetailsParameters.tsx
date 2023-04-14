import { Box, Step, useTranslations } from "@mzara/component"
import { useParams } from "react-router-dom"
import { useUserOrganisationDetailsQuery } from "views/organisation/hooks/useUserOrganisationDetailsQuery"
import { useUserOrganisationEditForm } from "views/organisation/hooks/useUserOrganisationEditForm"
import { useUserOrganisationRoleFormValue } from "views/organisation/hooks/useUserOrganisationRoleFormValue"

const UserOrganisationDetailsParameters = () => {

    const [
        PARAMS
    ] = useTranslations(i18n)
    const { id } = useParams()
    const { invalidateQuery } = useUserOrganisationDetailsQuery(parseInt(id), true)
    const steps = useUserOrganisationEditForm()
    const rolesValue = useUserOrganisationRoleFormValue(parseInt(id))

    return (
        <div>
            <Box title={PARAMS} className="flex flex-col gap-3">
                <Step
                    defaultValue={[
                        { id },
                        rolesValue
                    ]}
                    steps={steps}
                    layout="MENU"
                    onStepSubmited={() => invalidateQuery()}
                />
            </Box>
        </div>
    )

}

export default UserOrganisationDetailsParameters

const i18n = [
    'std_params',
]
