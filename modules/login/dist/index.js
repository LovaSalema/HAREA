import 'react'
import "./chunk-EMZHQZBF.js";

// src/AuthRoutes.tsx
import React4 from "react";

// src/views/login/LoginRoutes.tsx
import React from "react";
import { jsx } from "react/jsx-runtime";
var LoginContainer = React.lazy(() => import("./LoginContainer-E5NBSFUW.js"));
var LoginRoutes = [
  {
    path: "login",
    title: "Generic.Auth..Login.title",
    element: /* @__PURE__ */ jsx(LoginContainer, {})
  }
];

// src/views/logout/LogoutRoutes.tsx
import React2 from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
var LogoutContainer = React2.lazy(() => import("./LogoutContainer-JJ67ONIC.js"));
var LogoutRoutes = [
  {
    path: "logout",
    title: "Generic.Auth.Logout.title",
    element: /* @__PURE__ */ jsx2(LogoutContainer, {})
  }
];

// src/views/singup/SignupRoutes.tsx
import React3 from "react";
import { jsx as jsx3 } from "react/jsx-runtime";
var SignupContainer = React3.lazy(() => import("./responsiveSignupContainer-CL33ESPA.js"));
var SignupRoutes = [
  {
    path: "signup",
    title: "Generic.Auth..Signup.title",
    element: /* @__PURE__ */ jsx3(SignupContainer, {})
  }
];

// src/AuthRoutes.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
var AuthContainer = React4.lazy(() => import("./AuthContainer-7YO2MERL.js"));
var AuthRoutes = [
  {
    path: "auth",
    title: "Auth.title",
    element: /* @__PURE__ */ jsx4(AuthContainer, {}),
    children: [
      ...LoginRoutes,
      ...LogoutRoutes,
      ...SignupRoutes
    ]
  }
];
export {
  AuthRoutes
};
//# sourceMappingURL=index.js.map
