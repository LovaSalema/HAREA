
import { BreadCrumb,Menu, GenericSuspense, RightSidebar } from "@mzara/component";
import { Outlet, useParams } from "react-router-dom";
import { usePublicationDetailsMenu } from "../hooks/usePublicationDetailsMenu";
import { useBreadCrumb } from "views/publication/hooks/useBreadCrumb";
import '../css/MenuPublication.css'

const PublicationDetailsContainer = () => {
    const [, , , , ,tab] = location.pathname.split('/');
    const breadcrumbItems = useBreadCrumb();
    const menuItems = usePublicationDetailsMenu();
    return (<>
        <div className="flex w-full">
            <section className="py-3 flex flex-1 flex-col gap-5">
                <div className="flex items-center justify-between py-5 px-3">
                    <h4 className="font-semibold">Détails Annonce</h4>
                    {/* <Button
                        label="Ajouter"
                        startIcon="fa-solid fa-plus"
                        className="flex items-center !bg-primary text-white gap-2 !rounded-full"
                    /> */}
                </div>
                    <BreadCrumb items={breadcrumbItems.reverse()} />
                    <Menu
                        items={menuItems}
                        type="HORIZONTAL"
                        activeFn={(menu) => menu.ke === tab}
                        className= 'menuPublication'
                    />
                
                <div>
                    <GenericSuspense>
                        <Outlet />
                    </GenericSuspense>
                </div>                       
            </section>
            
           

            <RightSidebar/>
        </div>
    </>);
}

export default PublicationDetailsContainer;