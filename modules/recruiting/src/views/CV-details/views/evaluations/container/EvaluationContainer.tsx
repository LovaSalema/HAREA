import { Button, ControlList, Dialog, useTranslationRoute } from "@mzara/component";
import { useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { useCuriculumVitaeDetailsQuery } from "views/CV/hooks/useCuriculumVitaeDetailsQuery";
import "../css/testResult.css";
import { useEvaluationQuery } from "../hooks/useEvaluationsQuery";

const TestResult = () => {
    const { id } = useParams();
    const { data } = useCuriculumVitaeDetailsQuery(parseInt(id), true);
    const { data: evaluationData, invalidateQuery } = useEvaluationQuery(
        data?.email,
        true
    );
    const [open, setOpen] = useState(false);
    const closeDialog = () => {
        invalidateQuery();
        setOpen(false);
    };
    const t = useTranslationRoute()
    return (
        <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 flex-wrap">
                <Button
                    label="Envoyer une évaluation"
                    startIcon="fa-solid fa-plus"
                    className="button-rounded-full button-bg-primary text-white flex items-center"
                    onClick={() => setOpen(true)}
                />
                {evaluationData?.data?.map((evaluation) => (
                    <Link to={t(`recruiting/cv/${id}/evaluations/${evaluation?.id}/results`)}>
                    <Button
                        label={evaluation?.evaluationTemplate?.title}
                        startIcon="fa-solid fa-file-lines"
                        className="button-rounded-full button-bg-grey flex items-center"
                    />
                    </Link>
                    
                ))}
            </div>

            <Outlet />

            <Dialog open={open} onDismiss={() => closeDialog()}>
                <ControlList
                    nodeKey="Harea.CV.Details.SendEvaluationForm"
                    data={{ forms: [] }}
                    value={{
                        email: data?.email,
                        evaluationTemplate: { id: 2 },
                    }}
                    onSubmited={() => closeDialog()}
                />
            </Dialog>
        </div>
    );
};

export default TestResult;
