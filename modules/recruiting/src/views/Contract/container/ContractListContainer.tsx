import { Box, BreadCrumb, Button, ControlList, Dialog, GenericSuspense, List, RightSidebar, useListFilterState, useListGraphqlQuery } from "@mzara/component";
import { TEmployeeContract, TRecruitingAdvert } from "@mzara/graphql";
import React, { useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useBreadCrumb } from "views/publication/hooks/useBreadCrumb";
import { useEmployeeContractForm } from "../hooks/useEmployeeContractForm";
import { EmployeeContractsQuery } from "../query/EmployeeContactsQuery";
import { ContractListItem } from "../components/ContractListItem";
import _ from "lodash";
import { useEmployeeContractQuery } from "../hooks/useEmployeeContractQuery";
import { useContractListFilterForm } from "../hooks/useContractListFilterForm";

const ContractListContainer = ()=> {
    const { invalidateQuery } = useListGraphqlQuery(CONTRACT_LIST_ID);
    const {filter, setFilter} = useListFilterState(CONTRACT_LIST_ID);
    const controlFilter = useContractListFilterForm();
    const breadcrumbItems = useBreadCrumb();
    const [open, setOpen] = useState(false);
    const closeDialog = ()=> {
        setOpen(false);
        invalidateQuery();
    }
    const control = useEmployeeContractForm();
    return (<>
    
    <div className="flex w-full h-max justify-center gap-4">
            <section className="sm:py-3 py-1 flex flex-col gap-5 bg-body-background flex-1">
                <div className="flex items-center justify-between">
                    <h4 className="font-semibold">Contrat</h4>
                    <Button
                        label="Ajouter"
                        startIcon="fa-solid fa-plus"
                        className="flex items-center button-bg-primary text-white gap-1 button-rounded-full"
                        onClick={() => setOpen(true)}
                    />
                </div>
                <BreadCrumb items={breadcrumbItems.reverse()} />

                <Box
                    title="Liste des contrats"
                    className="box-mb-0 flex flex-col gap-2"
                    tools={
                        <Button
                            label="Ce mois"
                            endIcon="fa-solid fa-caret-down"
                            className="!bg-[#D9D9D9] button-rounded-full text-[#3E3A3A] [&>i]:text-white"
                        />
                    }
                >
                    <div className="publication-list-content flex w-full">
                        <List
                            search={false}
                            selection={false}
                            id={CONTRACT_LIST_ID}
                            GQLRequest={EmployeeContractsQuery}
                            defaultFilter={{
                                pageSize: 10,
                                page: 0
                            }}
                            onRenderRow={(row: TEmployeeContract) => (
                                <ContractListItem
                                    designation={row?.designation}
                                    creationDate={row?.createdAt}
                                    isPublic={row?.isPublic}
                                    id={row?.id}
                                />
                            )}
                        />
                    </div>
                </Box>
            </section>

            <RightSidebar>
                <Box title='Filter' icon='fa-solid fa-filter' className="h-full">
                    <ControlList 
                        {...controlFilter}
                        value={{
                            ...filter?.data,
                            tags: !_.isEmpty(filter?.data?.tags.id_among) ? filter?.data?.tags?.id_among?.map((item) => ({id: item})) : undefined,
                        }}
                        onChange={(value) => setFilter((v: any) => ({
                            ...v,
                            page: 0,
                            data: {
                                ...v.data,
                                ...value,
                                tags: {
                                    id_among: value.tags?.map((item) => item.id)
                                }
                            }
                        }))}
                    />
                </Box>
            </RightSidebar>

            <Dialog
                open={open}
                title="Ajouter un contrat"
                onDismiss={() => closeDialog()}
            >
                <GenericSuspense>
                    <ControlList
                        {...control}
                        onSubmited={() => closeDialog()}
                        onCancel={() => closeDialog()}
                    />
                </GenericSuspense>
            </Dialog>
        </div>
    </>)
}
export const CONTRACT_LIST_ID = "Contract.List"
export default ContractListContainer;