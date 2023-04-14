import { GenericSuspense } from "@mzara/component";
import { Outlet } from "react-router-dom";

const RecruitingContainer = () => {
    return (
        <>
            <GenericSuspense>
                <Outlet />
            </GenericSuspense>
        </>
    );
};

export default RecruitingContainer;
