import 'react'
import {
  useEvaluationTemplateDetailsQuery
} from "./chunk-YFRPLPTN.js";
import "./chunk-QM6VBZSE.js";

// src/views/template-details/containers/TemplateDetailsContainer.tsx
import {
  BreadCrumb,
  GenericSuspense,
  Menu,
  RightSidebar
} from "@mzara/component";
import { Outlet } from "react-router-dom";

// src/views/template-details/hooks/useTemplateDetailsBreadCrumb.ts
import { useParams } from "react-router-dom";
var useTemplateDetailsBreadCrumb = () => {
  const { id } = useParams();
  const { data } = useEvaluationTemplateDetailsQuery(parseInt(id), true);
  return [
    {
      label: "Home"
    },
    {
      label: "Evaluation"
    },
    {
      label: "Template"
    },
    {
      label: data == null ? void 0 : data.title
    }
  ];
};

// src/views/template-details/hooks/useTemplateDetailsMenu.ts
import { useTranslationRoute } from "@mzara/component";
import { useParams as useParams2 } from "react-router-dom";
var useTemplateDetailsMenu = () => {
  const { id } = useParams2();
  const t = useTranslationRoute();
  return [
    {
      ke: "about",
      label: "A propos",
      link: t(`recruiting/template/${id}/about`)
    },
    {
      ke: "designer",
      label: "Designer",
      link: t(`recruiting/template/${id}/designer`)
    },
    {
      ke: "params",
      label: "Param\xE8tre",
      link: t(`recruiting/template/${id}/params`)
    }
  ];
};

// src/views/template-details/containers/TemplateDetailsContainer.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var TemplateDetailsContainer = () => {
  const [, , , , , tab] = location.pathname.split("/");
  const menuItems = useTemplateDetailsMenu();
  const breadCrumbItems = useTemplateDetailsBreadCrumb();
  return /* @__PURE__ */ jsxs("div", {
    className: "flex h-max justify-center gap-5 w-full",
    children: [
      /* @__PURE__ */ jsxs("section", {
        className: "sm:py-3 py-1 flex flex-col gap-5 box-body-background flex-1",
        children: [
          /* @__PURE__ */ jsx("div", {
            className: "flex items-center justify-between",
            children: /* @__PURE__ */ jsx("h4", {
              className: "font-semibold",
              children: "Template"
            })
          }),
          /* @__PURE__ */ jsx(BreadCrumb, {
            items: breadCrumbItems.reverse()
          }),
          /* @__PURE__ */ jsx(Menu, {
            type: "HORIZONTAL",
            className: "menuPublication",
            items: menuItems,
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
var TemplateDetailsContainer_default = TemplateDetailsContainer;
export {
  TemplateDetailsContainer_default as default
};
//# sourceMappingURL=TemplateDetailsContainer-J2XVWSMW.js.map
