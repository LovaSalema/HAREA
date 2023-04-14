import {
    Box,
    BreadCrumb,
    GenericSuspense,
    Menu,
    RightSidebar,
} from "@mzara/component";
import { Outlet } from "react-router-dom";
import { useTemplateDetailsBreadCrumb } from "../hooks/useTemplateDetailsBreadCrumb";
import { useTemplateDetailsMenu } from "../hooks/useTemplateDetailsMenu";

const TemplateDetailsContainer = () => {
    const [, , , , , tab] = location.pathname.split('/')
    const menuItems = useTemplateDetailsMenu()
    const breadCrumbItems = useTemplateDetailsBreadCrumb();
    return (
        <div className="flex h-max justify-center gap-5 w-full">
            <section className="sm:py-3 py-1 flex flex-col gap-5 box-body-background flex-1">
                <div className="flex items-center justify-between">
                    <h4 className="font-semibold">Template</h4>
                </div>
                <BreadCrumb items={breadCrumbItems.reverse()} />

                <Menu type="HORIZONTAL" className="menuPublication" items={menuItems} activeFn={(menu) => menu.ke === tab} />

                <GenericSuspense>
                    <Outlet />
                </GenericSuspense>
            </section>

            <RightSidebar />
        </div>
    );
};

export default TemplateDetailsContainer;
