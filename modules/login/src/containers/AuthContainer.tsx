
import { GenericSuspense, useRuntimeEnv } from "@mzara/component";

import { useRedirectToApp } from "hooks/useRedirectApp";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import '../css/main-layout.css'

const AuthContainer = () => {

    const redirectToApp = useRedirectToApp()
    const { runtimeEnv } = useRuntimeEnv()
    useEffect(() => {
        if (runtimeEnv?.authenticated) {
            redirectToApp()
        }
    }, [runtimeEnv])

    return (
        <>
            <div> 
                <GenericSuspense>
                    <Outlet />
                </GenericSuspense>
                
            </div>
        </>
    );
};

export default AuthContainer;
