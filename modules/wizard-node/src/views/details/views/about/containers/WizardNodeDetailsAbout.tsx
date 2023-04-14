import { Box, Chip, Metadata, useTranslation, useTranslations } from "@mzara/component"
import { useParams } from "react-router-dom"
import { useWizardNodeDetailsQuery } from 'views/details/hooks/useWizardNodeDetailsQuery'
import _ from 'lodash'

const WizardNodeDetailsAbout = () => {

    const [
        INFO,
        KEY_LABEL,
        TITLE_LABEL,
        DESCRIPTION_LABEL,
        COMMENT_LABEL,
        TAGS_LABEL
    ] = useTranslations(i18n)
    const t = useTranslation()
    const { id } = useParams()
    const { data } = useWizardNodeDetailsQuery(parseInt(id), true)

    return (
        <Box title={INFO} className="flex flex-col gap-3">
            <Metadata label={KEY_LABEL} value={data.nodeKey} />
            <Metadata label={TITLE_LABEL} value={t(data.title)} />
            <Metadata label={DESCRIPTION_LABEL} value={t(data.description)} />
            <Metadata label={COMMENT_LABEL} value={data.comment} />
            <Metadata
                label={TAGS_LABEL}
                value={(
                    <p>
                        {
                            data.tags?.map((item, index) => (<Chip key={index} label={item.value} color={item.color} />))
                        }
                    </p>
                )}
            />
        </Box>
    )
}

const i18n = [
    'std_info',
    'Bo.WizardNode.form.key.label',
    'Bo.WizardNode.form.title.label',
    'Bo.WizardNode.form.description.label',
    'Bo.WizardNode.form.comment.label',
]

export default WizardNodeDetailsAbout
