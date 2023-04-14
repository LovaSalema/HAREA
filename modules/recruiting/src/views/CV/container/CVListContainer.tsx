import {
    Box,
    BreadCrumb,
    Button,
    ControlList,
    Dialog,
    Dropdown,
    GenericSuspense,
    List,
    Menu,
    RightSidebar,
    useListFilterState,
    useTranslationRoute,
    useUrlParamsEncode,
    useUrlParamsValue,
} from "@mzara/component";
import { TRecruitingCuriculumVitae } from "@mzara/graphql";
import _ from "lodash";
import { Link, Outlet } from "react-router-dom";
import { useBreadCrumb } from "views/publication/hooks/useBreadCrumb";
import { useCurriculumVitaeFilterForm } from "../hooks/useCurriculumVitaeFilterForm";
import { CurriculumVitaeListQuery } from "../query/CurriculumVitaeListQuery";
import { CurriculumVitaeItem } from "../components/CurriculumVitaeItem";
import "../css/filterCvList.css";
import { useState } from "react";
import { useStateCvItems } from "../hooks/useStateCvItems";

const CVListContainer = () => {
    const breadcrumbItems = useBreadCrumb();
    const urlParams = useUrlParamsValue();
    const encodeUrl = useUrlParamsEncode();
    const t = useTranslationRoute();
    const filterControl = useCurriculumVitaeFilterForm();
    const { filter, setFilter } = useListFilterState(CURRICULUM_LIST_ID);
    const [anchorEl, setAnchorEl] = useState<HTMLAnchorElement>();
    const menuStateItems = useStateCvItems();
    const dropDownMenuState = [
        {id: undefined, label: 'Toutes'},
        ...menuStateItems
    ]

    return (
        <div className="flex w-full h-max justify-center gap-5">
            <section className="sm:py-3 py-1 flex flex-col gap-5 bg-body-background flex-1">
                <div className="flex items-center justify-between">
                    <h4 className="font-semibold">Curriculum Vitaes</h4>
                    <Link
                        to={t(`recruiting/cv/create?${encodeUrl(urlParams)}`)}
                    >
                        <Button
                            label="Ajouter"
                            startIcon="fa-solid fa-plus"
                            className="flex items-center button-bg-primary text-white gap-1 button-rounded-full"
                        />
                    </Link>
                </div>
                <BreadCrumb items={breadcrumbItems.reverse()} />

                <Box
                    title="Liste des CV"
                    className="box-mb-0 flex flex-col gap-3"
                    tools={
                        <>
                            <a
                                href=""
                                onClick={(e) => {
                                    setAnchorEl(e.currentTarget);
                                    e.preventDefault();
                                }}
                            >
                                <Button
                                    label={dropDownMenuState.find((state) => state.id == filter?.data?.state?.id)?.label}
                                    endIcon="fa-solid fa-caret-down"
                                    className="!bg-[#D9D9D9] button-rounded-full text-[#3E3A3A] [&>i]:text-white"
                                />
                            </a>

                            <Dropdown
                                anchorEl={anchorEl}
                                arrow
                                placement="bottom-end"
                                onClose={() => setAnchorEl(undefined)}
                            >
                                <Menu
                                    items={dropDownMenuState}
                                    onClick={(menu) => {
                                        setFilter((v: any) => ({
                                            ...v,
                                            page: 0,
                                            data: {
                                                ...v.data,
                                                state: {
                                                    id: menu.id
                                                }
                                            }
                                        }))
                                        setAnchorEl(undefined)
                                    }}
                                />
                            </Dropdown>
                        </>
                    }
                >
                    <div className="publication-list-content flex w-full">
                        <List
                            search={false}
                            selection={false}
                            id={CURRICULUM_LIST_ID}
                            GQLRequest={CurriculumVitaeListQuery}
                            defaultFilter={{
                                pageSize: 10,
                                page: 0,
                            }}
                            onRenderRow={(row: TRecruitingCuriculumVitae) => (
                                <CurriculumVitaeItem
                                    id={row?.id}
                                    name={row?.name}
                                    advertName={row?.recrutingAdvert?.title}
                                    state={row?.state}
                                />
                            )}
                        />
                    </div>
                </Box>
            </section>

            <RightSidebar>
                <Box
                    title="Filter"
                    icon="fa-solid fa-filter"
                    className="h-full"
                >
                    <ControlList
                        {...filterControl}
                        value={{
                            ...filter?.data,
                            recrutingAdvert: !_.isEmpty(
                                filter?.data?.recrutingAdvert.id_among
                            )
                                ? filter?.data?.recrutingAdvert?.id_among
                                : undefined,
                            state: !_.isEmpty(filter?.data?.state.id_among)
                                ? filter?.data?.state?.id_among?.map(
                                      (item) => ({ id: item })
                                  )
                                : undefined,
                        }}
                        onChange={(value) =>
                            setFilter((v: any) => ({
                                ...v,
                                page: 0,
                                data: {
                                    ...v.data,
                                    ...value,
                                    recrutingAdvert: {
                                        id_among: value.recrutingAdvert,
                                    },
                                    state: {
                                        id_among: value.state?.map(
                                            (item) => item.id
                                        ),
                                    },
                                },
                            }))
                        }
                    />
                </Box>
            </RightSidebar>

            <Outlet />
        </div>
    );
};

export const CURRICULUM_LIST_ID = "CurriculumVitae.List";


export default CVListContainer;
