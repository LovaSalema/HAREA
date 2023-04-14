import react, { useState } from "react";
//import { useCdnAssets } from "@mzara/component"
import '../../singup/css/loginContainer.css'
import LoginForm from "../components/LoginForm";
import BackgroundRight from "../components/BackgroungRight";
const LoginContainer = () => {
    
    return (
        <>
            <div className="flex h-screen ">
                <div className=" flex w-full justify-center lg:basis-1/2">
                    <LoginForm />
                </div>
                <div className="lg:flex md:visible bg-[#48496C] lg:basis-1/2 w-full  flex-col justify-between items-center text-white">
                    <BackgroundRight />
                </div>
            </div>
        </>
    );
}
export default LoginContainer;