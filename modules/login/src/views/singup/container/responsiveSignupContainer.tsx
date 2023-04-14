import { Alert, Box, Button, ControlList, FacebookOAuth, GoogleOAuth, useTranslations } from "@mzara/component"
import { useCdnAssets } from "@mzara/component"
import '../css/loginContainer.css'
import CheckBoutton from "../components/CheckBoutton"
import FormSignup from "../components/FormSignup"
import AccountType from "../components/AccountType"
import Organisation from "../components/Organisation"
const SignupContainer = () => {

    const cdn = useCdnAssets();
    
    return (
        <>
            <div className='bg-gradient-to-br from-[#48496C]  to-[#2A1036] absolute top-0 bottom-0 left-0 right-0 flex md:flex-row xl:flex-col items-center justify-center'>
                <img src={cdn('/img/isa/logo.png')} alt="logo" className="w-[50px] absolute top-4 left-4" />
                
                <div className=" flex justify-around items-center w-full gap-[100px]">
                        <div className="">
                            <CheckBoutton />
                        </div>

                        <div className="border-0 border-transparent lg:border-l lg:border-[#ffffff] h-[540px] px-[100px] ">
                            {/* <AccountType /> */}
                            {/* <FormSignup/> */}
                            <Organisation/>
                        </div>
                        

                        <div className="">
                            {/* <FormSignup /> */}
                            
                        </div>
                    </div>
            </div>
        </> 
        )
}

export default SignupContainer;

