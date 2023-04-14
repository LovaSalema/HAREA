import { Box, BreadCrumb, Button, ControlList, Dialog, GenericSuspense, useFileUrl, useGraphqlDelete, useTranslationRoute } from "@mzara/component";
import { Badge } from "containers/components/Badge";
import moment from "moment";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useBreadCrumbContract } from "../hooks/useBreadCrumbContract";
import { useContractDetailsQuery } from "../hooks/useContractDetailsQuery";
import { useContractEditForm } from "../hooks/useContractEditForm";


const ContractDetailsContainer = () => {
    const { id } = useParams()
    const { data, invalidateQuery } = useContractDetailsQuery(parseInt(id), true);
    const FileUrl = useFileUrl()
    const breadcrumbItems = useBreadCrumbContract();
    const deleteMutation = useGraphqlDelete('employeeContract')
    const [open, setOpen]=useState(false);
    const [openDelete, setOpenDelete]=useState(false);
    const [url, setUrl]= useState('');
    const handleOnDownload=(id)=>{
        
        setUrl(FileUrl(id))
}


    const control = useContractEditForm(parseInt(id));
    const handleOnEdit=()=>{
        setOpen(true)
    }

    const closeDialog = () => {
        setOpen(false);
        invalidateQuery();
    }
    const handleOnDelete = ()=> {
        setOpenDelete(true)
    }

    const navigate = useNavigate()
    const t = useTranslationRoute()

    const handleDeleteConfirmed = () => {
        deleteMutation.mutate({
            ids: data?.id
        }, {
            onSuccess: () => {
                invalidateQuery();
                setOpenDelete(false);
                navigate(t('recruiting/contract'))
            }
        })
    }
    return (<>
        <div className="flex flex-col gap-4 w-full justify-start ">
            <section className="py-3 pl-5 pr-3 flex flex-1 flex-col gap-5">
                <h3>Détails de Contrat </h3>
                <BreadCrumb items={breadcrumbItems} />
                <Box>
                    <div className="flex gap-12 items-center justify-between">
                        <div className="flex flex-col gap-6">
                            <div className="flex gap-4 items-center">
                                <h4>{data.designation}</h4>
                                {data.isPublic ? (<Badge className="h-4 items-center" label="Publique" color="var(--primary)" />) : ''}
                            </div>
                            <div className="flex gap-2  items-center">
                                <i className="fa-solid fa-clock fa-md text-[#6C6868]"></i>
                                <p>{moment(data.createdAt).format('DD/MM/YYYY')}</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-12">
                            <div className="flex gap-4">
                                <Button
                                    label="Supprimer"
                                    className="!rounded-full !bg-danger h-8 text-white"
                                    onClick={handleOnDelete}
                                />
                                <Button
                                    label="Modifier"
                                    className="!rounded-full !bg-[#023e96] h-8 text-white"
                                    onClick={()=>handleOnEdit()}
                                />
                            </div>
                           {data?.file && (
                                <div className="flex w-full justify-end">
                                <a href={url}>
                                <Button
                                        label="Télécharger"
                                        className="!rounded-full button-bg-primary h-8 text-white"
                                        onClick={()=>handleOnDownload(data?.file?.id)}
                                />
                                </a>
                           </div>

                           )}
                        </div>
                    </div>
                </Box>

            </section>
            <Dialog
                open={open}
                title="Modifier le contrat"
                onDismiss={() => closeDialog()}>
                <GenericSuspense>
                    <ControlList
                        {...control}
                        onSubmited={() => closeDialog()}
                        onCancel={() => closeDialog()}
                    />
                </GenericSuspense>
            </Dialog>
        </div>

        <Dialog
                    open={openDelete}
                    onDismiss={() => setOpenDelete(false)}
                    onCancel={() => setOpenDelete(false)}
                    onConfirm={() => handleDeleteConfirmed()}
                    title='êtes-vous sûre?'
                    btnOk={{ label: 'Ok', isSubmit: deleteMutation.isLoading }}
                    btnCancel={{ label: 'Annuler' }}
                />

    </>);
}
export default ContractDetailsContainer;


