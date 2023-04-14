import { Box, Button, Chip, Metadata, useTranslationRoute, useTranslations } from "@mzara/component"
import { useWizardDetailsQuery } from "hooks/useWizardDetailsQuery"
import { Link, useParams } from "react-router-dom"

const WizardDetailsAbout = () => {

    const [
        INFO,
        KEY_LABEL,
        TITLE_LABEL,
        COMMENT_LABEL,
        TAGS_LABEL,
        EDIT
    ] = useTranslations(i18n)
    const { id } = useParams()
    const { data } = useWizardDetailsQuery(parseInt(id), true)
    const translatedRoute = useTranslationRoute()

    return (
        <>
            <Box title={INFO} className="flex flex-col gap-3">
                <Metadata label={KEY_LABEL} value={data.wizardKey} />
                <Metadata label={TITLE_LABEL} value={data.title} />
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
                <div className="flex justify-end mt-5">
                    <Link to={translatedRoute(`wizard/${id}/edit`)}>
                        <Button label={EDIT} startIcon="fa-solid fa-pen" className="btn btn-primary" />
                    </Link>
                </div>
            </Box>
        </>
    )
}

export default WizardDetailsAbout

const i18n = [
    'std_info',
    'Bo.Wizard.form.key.label',
    'Bo.Wizard.form.title.label',
    'Bo.Wizard.form.comment.label',
    'Bo.Wizard.form.tags.label',
    'std_edit'
]
