import React from "react";
import { BreadCrumb, Button, GenericSuspense, IconButton, Menu, RightSidebar } from "@mzara/component";
import { useBreadCrumb } from "../../publication/hooks/useBreadCrumb";
import '../css/publicationList.css'
import { Outlet, useParams } from "react-router-dom";
import { useCvDetailsMenu } from "../hooks/useCvDetailsMenu";

const CvDetailsContainer = () => {
    const [, , , , ,tab] = location.pathname.split('/');
    const breadcrumbItems = useBreadCrumb();
    const {id}=useParams();
    const menuItems = useCvDetailsMenu(id)
    return (
        <div className="flex w-full h-max">
            <section className=" py-3 pl-5 pr-3 flex flex-1 flex-col gap-5">
                <div>
                    <h4><b>Curriculum vitae</b></h4>
                </div>
                <BreadCrumb items={breadcrumbItems} />
                <Menu
                        items={menuItems}
                        type="HORIZONTAL"
                        activeFn={(menu) => menu.ke === tab}
                        className= 'menuPublication'
                    />
                <div className="flex gap-4">
                   <GenericSuspense>
                        <Outlet/>
                   </GenericSuspense>
                </div>
                
            </section>
        </div>
    );
};
export default CvDetailsContainer;
