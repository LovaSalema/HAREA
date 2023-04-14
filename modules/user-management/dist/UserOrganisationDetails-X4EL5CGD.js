import 'react'
import {
  useUserOrganisationDetailsQuery
} from "./chunk-FMGK7GP5.js";
import "./chunk-MT53WDPF.js";

// src/views/organisation/containers/UserOrganisationDetails.tsx
import { useEffect } from "react";
import { BreadCrumb, GenericSuspense, Menu, RightSidebar, useTranslations as useTranslations3 } from "@mzara/component";
import { Outlet, useNavigate, useParams } from "react-router-dom";

// src/views/organisation/hooks/useUserOrganisationDetailsMenu.ts
import { useTranslationRoute, useTranslations } from "@mzara/component";
import { useMemo } from "react";
var useUserOrganisationDetailsMenu = (id) => {
  const [
    ABOUT,
    PARAMS
  ] = useTranslations(i18n);
  const { data } = useUserOrganisationDetailsQuery(id, true);
  const translatedRoute = useTranslationRoute();
  return useMemo(() => [
    {
      ke: "about",
      label: ABOUT,
      link: translatedRoute(`user/organisation/${id}/about`)
    },
    {
      ke: "parameters",
      label: PARAMS,
      link: translatedRoute(`user/organisation/${id}/parameters`)
    }
  ], [data]);
};
var i18n = [
  "std_about",
  "std_params"
];

// src/views/organisation/hooks/useUserOrganisationDetailsBreadCrumb.ts
import { useTranslationRoute as useTranslationRoute2, useTranslations as useTranslations2 } from "@mzara/component";
var useUserOrganisationDetailsBreadCrumb = (title) => {
  const [
    HOME,
    USER,
    TITLE
  ] = useTranslations2(i18n2);
  const url = useTranslationRoute2();
  return [
    {
      label: HOME,
      link: url("")
    },
    {
      label: USER,
      link: url("/user")
    },
    {
      label: TITLE,
      className: "active"
    },
    {
      label: title,
      className: "active"
    }
  ];
};
var i18n2 = [
  "std_home",
  "std_user",
  "Generic.UserOrganisation.title"
];

// src/views/organisation/containers/UserOrganisationDetails.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var UserOrganisationDetails = () => {
  const [
    SAVE
  ] = useTranslations3(i18n3);
  const [, , , , , tab] = location.pathname.split("/");
  const { id } = useParams();
  const { data } = useUserOrganisationDetailsQuery(parseInt(id), true);
  const breadCrumb = useUserOrganisationDetailsBreadCrumb(data.designation);
  const menus = useUserOrganisationDetailsMenu(parseInt(id));
  const navigate = useNavigate();
  useEffect(() => {
    if (!menus.some((item) => item.ke === tab)) {
      navigate(menus[0].link);
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
            children: /* @__PURE__ */ jsx("h4", {
              className: "font-semibold",
              children: data.designation
            })
          }),
          /* @__PURE__ */ jsx(BreadCrumb, {
            items: breadCrumb.reverse()
          }),
          /* @__PURE__ */ jsx(Menu, {
            type: "HORIZONTAL",
            className: "menuPublication",
            items: menus,
            activeFn: (menu) => menu.ke === tab
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
var UserOrganisationDetails_default = UserOrganisationDetails;
export {
  UserOrganisationDetails_default as default
};
//# sourceMappingURL=UserOrganisationDetails-X4EL5CGD.js.map
