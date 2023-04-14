import {
    ControlList,
    Dialog,
    GenericSuspense,
    useListGraphqlQuery,
    useTranslationRoute,
    useUrlParamsEncode,
    useUrlParamsValue,
} from "@mzara/component";
import { useNavigate } from "react-router-dom";
import { CURRICULUM_LIST_ID } from "views/CV/container/CVListContainer";
import { useCurriculumVitaeForm } from "views/CV/views/edit/hooks/useCurriculumVitaeForm";

const CVAddContainer = () => {
    const addControl = useCurriculumVitaeForm();
    const { invalidateQuery } = useListGraphqlQuery(CURRICULUM_LIST_ID);
    const urlParams = useUrlParamsValue();
    const encodeUrl = useUrlParamsEncode();
    const t = useTranslationRoute();
    const navigate = useNavigate();
    const closeDialog = () => {
        invalidateQuery();
        navigate(t(`recruiting/cv?${encodeUrl(urlParams)}`));
    };
    return (
        <Dialog
            open
            title="Ajouter un CV"
            onDismiss={() => closeDialog()}
        >
            <GenericSuspense>
                <ControlList
                    {...addControl}
                    onSubmited={() => closeDialog()}
                    onCancel={() => closeDialog()}
                />
            </GenericSuspense>
        </Dialog>
    );
};

export default CVAddContainer;
