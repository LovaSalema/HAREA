import 'react'
import "./chunk-MT53WDPF.js";

// src/views/list/UserListRoutes.tsx
import React from "react";
import { jsx } from "react/jsx-runtime";
var UserListContainer = React.lazy(() => import("./UserListContainer-7UGDDWRP.js"));
var UserListRoutes = [
  {
    path: "user/list",
    title: "Harea.User.List",
    element: /* @__PURE__ */ jsx(UserListContainer, {})
  }
];

// src/views/organisation/UserOrganisationRoutes.tsx
import React3 from "react";
import { Outlet } from "react-router-dom";

// src/views/organisation/views/UserOrganisationViewRoutes.tsx
import React2 from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
var UserOrganisationDetailsAbout = React2.lazy(() => import("./UserOrganisationDetailsAbout-LJTCFEQV.js"));
var UserOrganisationDetailsParameters = React2.lazy(() => import("./UserOrganisationDetailsParameters-ARU3H6KQ.js"));
var UserOrganisationViewRoutes = [
  {
    path: "about",
    title: "Generic.UserOrganisation.About.title",
    element: /* @__PURE__ */ jsx2(UserOrganisationDetailsAbout, {})
  },
  {
    path: "parameters",
    title: "Generic.UserOrganisation.Parameters.title",
    element: /* @__PURE__ */ jsx2(UserOrganisationDetailsParameters, {})
  }
];

// src/views/organisation/UserOrganisationRoutes.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
var UserOrganisation = React3.lazy(() => import("./UserOrganisation-3XQ2VDTY.js"));
var UserOrganisationEdit = React3.lazy(() => import("./UserOrganisationEdit-S7SB5CNO.js"));
var UserOrganisationDetails = React3.lazy(() => import("./UserOrganisationDetails-X4EL5CGD.js"));
var UserOrganisationRoutes = [
  {
    path: "user/organisation",
    title: "Generic.UserOrganisation.title",
    element: /* @__PURE__ */ jsx3(UserOrganisation, {}),
    children: [
      {
        path: "create",
        title: "Generic.UserOrganisation.Create.title",
        element: /* @__PURE__ */ jsx3(UserOrganisationEdit, {})
      }
    ]
  },
  {
    path: "user/organisation",
    title: "Generic.UserOrganisation.title",
    element: /* @__PURE__ */ jsx3(Outlet, {}),
    children: [
      {
        path: ":id",
        title: "${designation}",
        element: /* @__PURE__ */ jsx3(UserOrganisationDetails, {}),
        children: UserOrganisationViewRoutes
      }
    ]
  }
];

// src/views/user-details/UserDetailsRoutes.tsx
import React9 from "react";

// src/views/user-details/views/about/AboutUserDetailsRoutes.tsx
import React4 from "react";
import { jsx as jsx4 } from "react/jsx-runtime";
var AboutUserDetailsContainer = React4.lazy(() => import("./AboutUserDetailsContainer-SBTENQ4Y.js"));
var AboutUserDetailsRoutes = [
  {
    path: "about",
    title: "Harea.User.List.About.title",
    element: /* @__PURE__ */ jsx4(AboutUserDetailsContainer, {})
  }
];

// src/views/user-details/views/contracts/ContractsUserDetailsRoutes.tsx
import React5 from "react";
import { jsx as jsx5 } from "react/jsx-runtime";
var ContractsUserDetailsContainer = React5.lazy(() => import("./ContractsUserDetailsContainer-23NBIFYA.js"));
var ContractsUserDetailsRoutes = [
  {
    path: "contracts",
    title: "Harea.User.Details.Vacation.title",
    element: /* @__PURE__ */ jsx5(ContractsUserDetailsContainer, {})
  }
];

// src/views/user-details/views/devices/DevicesUserDetailsRoutes.tsx
import React6 from "react";
import { jsx as jsx6 } from "react/jsx-runtime";
var DevicesUserDetailsContainer = React6.lazy(() => import("./DevicesUserDetailsContainer-QKRN23IB.js"));
var DevicesUserDetailsRoutes = [
  {
    path: "devices",
    title: "Harea.User.Details.Devices.title",
    element: /* @__PURE__ */ jsx6(DevicesUserDetailsContainer, {})
  }
];

// src/views/user-details/views/params/ParamsUserDetailsRoutes.tsx
import React7 from "react";
import { jsx as jsx7 } from "react/jsx-runtime";
var ParamsUserDetailsContainer = React7.lazy(() => import("./ParamsUserDetailsContainer-SLVBCBCS.js"));
var ParamsUserDetailsRoutes = [
  {
    path: "params",
    title: "Harea.User.Details.Params.title",
    element: /* @__PURE__ */ jsx7(ParamsUserDetailsContainer, {})
  }
];

// src/views/user-details/views/vacation/VacationUserDetailsRoutes.tsx
import React8 from "react";
import { jsx as jsx8 } from "react/jsx-runtime";
var VacationUserDetailsContainer = React8.lazy(() => import("./VacationUserDetailsContainer-XSWVOICW.js"));
var VacationUserDetailsRoutes = [
  {
    path: "vacation",
    title: "Harea.User.Details.Vacation.title",
    element: /* @__PURE__ */ jsx8(VacationUserDetailsContainer, {})
  }
];

// src/views/user-details/UserDetailsRoutes.tsx
import { jsx as jsx9 } from "react/jsx-runtime";
var UserDetailsContainer = React9.lazy(() => import("./UserDetailsContainer-STIFRFO6.js"));
var UserDetailsRoutes = [
  {
    path: "user/:id",
    title: "Harea.User.List.Details.title",
    element: /* @__PURE__ */ jsx9(UserDetailsContainer, {}),
    children: [
      ...AboutUserDetailsRoutes,
      ...ParamsUserDetailsRoutes,
      ...ContractsUserDetailsRoutes,
      ...VacationUserDetailsRoutes,
      ...DevicesUserDetailsRoutes
    ]
  }
];

// src/UserRoutes.tsx
var UserRoutes = [
  ...UserOrganisationRoutes,
  ...UserListRoutes,
  ...UserDetailsRoutes
];
export {
  UserRoutes
};
//# sourceMappingURL=index.js.map
