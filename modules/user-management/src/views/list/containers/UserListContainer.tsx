import {
    Box,
    BreadCrumb,
    Button,
    ControlList,
    List,
    RightSidebar,
    useListFilterState,
    useTranslationRoute,
    useUrlParamsEncode,
    useUrlParamsValue,
} from "@mzara/component";
import { TUser } from "@mzara/graphql";
import _ from "lodash";
import { Link, Outlet } from "react-router-dom";
import { UserListItem } from "../components/UserListItem";
import { useUserListBreadCrumb } from "../hooks/useUserListBreadCrumb";
import { useUserListFilterForm } from "../hooks/useUserListFilterForm";
import { UserListQuery } from "../queries/UserListQuery";

const UserListContainer = () => {
    const t = useTranslationRoute();
    const urlParams = useUrlParamsValue();
    const encodeUrl = useUrlParamsEncode();
    const breadcrumbItems = useUserListBreadCrumb();
    const filterControl = useUserListFilterForm();
    const { filter, setFilter } = useListFilterState(USER_LIST_ID);

    return (
        <div className="flex w-full h-max justify-center gap-5">
            <section className="sm:py-3 py-1 flex flex-col gap-5 bg-body-background flex-1">
                <div className="flex items-center justify-between">
                    <h4 className="font-semibold">Utilisateurs</h4>
                    <Link
                        to={t(`recruiting/cv/create?${encodeUrl(urlParams)}`)}
                    >
                        <Button
                            label="Ajouter"
                            startIcon="fa-solid fa-plus"
                            className="flex items-center !bg-primary text-white gap-1 button-rounded-full"
                        />
                    </Link>
                </div>
                <BreadCrumb items={breadcrumbItems.reverse()} />

                <Box
                    title="Liste des utilisateurs"
                    className="box-mb-0 flex flex-col gap-3"
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
                            id={USER_LIST_ID}
                            GQLRequest={UserListQuery}
                            defaultFilter={{
                                pageSize: 10,
                                page: 0,
                            }}
                            onRenderRow={(row: TUser) => (
                                <UserListItem userItem={row} />
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
                        }}
                        onChange={(value) =>
                            setFilter((v: any) => ({
                                ...v,
                                page: 0,
                                data: {
                                    ...v.data,
                                    ...value,
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

export const USER_LIST_ID = "UserManagement.Users.List";

export default UserListContainer;
