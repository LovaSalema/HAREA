import { ControlListProps, useTranslations } from "@mzara/component"
import { useMemo } from "react"

export const useLoginForm = () => {

    const [
        EMAIL,
        PASSWORD,
        REMEMBER_ME,
        SUBMIT,
    ] = useTranslations(i18n);

    return useMemo((): ControlListProps => {
        return {
            data: {
                forms: [
                    {
                        type: 'input',
                        id: 'userName',
                        name: 'userName',
                        placeholder: EMAIL,
                        required: true,
                        autoFocus: true
                    },
                    {
                        type: 'password',
                        id: 'password',
                        name: 'password',
                        placeholder: PASSWORD,
                        canToggle: true,
                        required: true
                    },
                    {
                        type: 'toggle',
                        id: 'remember',
                        name: 'remember',
                        placeholder: REMEMBER_ME,
                    },
                ],
                value: {},
                next: {
                    className: 'btn btn-primary full-width',
                    label: SUBMIT,
                    endIcon: 'fa-sharp fa-solid fa-paper-plane'
                },
                hideBack: true
            },
            id: 'login-form'
        }
    }, [EMAIL, PASSWORD])
}

const i18n = [
    'Login.SignIn.Form.Email.label',
    'Login.SignIn.Form.Password.label',
    'Login.SignIn.Form.Remember.label',
    'Login.SignIn.Form.Submit.label',
];

