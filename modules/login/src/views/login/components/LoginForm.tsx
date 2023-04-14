import React, { useCallback, useEffect, useMemo } from "react";
import { useState } from 'react';
import { Alert, ControlList, useCdnAssets, useTranslations } from "@mzara/component";
import { useLoginOAuthMutation } from "../hooks/useLoginOAuthMutation";
import { useLoginMutation } from "../hooks/useLoginMutation";
import { useRedirectToApp } from "hooks/useRedirectApp";
import { useLoginForm } from "../hooks/useLoginForm";
const LoginForm = () => {

    let cdn = useCdnAssets();
    const [
        MESSAGE,
        FORGOT_PASSWORD,
        LOGIN_WITH_GOOGLE,
        LOGIN_WITH_FACEBOOK,
        CREDENTIAL_ERROR
    ] = useTranslations(i18n)

    const form = useLoginForm()

    const redirectToApp = useRedirectToApp()
    const loginMutation = useLoginMutation()
    const oAuthMutation = useLoginOAuthMutation()

    useEffect(() => {
        if (loginMutation.isSuccess) {
            redirectToApp()
            return;
        }
    }, [loginMutation])

    useEffect(() => {
        if (oAuthMutation.isSuccess) {
            redirectToApp()
            return;
        }
    }, [oAuthMutation])

    const handleSubmit = useCallback((value: Record<string, any>) => {
        loginMutation.mutate(value)
    }, [loginMutation])

    const handleGoogleSignInSuccess = async (response: any) => {
        const { id_token } = response.getAuthResponse()
        oAuthMutation.mutate({
            auth_type: 'google',
            id_token
        })
    }

    const handleGoogleSignInFailed = () => {
        // Todo : show error message
    }

    const handleFacebookSignin = async (response: any) => {
        console.log(response)
        oAuthMutation.mutate({
            auth_type: 'facebook',
            id: response.id,
            id_token: response.accessToken,
        })
    }

    const errorMessage = useMemo(() => {
        if (loginMutation.isError) {
            const message = loginMutation.error?.response?.errors?.[0]?.message

            if (message === 'FAIL') {
                return CREDENTIAL_ERROR
            }

            return message
        }
        return undefined
    }, [loginMutation.error])


    return (
        <>
            <div className="m-auto flex flex-col justify-start h-full items-center">
                <div className="m-auto flex flex-col gap-4">
                    <img className="w-[62px]" src={cdn('/img/isa/logo.png')} alt="logo" />
                    <div className="">
                        <h3 className="font-extrabold">Sign in</h3>
                        <p>Don't have an account? <a href="" className="text-[#0007BB]">Sign up.</a></p>
                    </div>
                    <div className="bg-[#0006bb09] px-3 py-3 border-2 border-[#0007BB] rounded-lg">
                        <p className="text-[#0007BB]">
                            Lorem Ipsum <b>is simply dummy</b> text of the <br />
                            printing and typesetting industry.<br />
                            Lorem Ipsum has been the <br />
                            industry's <b>standard dummy</b> text
                        </p>
                    </div>

                    <div>
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
                    </div>


                    <div className="flex w-full justify-between">
                        <a href="www.google.com">
                            <div className="flex justify-between border rounded-3xl px-2 py-2 cursor-pointer">
                                <i className="fa-brands fa-google relative top-1"></i>
                                <p className="text-[11px] m-1">Sign in with google</p>
                            </div>
                        </a>
                        <a href="www.facebook.com">
                            <div className="flex border rounded-3xl px-2 py-2 cursor-pointer">
                                <i className="fa-brands fa-facebook-f relative top-1"></i>
                                <p className="text-[11px] m-1">Sign in with facebook</p>
                            </div>
                        </a>

                    </div>
                    <div className="flex w-full justify-center">
                        <b><p><b className="text-[#0007BB] m-auto">Login_1.5.4</b>.2023</p></b>
                    </div>
                </div>
            </div>
        </>
    )
}

const i18n = [
    'Login.SignIn.description',
    'Login.SignIn.ForgotPassword.label',
    'Login.SignIn.Federated.Google.label',
    'Login.SignIn.Federated.Facebook.label',
    'Login.SignIn.Credential.NotMatch.description'
]

export default LoginForm;
