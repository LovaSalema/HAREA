import React from "react";
import { Box, Button } from "@mzara/component";
import { useParams } from "react-router-dom";
import { useRecruitingAdvertsDetailsQuery } from "../hooks/useRecruitingAdvertsDetailsQuery";

export const PublicationDetails = ({  ...props }: PublicationDetailsProps) => {
   const {id} = useParams();
    const {data} = useRecruitingAdvertsDetailsQuery(parseInt(id), true);
    let date= new Date(data.dateEnd);
    let day= date.getDate();
   let month= date.getMonth();
   let year = date.getFullYear();
    return (
        <>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3 mx-3 border-b ">
                    {/* <p className="font-bold text-lg">Recrutement dev junior</p> */}
                    <p className="text-md">{data.description}</p>
                    <ul className="flex gap-3 items-center">
                        <p className="font-bold text-lg">Statut</p>
                    {data.tags.map(tag => (<li style={{backgroundColor: tag.color}} className={`text-white w-[65px] h-[22px] rounded-xl flex justify-center pt-[1px]`}>{<b className="text-xs mt-[2px]">{tag.value}</b>}</li>))} 
                    </ul>
                </div>
                <div className="flex gap-[10px] ml-6">
                    <div className=" w-full flex gap-3 items-center">
                        <i className="fa-solid fa-clock fa-xl  text-[#6C6868]"></i>
                        <p className="text-sm">Date : 10/01/2023</p>
                    </div>
                    <div className="w-full flex gap-3 items-center">
                        <i className="fa-solid fa-clock fa-xl text-[#6C6868]"></i>
                        <p className="text-sm">{`Deadline : ${day < 10? '0'+day:day}/${month<10? '0' +month : month}/${year}`}</p>
                    </div>
                </div>
                <Button onClick={() => props.handleOnClick()} className="w-[99px] h-[33px] button rounded-xl mt-5 p-2"> Modifier</Button>
                {/* <Box title={} /> */}

            </div>

        </>
    );
}

export type PublicationDetailsProps = {
    handleOnClick: CallableFunction,
    
}