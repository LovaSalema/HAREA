import {
    Chip,
    IconButton,
    Tooltip,
    useTranslationRoute,
} from "@mzara/component";
import { TEvaluationTemplate } from "@mzara/graphql";
import { Badge } from "containers/components/Badge";
import _ from "lodash";
import { Link } from "react-router-dom";

export const EvaluationTemplateListItem = ({
    template,
}: EvaluationTemplateListItemProps) => {
    const t = useTranslationRoute();
    return (
        <div className="flex justify-between items-center py-3 pb-5 border-b w-full">
            <div className="flex flex-col gap-3 ">
                <div className="flex flex-col">
                    <div className="flex items-center gap-5">
                        <Link
                            to={t(`recruiting/template/${template.id}/about`)}
                        >
                            <h4 className="font-bold sm:text-lg text-base">
                                {template?.title}
                            </h4>
                        </Link>

                        {template?.isPublic && (
                            <Badge label="Public" color="var(--primary)" />
                        )}
                        <div className="text-xs rounded-full px-2 py-1 bg-[#ECECEC]">
                            <Tooltip
                                text="Nombre d'utlisations"
                                trigger="hover"
                                placement="bottom-end"
                            >
                                <div className="flex items-center gap-2">
                                    <i className="fa-solid fa-users"></i>
                                    <span>{template?.evaluations?.length}</span>
                                </div>
                            </Tooltip>
                        </div>
                    </div>
                    <span className="text-sm">{template?.description}</span>
                </div>
                {!_.isEmpty(template?.tags) && (
                    <div className="flex items-center gap-3">
                        {template?.tags?.map((tag) => (
                            <Chip
                                label={tag?.value}
                                color={tag?.color}
                                className="px-2 text-xs rounded-full"
                            />
                        ))}
                    </div>
                )}
            </div>
            <Link to={t(`recruiting/template/${template.id}/about`)}>
                <IconButton icon="fa-solid fa-angle-right" />
            </Link>
        </div>
    );
};

export type EvaluationTemplateListItemProps = {
    template: TEvaluationTemplate;
};
