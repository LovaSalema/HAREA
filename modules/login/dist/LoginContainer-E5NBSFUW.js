import 'react'
import "./chunk-2LFWXN7R.js";
import {
  useRedirectToApp
} from "./chunk-FUAPWJLM.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-EMZHQZBF.js";

// src/views/login/components/LoginForm.tsx
import { useCallback, useEffect, useMemo as useMemo2 } from "react";
import { Alert, ControlList, useCdnAssets, useTranslations as useTranslations2 } from "@mzara/component";

// src/views/login/hooks/useLoginOAuthMutation.ts
import { useGraphqlMutation } from "@mzara/component";
var useLoginOAuthMutation = () => {
  return useGraphqlMutation(OAUTH);
};
var OAUTH = `
mutation oauth(
    $auth_type: String!, 
    $id: String,
    $id_token: String!
) {
    oauth(
        data: {
            auth_type: $auth_type, 
            id: $id,
            id_token: $id_token
        }
    )
}
`;

// src/views/login/hooks/useLoginMutation.ts
import { useGraphqlMutation as useGraphqlMutation2, useTranslation } from "@mzara/component";
var useLoginMutation = () => {
  const t = useTranslation();
  return useGraphqlMutation2(LOGIN, {
    transformErrorMessage: (e) => {
      if (e.message === "FAIL") {
        return t("std_password_does_match_err");
      }
      return void 0;
    }
  });
};
var LOGIN = `
mutation login($userName: String!, $password: String!, $remember: Boolean!) {
    login(
        data: {
            userName: $userName, 
            password: $password, 
            remember: $remember
        }
    )
}
`;

// src/views/login/hooks/useLoginForm.tsx
import { useTranslations } from "@mzara/component";
import { useMemo } from "react";
var useLoginForm = () => {
  const [
    EMAIL,
    PASSWORD,
    REMEMBER_ME,
    SUBMIT
  ] = useTranslations(i18n);
  return useMemo(() => {
    return {
      data: {
        forms: [
          {
            type: "input",
            id: "userName",
            name: "userName",
            placeholder: EMAIL,
            required: true,
            autoFocus: true
          },
          {
            type: "password",
            id: "password",
            name: "password",
            placeholder: PASSWORD,
            canToggle: true,
            required: true
          },
          {
            type: "toggle",
            id: "remember",
            name: "remember",
            placeholder: REMEMBER_ME
          }
        ],
        value: {},
        next: {
          className: "btn btn-primary full-width",
          label: SUBMIT,
          endIcon: "fa-sharp fa-solid fa-paper-plane"
        },
        hideBack: true
      },
      id: "login-form"
    };
  }, [EMAIL, PASSWORD]);
};
var i18n = [
  "Login.SignIn.Form.Email.label",
  "Login.SignIn.Form.Password.label",
  "Login.SignIn.Form.Remember.label",
  "Login.SignIn.Form.Submit.label"
];

// src/views/login/components/LoginForm.tsx
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var LoginForm = () => {
  let cdn = useCdnAssets();
  const [
    MESSAGE,
    FORGOT_PASSWORD,
    LOGIN_WITH_GOOGLE,
    LOGIN_WITH_FACEBOOK,
    CREDENTIAL_ERROR
  ] = useTranslations2(i18n2);
  const form = useLoginForm();
  const redirectToApp = useRedirectToApp();
  const loginMutation = useLoginMutation();
  const oAuthMutation = useLoginOAuthMutation();
  useEffect(() => {
    if (loginMutation.isSuccess) {
      redirectToApp();
      return;
    }
  }, [loginMutation]);
  useEffect(() => {
    if (oAuthMutation.isSuccess) {
      redirectToApp();
      return;
    }
  }, [oAuthMutation]);
  const handleSubmit = useCallback((value) => {
    loginMutation.mutate(value);
  }, [loginMutation]);
  const handleGoogleSignInSuccess = (response) => __async(void 0, null, function* () {
    const { id_token } = response.getAuthResponse();
    oAuthMutation.mutate({
      auth_type: "google",
      id_token
    });
  });
  const handleGoogleSignInFailed = () => {
  };
  const handleFacebookSignin = (response) => __async(void 0, null, function* () {
    console.log(response);
    oAuthMutation.mutate({
      auth_type: "facebook",
      id: response.id,
      id_token: response.accessToken
    });
  });
  const errorMessage = useMemo2(() => {
    var _a, _b, _c, _d;
    if (loginMutation.isError) {
      const message = (_d = (_c = (_b = (_a = loginMutation.error) == null ? void 0 : _a.response) == null ? void 0 : _b.errors) == null ? void 0 : _c[0]) == null ? void 0 : _d.message;
      if (message === "FAIL") {
        return CREDENTIAL_ERROR;
      }
      return message;
    }
    return void 0;
  }, [loginMutation.error]);
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsx("div", {
      className: "m-auto flex flex-col justify-start h-full items-center",
      children: /* @__PURE__ */ jsxs("div", {
        className: "m-auto flex flex-col gap-4",
        children: [
          /* @__PURE__ */ jsx("img", {
            className: "w-[62px]",
            src: cdn("/img/isa/logo.png"),
            alt: "logo"
          }),
          /* @__PURE__ */ jsxs("div", {
            className: "",
            children: [
              /* @__PURE__ */ jsx("h3", {
                className: "font-extrabold",
                children: "Sign in"
              }),
              /* @__PURE__ */ jsxs("p", {
                children: [
                  "Don't have an account? ",
                  /* @__PURE__ */ jsx("a", {
                    href: "",
                    className: "text-[#0007BB]",
                    children: "Sign up."
                  })
                ]
              })
            ]
          }),
          /* @__PURE__ */ jsx("div", {
            className: "bg-[#0006bb09] px-3 py-3 border-2 border-[#0007BB] rounded-lg",
            children: /* @__PURE__ */ jsxs("p", {
              className: "text-[#0007BB]",
              children: [
                "Lorem Ipsum ",
                /* @__PURE__ */ jsx("b", {
                  children: "is simply dummy"
                }),
                " text of the ",
                /* @__PURE__ */ jsx("br", {}),
                "printing and typesetting industry.",
                /* @__PURE__ */ jsx("br", {}),
                "Lorem Ipsum has been the ",
                /* @__PURE__ */ jsx("br", {}),
                "industry's ",
                /* @__PURE__ */ jsx("b", {
                  children: "standard dummy"
                }),
                " text"
              ]
            })
          }),
          /* @__PURE__ */ jsxs("div", {
            children: [
              errorMessage && /* @__PURE__ */ jsx(Alert, {
                type: "danger",
                text: errorMessage
              }),
              /* @__PURE__ */ jsx(ControlList, __spreadProps(__spreadValues({}, form), {
                defaultValue: {
                  userName: "",
                  password: "",
                  remember: true
                },
                onSubmit: handleSubmit,
                isSubmit: loginMutation.isLoading
              }))
            ]
          }),
          /* @__PURE__ */ jsxs("div", {
            className: "flex w-full justify-between",
            children: [
              /* @__PURE__ */ jsx("a", {
                href: "www.google.com",
                children: /* @__PURE__ */ jsxs("div", {
                  className: "flex justify-between border rounded-3xl px-2 py-2 cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsx("i", {
                      className: "fa-brands fa-google relative top-1"
                    }),
                    /* @__PURE__ */ jsx("p", {
                      className: "text-[11px] m-1",
                      children: "Sign in with google"
                    })
                  ]
                })
              }),
              /* @__PURE__ */ jsx("a", {
                href: "www.facebook.com",
                children: /* @__PURE__ */ jsxs("div", {
                  className: "flex border rounded-3xl px-2 py-2 cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsx("i", {
                      className: "fa-brands fa-facebook-f relative top-1"
                    }),
                    /* @__PURE__ */ jsx("p", {
                      className: "text-[11px] m-1",
                      children: "Sign in with facebook"
                    })
                  ]
                })
              })
            ]
          }),
          /* @__PURE__ */ jsx("div", {
            className: "flex w-full justify-center",
            children: /* @__PURE__ */ jsx("b", {
              children: /* @__PURE__ */ jsxs("p", {
                children: [
                  /* @__PURE__ */ jsx("b", {
                    className: "text-[#0007BB] m-auto",
                    children: "Login_1.5.4"
                  }),
                  ".2023"
                ]
              })
            })
          })
        ]
      })
    })
  });
};
var i18n2 = [
  "Login.SignIn.description",
  "Login.SignIn.ForgotPassword.label",
  "Login.SignIn.Federated.Google.label",
  "Login.SignIn.Federated.Facebook.label",
  "Login.SignIn.Credential.NotMatch.description"
];
var LoginForm_default = LoginForm;

// src/views/login/components/BackgroungRight.tsx
import { useCdnAssets as useCdnAssets2 } from "@mzara/component";
import { Fragment as Fragment2, jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var BackgroundRight = () => {
  const cdn = useCdnAssets2();
  return /* @__PURE__ */ jsxs2(Fragment2, {
    children: [
      /* @__PURE__ */ jsx2("img", {
        className: "h-[40%] rotate-180 ",
        src: cdn("/img/isa/Group_127.svg"),
        alt: "group-bg"
      }),
      /* @__PURE__ */ jsxs2("div", {
        className: "flex flex-col gap-6",
        children: [
          /* @__PURE__ */ jsxs2("h2", {
            className: "font-black leading-9",
            children: [
              "Welcome to ",
              /* @__PURE__ */ jsx2("br", {}),
              "  our community"
            ]
          }),
          /* @__PURE__ */ jsxs2("p", {
            children: [
              "Lorem Ipsum is simply dummy text of the printing and typesetting ",
              /* @__PURE__ */ jsx2("br", {}),
              "industry. Lorem Ipsum has been the industry's standard dummy"
            ]
          }),
          /* @__PURE__ */ jsxs2("div", {
            className: "flex w-full justify-start",
            children: [
              /* @__PURE__ */ jsx2("img", {
                className: "h-[30px]",
                src: cdn("img/isa/profile-user.png"),
                alt: "image"
              }),
              /* @__PURE__ */ jsx2("img", {
                className: "h-[30px]  relative right-2",
                src: cdn("img/isa/profile-user.png"),
                alt: "image"
              }),
              /* @__PURE__ */ jsx2("img", {
                className: "h-[30px] relative right-4",
                src: cdn("img/isa/profile-user.png"),
                alt: "image"
              }),
              /* @__PURE__ */ jsx2("p", {
                children: "More than 17k people joined us, it's your turn"
              })
            ]
          })
        ]
      }),
      /* @__PURE__ */ jsx2("img", {
        className: "h-[40%]",
        src: cdn("/img/isa/Group_127.svg"),
        alt: "group-bg"
      })
    ]
  });
};
var BackgroungRight_default = BackgroundRight;

// src/views/login/containers/LoginContainer.tsx
import { Fragment as Fragment3, jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var LoginContainer = () => {
  return /* @__PURE__ */ jsx3(Fragment3, {
    children: /* @__PURE__ */ jsxs3("div", {
      className: "flex h-screen ",
      children: [
        /* @__PURE__ */ jsx3("div", {
          className: " flex w-full justify-center lg:basis-1/2",
          children: /* @__PURE__ */ jsx3(LoginForm_default, {})
        }),
        /* @__PURE__ */ jsx3("div", {
          className: "lg:flex md:visible bg-[#48496C] lg:basis-1/2 w-full  flex-col justify-between items-center text-white",
          children: /* @__PURE__ */ jsx3(BackgroungRight_default, {})
        })
      ]
    })
  });
};
var LoginContainer_default = LoginContainer;
export {
  LoginContainer_default as default
};
//# sourceMappingURL=LoginContainer-E5NBSFUW.js.map
