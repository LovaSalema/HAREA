import { Box, Button, ControlList, DateSpan, Dialog, GenericSuspense } from "@mzara/component";
import React, { useState } from "react";
import { useRecruitingCuriculumVitaesQuery } from "views/CV/hooks/useRecruitingCuriculumVitaesQuery";
import '../css/loginContainer.css';
import { Link, useParams } from "react-router-dom";
import { useTranslationRoute } from "@mzara/component";
import { TRecruitingCuriculumVitae } from "@mzara/graphql";
import { useRecruitingCuriculumVitaeForm } from "views/CV/hooks/useRecruitingCuriculumVitaesForm";
import moment from "moment";
import { useRecruitingAdvertsDetailsQuery } from "views/publication-details/hooks/useRecruitingAdvertsDetailsQuery";
import { ColorState } from "views/CV-details/views/details/components/CvDetails";
import { stateDict } from "views/CV-details/views/details/components/CvDetails";

const CvListContainer = () => {
    const t = useTranslationRoute();
    const { id } = useParams();
    const { data, invalidateQuery } = useRecruitingAdvertsDetailsQuery(parseInt(id), true);
    const ControlCvList = useRecruitingCuriculumVitaeForm();
    const [openListCV, setOpenListCv] = useState(false);
    const closeCVDialog = () => {
        setOpenListCv(false)
        invalidateQuery()
    }

    const handleOnClick = () => {
        setOpenListCv(true);
    }
    return (<>
        <Box >
            <div className="flex justify-between px-6 py-3">
                <p>
                    Liste des CV
                </p>
                <Button
                    label="Ajouter"
                    startIcon="fa-solid fa-plus"
                    className="flex items-center !bg-[#a1a1a29f] text-white gap-1 button-rounded-full"
                    onClick={() => handleOnClick()}
                />
            </div>
            <ul className="flex flex-col gap-2 ">
                {data?.cvs?.map(item => (<>

                    <li className="border-b mx-4 py-3 flex justify-between items-center relative ">
                        <Link to={t(`recruiting/cv/${item?.id}`)}>
                            <div className="flex flex-col gap-1">

                                <div className="flex  gap-5 items-center justify-center">
                                    <p><b>{item.name}</b></p>
                                    <p style={{backgroundColor: `${ColorState[item?.state?.value]}`}} className=' flex justify-center items-center text-xs w-auto px-2 h-[20px] text-white rounded-xl'>{stateDict[item?.state?.value]}</p>
                                </div>
                                <div className="w-full flex gap-2 items-center">
                                    <i className="fa-solid fa-clock text-[#6C6868]"></i>
                                    <span className="text-xs"> {moment(item?.createdAt).format('DD/MM/YYYY')} </span>
                                </div>
                            </div>

                        </Link>
                        {
                            item?.state?.value=='NEW' ? (<Button
                                label="Envoyer test"
                                className="flex !bg-primary text-white gap-1 !rounded-full absolute right-7 " 
                            /> ) : ""
                        } 
                        <Link to={t(`recruiting/cv/${item?.id}/details`)}>
                            <i className="fa-solid fa-angle-right text-[#6C6868] "></i>
                        </Link>

                    </li>

                </>))}
            </ul>
        </Box>


        <Dialog
            open={openListCV}
            title='Ajouter CV'
            onDismiss={() => closeCVDialog()}
        >
            <GenericSuspense>
                <ControlList
                    {...ControlCvList}
                    value={{ recrutingAdvert: { id: parseInt(id) } }}
                    onSubmited={() => closeCVDialog()}
                    onCancel={() => closeCVDialog()}
                />
            </GenericSuspense>
        </Dialog>
    </>);
}
export default CvListContainer;