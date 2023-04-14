import { Box, RightSidebar } from "@mzara/component";
import { useParams } from "react-router-dom";
import { useRecruitingAdvertsDetailsQuery } from "views/publication-details/hooks/useRecruitingAdvertsDetailsQuery";
import { CvListItem } from "./CvListItem";

const ListCVAdverts = () => {
    const {id} = useParams()   
    const {data} = useRecruitingAdvertsDetailsQuery(parseInt(id), true)  

    return (
        <RightSidebar className="right-sidebar-absolute h-full">
            <Box
                className="flex flex-col gap-3 h-full"
                title={data.title}
                description={
                    <div className="flex flex-col gap-3">
                        <p className="w-3/4 font-normal text-[14px]">
                            {data.description}
                        </p>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-1 items-center">
                                <i className="fa-solid fa-clock text-[#6C6868]"></i>
                                <span className="text-[12px]">12/04/2022</span>
                            </div>
                            <div className="text-[12px]">
                                <span>Créée le : </span>
                                <span>07/23/2022</span>
                            </div>
                        </div>
                    </div>
                }
            >
                <div className="cv-list-content">
                    <ul className="flex flex-col gap-3">
                        <li className=" w-full flex justify-between items-center py-2 border-b">
                            <span className="text-[12px]">Tous les CV</span>
                            <i className="fa-solid fa-caret-down text-[#6C6868]"></i>
                        </li>
                        {data.cvs?.map((cv) => (
                            <CvListItem fullName={cv?.name} />
                        ))}
                    </ul>
                </div>
            </Box>
        </RightSidebar>
    );
};

export default ListCVAdverts

