import { Box, Button, ControlList, DateSpan, Dialog, GenericSuspense, useFileUrl } from "@mzara/component";
import { Badge } from "containers/components/Badge";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useRecruitingAdvertsDetailsQuery } from "views/publication-details/hooks/useRecruitingAdvertsDetailsQuery";
import { useRecruitingAdvertsForm } from "views/publication/hooks/useRecruitingAdvertsForm";



const AboutRecruitingAdvert = () => {

    const { id } = useParams();
    const { data, invalidateQuery } = useRecruitingAdvertsDetailsQuery(parseInt(id), true);

    const closeDialog = () => {
        setOpen(false);
        invalidateQuery();

    }
    const [open, setOpen] = useState(false);
    const handleOnClick = () => {
        setOpen(!open);
    };

    let date = new Date(data.dateEnd);
    const fileUrl = useFileUrl();

    const control = useRecruitingAdvertsForm(parseInt(id));
    control.data.next.label = "Modifier l'annonce";
    return (

        <>
            <div className="flex  flex-col justify-between gap-5">

                <Box title={data?.title} className='shadow-lg h-max w-full' >

                    <div className="flex w-1/2 ml-2">
                        <div className=" w-full flex gap-3 items-center">
                            <i className="fa-solid fa-clock fa-md  text-[#6C6868]"></i>
                            <DateSpan value={`${data?.createdAt}`} className='text-xs' />
                        </div>
                        <div className="w-full flex gap-3 items-center relative right-10">
                            <i className="fa-solid fa-clock fa-md text-[#6C6868]"></i>
                            {/* <span> {` Fin : ${moment(data.dateEnd).format('DD/MM/YYYY')}`}</span> */}
                            <DateSpan value={data.dateEnd} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 mt-6">
                        <div className="flex flex-col gap-3 pb-4">
                            {data?.description?.split('\n').map((item, i) => <p key={i} className="text-md ">{item}</p>)}

                            {data?.images?.map(item => <img className="w-[200px]" alt={item?.name} src={fileUrl(item?.id)}>
                                {item?.value}
                            </img>)}
                            {/* <ul className="flex gap-3 items-center">
                                   <p className="font-bold text-lg">Statut</p>
                                   {data.tags.map(tag => (<li style={{ backgroundColor: tag.color }} className={`text-white w-[65px] h-[22px] rounded-xl flex justify-center pt-[1px]`}>{<b className="text-xs mt-[2px]">{tag.value}</b>}</li>))}
                               </ul> */}
                        </div>
                                                  
                           {/* <Button
                       label="Modifier"
                       className="flex items-center !bg-[#0007BB] w-[90px] text-white gap-1 !rounded-full"
                       onClick={() => handleOnClick()}
                   /> */}
                    </div>
                    <Badge label='Nouveau' color="var(--primary)" />
                </Box>

            </div>

            <Dialog
                open={open}
                title="Modifier l'annonce"
                onDismiss={() => closeDialog()}>
                <GenericSuspense>
                    <ControlList
                        {...control}
                        onSubmited={() => closeDialog()}
                        onCancel={() => closeDialog()}
                    />
                </GenericSuspense>

            </Dialog>
        </>
    );
}
export default AboutRecruitingAdvert;