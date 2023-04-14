import { Box, BreadCrumb, Button, GenericSuspense, List, RightSidebar, useTranslationRoute, useUrlParamsEncode, useUrlParamsValue } from "@mzara/component";
import { TEvaluationTemplate } from "@mzara/graphql";
import { Link, Outlet } from "react-router-dom";
import { EvaluationTemplateListItem } from "../components/EvaluationTemplateListItem";
import { useTemplateBreadCrumb } from "../hooks/useTemplateBreadCrumb";
import { EvaluationTemplateListQuery } from "../queries/EvaluationTemplateListQuery";

const TemplateContainer = () => {
    const breadCrumbItems = useTemplateBreadCrumb()
    const urlParams = useUrlParamsValue()
    const encodeUrl = useUrlParamsEncode()
    const t = useTranslationRoute()
    return (
        <div className="flex h-max justify-center gap-5 w-full">
            <section className="sm:py-3 py-1 flex flex-col gap-5 box-body-background flex-1">
                <div className="flex items-center justify-between">
                    <h4 className="font-semibold">Template</h4>
                    <Link to={t(`recruiting/template/create?${encodeUrl(urlParams)}`)}>
                        <Button label="Ajouter" startIcon="fa-solid fa-plus" className="button-bg-primary flex items-center gap-1 button-rounded-full text-white" />
                    </Link>
                </div>
                <BreadCrumb items={breadCrumbItems.reverse()} />

                <Box title='Liste des templates'>
                    <List 
                        search={false}
                        selection={false}
                        id={EVALUATION_TEMPLATE_LIST}
                        GQLRequest={EvaluationTemplateListQuery}
                        defaultFilter={{
                            pageSize: 10,
                            page: 0
                        }}
                        onRenderRow={(row: TEvaluationTemplate, index) => (
                            <EvaluationTemplateListItem template={row} key={index} />
                        )}
                    />
                </Box>
            </section>

            <RightSidebar />

            <GenericSuspense>
                <Outlet />
            </GenericSuspense>
        </div>
    );
};

export const EVALUATION_TEMPLATE_LIST = 'Evaluation.Template.List'

export default TemplateContainer;
