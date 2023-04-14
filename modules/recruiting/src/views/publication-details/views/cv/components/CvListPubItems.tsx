import { Button, useTranslationRoute } from "@mzara/component";
import moment from "moment";
import { Link } from "react-router-dom";
import { ColorState, stateDict } from "views/CV/components/CurriculumVitaeItem";


const CvListPubItems =({cvs})=>{
    const t = useTranslationRoute();
    
    return(
        <>
                <ul className="flex flex-col gap-2 ">
                {cvs?.map(item => (<>

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
        </>
    )
}
export default CvListPubItems;