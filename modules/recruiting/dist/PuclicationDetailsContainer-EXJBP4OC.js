import 'react'
import {
  useBreadCrumb
} from "./chunk-IOBJJFIT.js";
import {
  useRecruitingAdvertsDetailsQuery
} from "./chunk-IGZUUDK6.js";
import "./chunk-QM6VBZSE.js";

// src/views/publication-details/containers/PuclicationDetailsContainer.tsx
import { BreadCrumb, Menu, GenericSuspense, RightSidebar } from "@mzara/component";
import { Outlet } from "react-router-dom";

// src/views/publication-details/hooks/usePublicationDetailsMenu.ts
import { useTranslationRoute } from "@mzara/component";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
var usePublicationDetailsMenu = () => {
  var _a;
  const { id } = useParams();
  const { data } = useRecruitingAdvertsDetailsQuery(parseInt(id), true);
  const translatedRoute = useTranslationRoute();
  return useMemo(() => {
    var _a2, _b;
    return [
      {
        ke: "about",
        label: "A propos",
        link: translatedRoute(`recruiting/publication/${id}/about`)
      },
      {
        ke: "cv",
        label: "Liste des Cvs",
        badge: ((_a2 = data == null ? void 0 : data.cvs) == null ? void 0 : _a2.length) == 0 ? "" : (_b = data == null ? void 0 : data.cvs) == null ? void 0 : _b.length,
        link: translatedRoute(`recruiting/publication/${id}/cv`)
      },
      {
        ke: "params",
        label: "Param\xE8tres",
        link: translatedRoute(`recruiting/publication/${id}/params`)
      }
    ];
  }, [(_a = data == null ? void 0 : data.cvs) == null ? void 0 : _a.length]);
};

// src/views/publication-details/containers/PuclicationDetailsContainer.tsx
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var PublicationDetailsContainer = () => {
  const [, , , , , tab] = location.pathname.split("/");
  const breadcrumbItems = useBreadCrumb();
  const menuItems = usePublicationDetailsMenu();
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsxs("div", {
      className: "flex w-full",
      children: [
        /* @__PURE__ */ jsxs("section", {
          className: "py-3 flex flex-1 flex-col gap-5",
          children: [
            /* @__PURE__ */ jsx("div", {
              className: "flex items-center justify-between py-5 px-3",
              children: /* @__PURE__ */ jsx("h4", {
                className: "font-semibold",
                children: "D\xE9tails Annonce"
              })
            }),
            /* @__PURE__ */ jsx(BreadCrumb, {
              items: breadcrumbItems.reverse()
            }),
            /* @__PURE__ */ jsx(Menu, {
              items: menuItems,
              type: "HORIZONTAL",
              activeFn: (menu) => menu.ke === tab,
              className: "menuPublication"
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
    })
  });
};
var PuclicationDetailsContainer_default = PublicationDetailsContainer;
export {
  PuclicationDetailsContainer_default as default
};
//# sourceMappingURL=PuclicationDetailsContainer-EXJBP4OC.js.map
