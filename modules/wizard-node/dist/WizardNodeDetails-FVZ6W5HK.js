import 'react'
import {
  useWizardNodeDetailsQuery
} from "./chunk-EFTU5ZYV.js";
import "./chunk-MT53WDPF.js";

// src/views/details/containers/WizardNodeDetails.tsx
import { useEffect } from "react";
import { Box, BreadCrumb, GenericSuspense, Menu, RightSidebar, useTranslation, useTranslationRoute as useTranslationRoute3, useTranslations as useTranslations3 } from "@mzara/component";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";

// src/hooks/useWizardNodeDetailsBreadCrumb.ts
import { useTranslationRoute, useTranslations } from "@mzara/component";
var useWizardNodeDetailsBreadCrumb = (title) => {
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
      link: url("wizard-node")
    },
    {
      label: title,
      className: "active"
    }
  ];
};
var i18n = [
  "std_home",
  "Bo.WizardNode.title"
];

// src/views/details/hooks/useWizardNodeDetailsMenu.ts
import { useTranslationRoute as useTranslationRoute2, useTranslations as useTranslations2 } from "@mzara/component";
import { useMemo } from "react";
var useWizardNodeDetailsMenu = (id) => {
  const [
    ABOUT,
    DESIGNER,
    TEST,
    PARAMS
  ] = useTranslations2(i18n2);
  const translatedRoute = useTranslationRoute2();
  return useMemo(() => [
    {
      ke: "about",
      label: ABOUT,
      link: translatedRoute(`wizard-node/${id}/about`)
    },
    {
      ke: "designer",
      label: DESIGNER,
      link: translatedRoute(`wizard-node/${id}/designer`)
    },
    {
      ke: "test",
      label: TEST,
      link: translatedRoute(`wizard-node/${id}/test`)
    },
    {
      ke: "params",
      label: PARAMS,
      link: translatedRoute(`wizard-node/${id}/params`)
    }
  ], [ABOUT]);
};
var i18n2 = [
  "std_about",
  "std_designer",
  "std_test",
  "std_params"
];

// src/views/details/containers/WizardNodeDetails.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var WizardNodeDetails = () => {
  const [
    SAVE,
    PROPERTIES
  ] = useTranslations3(i18n3);
  const t = useTranslation();
  const { id } = useParams();
  const { data } = useWizardNodeDetailsQuery(parseInt(id), true);
  const breadCrumb = useWizardNodeDetailsBreadCrumb(data.title);
  const menuItems = useWizardNodeDetailsMenu(id);
  const location = useLocation();
  const navigate = useNavigate();
  const translatedRoute = useTranslationRoute3();
  const [, , , , tab] = location.pathname.split("/");
  useEffect(() => {
    if (!tab) {
      navigate(translatedRoute(`wizard-node/${id}/about`), { replace: true });
    }
  }, []);
  return /* @__PURE__ */ jsxs("div", {
    className: "flex flex-row w-full",
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
                  children: t(data.title)
                }),
                /* @__PURE__ */ jsx("h6", {
                  children: data.nodeKey
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx(BreadCrumb, {
            items: breadCrumb.reverse()
          }),
          /* @__PURE__ */ jsx(Box, {
            className: "box-padding-0",
            children: /* @__PURE__ */ jsx(Menu, {
              items: menuItems,
              type: "HORIZONTAL",
              activeFn: (menu) => menu.ke === tab
            })
          }),
          /* @__PURE__ */ jsx("div", {
            children: /* @__PURE__ */ jsx(GenericSuspense, {
              children: /* @__PURE__ */ jsx(Outlet, {})
            })
          })
        ]
      }),
      /* @__PURE__ */ jsx(RightSidebar, {})
    ]
  });
};
var i18n3 = [
  "std_save",
  "Bo.WizardNode.Details.ControlDesigner.Properties.title"
];
var WizardNodeDetails_default = WizardNodeDetails;
export {
  WizardNodeDetails_default as default
};
//# sourceMappingURL=WizardNodeDetails-FVZ6W5HK.js.map
