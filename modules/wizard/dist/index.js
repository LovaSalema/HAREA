import 'react'
import {
  Wizard
} from "./chunk-XSS5LABU.js";
import "./chunk-XMFLSIV7.js";
import {
  useWizardDetailsQuery
} from "./chunk-UYNSIGFG.js";
import "./chunk-QM6VBZSE.js";

// src/index.tsx
import "@mzara/flow/dist/index.css";
import "@mzara/flow/dist/main.css";

// src/WizardRoutes.tsx
import React2 from "react";

// src/containers/WizardDetails.tsx
import { useEffect } from "react";
import { Box, BreadCrumb, GenericSuspense, Menu, RightSidebar, useTranslations as useTranslations3 } from "@mzara/component";
import { Outlet, useNavigate, useParams } from "react-router-dom";

// src/hooks/useWizardDetailsBreadCrumb.ts
import { useTranslationRoute, useTranslations } from "@mzara/component";
var useWizardDetailsBreadCrumb = (title) => {
  const [
    HOME,
    TITLE
  ] = useTranslations(i18n);
  const url = useTranslationRoute();
  return [
    {
      label: HOME,
      link: url("")
    },
    {
      label: TITLE,
      link: url("wizard")
    },
    {
      label: title,
      className: "active"
    }
  ].reverse();
};
var i18n = [
  "std_home",
  "Bo.Wizard.title"
];

// src/hooks/useWizardDetailsMenu.ts
import { useTranslationRoute as useTranslationRoute2, useTranslations as useTranslations2 } from "@mzara/component";
import { useMemo } from "react";
var useWizardDetailsMenu = (id) => {
  const [
    ABOUT,
    DESIGNER,
    PARAMS
  ] = useTranslations2(i18n2);
  const translatedRoute = useTranslationRoute2();
  return useMemo(() => [
    {
      ke: "about",
      label: ABOUT,
      link: translatedRoute(`wizard/${id}/about`)
    },
    {
      ke: "designer",
      label: DESIGNER,
      link: translatedRoute(`wizard/${id}/designer`)
    },
    {
      ke: "params",
      label: PARAMS,
      link: translatedRoute(`wizard/${id}/params`)
    }
  ], [ABOUT]);
};
var i18n2 = [
  "std_about",
  "std_designer",
  "std_params"
];

// src/containers/WizardDetails.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var WizardDetails = () => {
  const [
    SAVE
  ] = useTranslations3(i18n3);
  const { id } = useParams();
  const [, , , , tab] = location.pathname.split("/");
  const { data } = useWizardDetailsQuery(parseInt(id), true);
  const breadCrumb = useWizardDetailsBreadCrumb(data.title);
  const menus = useWizardDetailsMenu(parseInt(id));
  const navigate = useNavigate();
  useEffect(() => {
    if (!menus.some((item) => item.ke === tab)) {
      navigate(menus[0].link, { replace: true });
    }
  }, []);
  return /* @__PURE__ */ jsxs("div", {
    className: "flex flex-row w-full gap-4",
    children: [
      /* @__PURE__ */ jsxs("div", {
        className: "flex flex-col gap-5 flex-1",
        children: [
          /* @__PURE__ */ jsx("div", {
            className: "flex items-center justify-between",
            children: /* @__PURE__ */ jsxs("div", {
              children: [
                /* @__PURE__ */ jsx("h4", {
                  className: "font-semibold",
                  children: data.title
                }),
                /* @__PURE__ */ jsx("h6", {
                  children: data.wizardKey
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx(BreadCrumb, {
            items: breadCrumb
          }),
          /* @__PURE__ */ jsx(Box, {
            className: " box-p-0",
            children: /* @__PURE__ */ jsx(Menu, {
              type: "HORIZONTAL",
              className: "menuPublication",
              items: menus,
              activeFn: (menu) => menu.ke === tab
            })
          }),
          /* @__PURE__ */ jsx(GenericSuspense, {
            children: /* @__PURE__ */ jsx(Outlet, {})
          })
        ]
      }),
      /* @__PURE__ */ jsx(RightSidebar, {})
    ]
  });
};
var i18n3 = [
  "std_save"
];
var WizardDetails_default = WizardDetails;

// src/view/WizardDetailsViewRoutes.tsx
import React from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
var WizardDetailsAbout = React.lazy(() => import("./WizardDetailsAbout-RTIB35LG.js"));
var WizardDetailsDesigner = React.lazy(() => import("./WizardDetailsDesigner-RM6KZURL.js"));
var WizardDetailsParams = React.lazy(() => import("./WizardDetailsParams-2ETZS6RE.js"));
var WizardDetailsViewRoutes = [
  {
    path: "about",
    title: "Bo.Wizard.About.title",
    element: /* @__PURE__ */ jsx2(WizardDetailsAbout, {})
  },
  {
    path: "designer",
    title: "Bo.Wizard.Designer.title",
    element: /* @__PURE__ */ jsx2(WizardDetailsDesigner, {})
  },
  {
    path: "params",
    title: "Bo.Wizard.Params.title",
    element: /* @__PURE__ */ jsx2(WizardDetailsParams, {})
  }
];

// src/WizardRoutes.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
var Translation = React2.lazy(() => import("./Wizard-CKCYYEHJ.js"));
var WizardEdit = React2.lazy(() => import("./WizardEdit-4SMXAVHH.js"));
var WizardRoutes = [
  {
    path: "wizard",
    title: "Bo.Wizard.title",
    element: /* @__PURE__ */ jsx3(Translation, {}),
    children: [
      {
        path: "create",
        title: "Bo.Wizard.Create.title",
        element: /* @__PURE__ */ jsx3(WizardEdit, {})
      }
    ]
  },
  {
    path: "wizard/:id",
    title: "Bo.Wizard.title",
    element: /* @__PURE__ */ jsx3(WizardDetails_default, {}),
    children: [
      ...WizardDetailsViewRoutes
    ]
  }
];
export {
  Wizard,
  WizardRoutes
};
//# sourceMappingURL=index.js.map
