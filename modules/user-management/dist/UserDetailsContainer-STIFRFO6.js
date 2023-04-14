import 'react'
import "./chunk-MT53WDPF.js";

// src/views/user-details/containers/UserDetailsContainer.tsx
import { BreadCrumb, GenericSuspense, Menu, RightSidebar, useTranslationRoute as useTranslationRoute2 } from "@mzara/component";
import { useEffect } from "react";
import { Outlet, useNavigate, useParams as useParams2 } from "react-router-dom";

// src/views/user-details/hooks/useUserDetailsBreadCrumb.ts
var useUserDetailsBreadCrumb = () => {
  return [
    {
      label: "Home"
    },
    {
      label: "User"
    },
    {
      label: "Details"
    }
  ];
};

// src/views/user-details/hooks/useUserDetailsMenu.ts
import { useTranslationRoute } from "@mzara/component";
import { useParams } from "react-router-dom";
var useUserDetailsMenu = () => {
  const { id } = useParams();
  const t = useTranslationRoute();
  return [
    {
      ke: "about",
      label: "A propos",
      link: t(`user/${id}/about`)
    },
    {
      ke: "vacation",
      label: "Cong\xE9s",
      link: t(`user/${id}/vacation`)
    },
    {
      ke: "contracts",
      label: "Contrats",
      link: t(`user/${id}/contracts`)
    },
    {
      ke: "devices",
      label: "Appareils",
      link: t(`user/${id}/devices`)
    },
    {
      ke: "params",
      label: "Param\xE8tre",
      link: t(`user/${id}/params`)
    }
  ];
};

// src/views/user-details/containers/UserDetailsContainer.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var UserDetailsContainer = () => {
  const [, , , , tab] = location.pathname.split("/");
  const userDetailsMenuItems = useUserDetailsMenu();
  const userDetailsBreadCrumbItems = useUserDetailsBreadCrumb();
  const { id } = useParams2();
  const navigate = useNavigate();
  const url = useTranslationRoute2();
  useEffect(() => {
    var _a;
    if (!userDetailsMenuItems.some((item) => item.ke === tab)) {
      navigate(url(`user/${id}/${(_a = userDetailsMenuItems[0]) == null ? void 0 : _a.ke}`));
    }
  }, []);
  return /* @__PURE__ */ jsxs("div", {
    className: "flex h-max justify-center gap-5 w-full",
    children: [
      /* @__PURE__ */ jsxs("section", {
        className: "sm:py-3 py-1 flex flex-col gap-5 !bg-body-background flex-1",
        children: [
          /* @__PURE__ */ jsx("div", {
            className: "flex items-center justify-between",
            children: /* @__PURE__ */ jsx("h4", {
              className: "font-semibold",
              children: "Utilisateurs"
            })
          }),
          /* @__PURE__ */ jsx(BreadCrumb, {
            items: userDetailsBreadCrumbItems.reverse()
          }),
          /* @__PURE__ */ jsx(Menu, {
            items: userDetailsMenuItems,
            type: "HORIZONTAL",
            className: "menuPublication",
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
var UserDetailsContainer_default = UserDetailsContainer;
export {
  UserDetailsContainer_default as default
};
//# sourceMappingURL=UserDetailsContainer-STIFRFO6.js.map
