import { Alert, Box, Button, ControlList, FacebookOAuth, GoogleOAuth, useTranslations } from "@mzara/component"
import { useRedirectToApp } from "hooks/useRedirectApp"
import { useCallback, useEffect, useMemo } from "react"
import { useLoginForm } from "../../login/hooks/useLoginForm"
import { useLoginMutation } from "../../login/hooks/useLoginMutation"
import { useLoginOAuthMutation } from "../../login/hooks/useLoginOAuthMutation"
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

                        <div className="border-l border-[#ffffff] h-[540px] px-[100px] ">
                            {/* <AccountType /> */}
                            <FormSignup/>
                            {/* <Organisation/> */}
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


/* 

    <div className="login-container">
            <Box className="box-login"> 
                <p className="text-center">
                    <img 
                        src={`${process.env.REACT_APP_CDN}img/logo.svg`} 
                        className="m-auto" 
                        style={{ height: '64px' }}/>
                </p>

                <p className="text-center mb-30">{MESSAGE}</p>

                {
                    errorMessage &&
                    <Alert
                        type="danger"
                        text={errorMessage}
                        />
                }

                <ControlList
                    {...form}
                    defaultValue={{
                        userName: '',
                        password: '',
                        remember: true,
                    }}
                    onSubmit={handleSubmit}
                    isSubmit={loginMutation.isLoading}
                />

                <p className="mt-30">
                    <a href="/forgot-password">{FORGOT_PASSWORD}</a><br />
                </p>

                <div style={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    maxWidth: '240px',
                    margin: 'auto',
                    marginTop: '20px'
                }}>
                    <GoogleOAuth
                        onSuccess={handleGoogleSignInSuccess}
                        onFailure={handleGoogleSignInFailed}>
                        <Button
                            className='btn btn-default btn-block'
                            label={LOGIN_WITH_GOOGLE}
                            startIcon="fa-brands fa-google"
                        />
                    </GoogleOAuth>

                    <FacebookOAuth
                        fields="name,email,picture.type(large)"
                        callback={handleFacebookSignin}>
                        <Button
                            className='btn btn-default btn-block'
                            label={LOGIN_WITH_FACEBOOK}
                            startIcon="fa-brands fa-facebook"
                        />
                    </FacebookOAuth>
                </div>

                
            </Box>
        </div>
*/