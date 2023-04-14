import 'react'
import {
  useBreadCrumb
} from "./chunk-IOBJJFIT.js";
import "./chunk-QM6VBZSE.js";

// src/views/CV-details/containers/CvDetailsContainer.tsx
import { BreadCrumb, GenericSuspense, Menu } from "@mzara/component";
import { Outlet, useParams } from "react-router-dom";

// src/views/CV-details/hooks/useCvDetailsMenu.ts
import { useTranslationRoute } from "@mzara/component";
import { useMemo } from "react";
var useCvDetailsMenu = (id) => {
  const translateRoute = useTranslationRoute();
  return useMemo(() => [
    {
      ke: "details",
      label: "pi\xE8ce jointe",
      link: translateRoute(`recruiting/cv/${id}/details`)
    },
    {
      ke: "evaluations",
      label: "Evaluations",
      link: translateRoute(`recruiting/cv/${id}/evaluations`)
    }
  ], []);
};

// src/views/CV-details/containers/CvDetailsContainer.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var CvDetailsContainer = () => {
  const [, , , , , tab] = location.pathname.split("/");
  const breadcrumbItems = useBreadCrumb();
  const { id } = useParams();
  const menuItems = useCvDetailsMenu(id);
  return /* @__PURE__ */ jsx("div", {
    className: "flex w-full h-max",
    children: /* @__PURE__ */ jsxs("section", {
      className: " py-3 pl-5 pr-3 flex flex-1 flex-col gap-5",
      children: [
        /* @__PURE__ */ jsx("div", {
          children: /* @__PURE__ */ jsx("h4", {
            children: /* @__PURE__ */ jsx("b", {
              children: "Curriculum vitae"
            })
          })
        }),
        /* @__PURE__ */ jsx(BreadCrumb, {
          items: breadcrumbItems
        }),
        /* @__PURE__ */ jsx(Menu, {
          items: menuItems,
          type: "HORIZONTAL",
          activeFn: (menu) => menu.ke === tab,
          className: "menuPublication"
        }),
        /* @__PURE__ */ jsx("div", {
          className: "flex gap-4",
          children: /* @__PURE__ */ jsx(GenericSuspense, {
            children: /* @__PURE__ */ jsx(Outlet, {})
          })
        })
      ]
    })
  });
};
var CvDetailsContainer_default = CvDetailsContainer;
export {
  CvDetailsContainer_default as default
};
//# sourceMappingURL=CvDetailsContainer-TK2QRDVO.js.map
