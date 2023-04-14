import React, { useState } from "react";
import {
    Box,
    BreadCrumb,
    Button,
    ControlList,
    Dialog,
    GenericSuspense,
    IconButton,
    List,
    RightSidebar,
    useListFilterState,
    useListGraphqlQuery,
} from "@mzara/component";
import { useBreadCrumb } from "../hooks/useBreadCrumb";
import "../css/publicationList.css";
import { PublicationListItem } from "../components/PublicationListItem";
import { useRecruitingAdvertsForm } from "../hooks/useRecruitingAdvertsForm";
import { Outlet } from "react-router-dom";
import { RecruitingAdvertsQuery } from "../query/RecruitingAdvertsQuery";
import { TRecruitingAdvert } from "@mzara/graphql";
import { usePublicationFilterForm } from "../hooks/usePublicationFilterForm";
import _ from "lodash";

const PublicationContainer = () => {
    const {invalidateQuery} = useListGraphqlQuery(PUBLICATION_LIST_ID)
    const controlFilter = usePublicationFilterForm()
    const breadcrumbItems = useBreadCrumb();
    const [open, setOpen] = useState(false);
    const closeDialog = () => {
        invalidateQuery();
        setOpen(false);
    };
    const control = useRecruitingAdvertsForm();
    const {filter, setFilter} = useListFilterState(PUBLICATION_LIST_ID)

    return (
        <div className="flex w-full h-max justify-center gap-4">
            <section className="sm:py-3 py-1 flex flex-col gap-5 !bg-body-background flex-1">
                <div className="flex items-center justify-between">
                    <h4 className="font-semibold">Annonce</h4>
                    <Button
                        label="Ajouter"
                        startIcon="fa-solid fa-plus"
                        className="flex items-center !bg-primary text-white gap-1 !rounded-full"
                        onClick={() => setOpen(true)}
                    />
                </div>
                <BreadCrumb items={breadcrumbItems.reverse()} />

                <Box
                    title="Liste des annonces"
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
                            id={PUBLICATION_LIST_ID}
                            GQLRequest={RecruitingAdvertsQuery}
                            defaultFilter={{
                                pageSize: 10,
                                page: 0
                            }}
                            onRenderRow={(row: TRecruitingAdvert, index) => (
                                <PublicationListItem
                                    key={index}
                                    advert={row}
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
                            category: !_.isEmpty(filter?.data?.category.id_among) ? filter?.data?.category?.id_among?.map((item) => ({id: item})) : undefined
                        }}
                        onChange={(value) => setFilter((v: any) => ({
                            ...v,
                            page: 0,
                            data: {
                                ...v.data,
                                ...value,
                                tags: {
                                    id_among: value.tags?.map((item) => item.id)
                                },
                                category: {
                                    id_among: value.category?.map((item) => item.id)
                                }
                            }
                        }))}
                    />
                </Box>
            </RightSidebar>

            <GenericSuspense>
                <Outlet />
            </GenericSuspense>

            <Dialog
                open={open}
                title="Ajouter une annonce"
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
    );
};

export const PUBLICATION_LIST_ID = "Publication.List"

export default PublicationContainer;
