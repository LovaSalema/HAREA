import { Box, BreadCrumb, GenericSuspense, Menu, RightSidebar, useTranslationRoute } from "@mzara/component";
import { useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { useUserDetailsBreadCrumb } from "../hooks/useUserDetailsBreadCrumb";
import { useUserDetailsMenu } from "../hooks/useUserDetailsMenu";

const UserDetailsContainer = () => {
    const [, , , , tab] = location.pathname.split("/");
    const userDetailsMenuItems = useUserDetailsMenu();
    const userDetailsBreadCrumbItems = useUserDetailsBreadCrumb()
    const { id } = useParams()
    const navigate = useNavigate()
    const url = useTranslationRoute()

    useEffect(() => {
        if (!userDetailsMenuItems.some((item) => item.ke === tab)) {
            navigate(url(`user/${id}/${userDetailsMenuItems[0]?.ke}`))
        }
    }, [])


    return (
        <div className="flex h-max justify-center gap-5 w-full">
            <section className="sm:py-3 py-1 flex flex-col gap-5 !bg-body-background flex-1">
                <div className="flex items-center justify-between">
                    <h4 className="font-semibold">Utilisateurs</h4>
                </div>
                <BreadCrumb items={userDetailsBreadCrumbItems.reverse()} />

                <Menu
                    items={userDetailsMenuItems}
                    type="HORIZONTAL"
                    className="menuPublication"
                    activeFn={(menu) => menu.ke === tab}
                />

                <GenericSuspense>
                    <Outlet />
                </GenericSuspense>
            </section>

            <RightSidebar />
        </div>
    );
};

export default UserDetailsContainer;
