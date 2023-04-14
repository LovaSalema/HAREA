import { Box, Chip } from "@mzara/component";
import { Badge } from "containers/components/Badge";
import _ from "lodash";
import { useParams } from "react-router-dom";
import { useEvaluationTemplateDetailsQuery } from "../hooks/useEvaluationTemplateDetailsQuery";

const AboutTemplateDetailsContainer = () => {
    const { id } = useParams();
    const { data } = useEvaluationTemplateDetailsQuery(parseInt(id), true);
    return (
        <div className="py-5">
            <Box
                title={data?.title}
                description={<p>{data?.description}</p>}
                tools={
                    <div className="flex items-center gap-2 text-xs rounded-full px-2 py-1 bg-[#ECECEC]">
                        <i className="fa-solid fa-users"></i>
                        <span>{data?.evaluations?.length}</span>
                    </div>
                }
                badge={
                    data?.isPublic && (
                        <Badge label="Public" color="var(--primary)" />
                    )
                }
                className="w-max sm:min-w-[500px] flex flex-col gap-5 box-mb-0"
            >
                {!_.isEmpty(data?.tags) && (
                    <div className="flex items-center gap-4">
                        {data?.tags?.map((tag) => (
                            <Chip
                                label={tag?.value}
                                color={tag?.color}
                                className="px-2 text-xs rounded-full"
                            />
                        ))}
                    </div>
                )}
            </Box>
        </div>
    );
};

export default AboutTemplateDetailsContainer;
