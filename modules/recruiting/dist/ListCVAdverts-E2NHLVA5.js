import 'react'
import {
  useRecruitingAdvertsDetailsQuery
} from "./chunk-IGZUUDK6.js";
import {
  __objRest
} from "./chunk-QM6VBZSE.js";

// src/views/publication/components/ListCVAdverts.tsx
import { Box, RightSidebar } from "@mzara/component";
import { useParams } from "react-router-dom";

// src/views/publication/components/CvListItem.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var CvListItem = (_a) => {
  var _b = _a, { fullName } = _b, props = __objRest(_b, ["fullName"]);
  return /* @__PURE__ */ jsxs("li", {
    className: "flex flex-col gap-2 py-4 border-b",
    children: [
      /* @__PURE__ */ jsx("h6", {
        className: "font-semibold tracking-wider",
        children: fullName
      }),
      /* @__PURE__ */ jsxs("div", {
        className: "flex items-center gap-2",
        children: [
          /* @__PURE__ */ jsx("i", {
            className: "fa-solid fa-clock text-[#6C6868]"
          }),
          /* @__PURE__ */ jsx("span", {
            className: "text-[12px]",
            children: "il y a 3 minutes"
          })
        ]
      })
    ]
  });
};

// src/views/publication/components/ListCVAdverts.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var ListCVAdverts = () => {
  var _a;
  const { id } = useParams();
  const { data } = useRecruitingAdvertsDetailsQuery(parseInt(id), true);
  return /* @__PURE__ */ jsx2(RightSidebar, {
    className: "right-sidebar-absolute h-full",
    children: /* @__PURE__ */ jsx2(Box, {
      className: "flex flex-col gap-3 h-full",
      title: data.title,
      description: /* @__PURE__ */ jsxs2("div", {
        className: "flex flex-col gap-3",
        children: [
          /* @__PURE__ */ jsx2("p", {
            className: "w-3/4 font-normal text-[14px]",
            children: data.description
          }),
          /* @__PURE__ */ jsxs2("div", {
            className: "flex justify-between items-center",
            children: [
              /* @__PURE__ */ jsxs2("div", {
                className: "flex gap-1 items-center",
                children: [
                  /* @__PURE__ */ jsx2("i", {
                    className: "fa-solid fa-clock text-[#6C6868]"
                  }),
                  /* @__PURE__ */ jsx2("span", {
                    className: "text-[12px]",
                    children: "12/04/2022"
                  })
                ]
              }),
              /* @__PURE__ */ jsxs2("div", {
                className: "text-[12px]",
                children: [
                  /* @__PURE__ */ jsx2("span", {
                    children: "Cr\xE9\xE9e le : "
                  }),
                  /* @__PURE__ */ jsx2("span", {
                    children: "07/23/2022"
                  })
                ]
              })
            ]
          })
        ]
      }),
      children: /* @__PURE__ */ jsx2("div", {
        className: "cv-list-content",
        children: /* @__PURE__ */ jsxs2("ul", {
          className: "flex flex-col gap-3",
          children: [
            /* @__PURE__ */ jsxs2("li", {
              className: " w-full flex justify-between items-center py-2 border-b",
              children: [
                /* @__PURE__ */ jsx2("span", {
                  className: "text-[12px]",
                  children: "Tous les CV"
                }),
                /* @__PURE__ */ jsx2("i", {
                  className: "fa-solid fa-caret-down text-[#6C6868]"
                })
              ]
            }),
            (_a = data.cvs) == null ? void 0 : _a.map((cv) => /* @__PURE__ */ jsx2(CvListItem, {
              fullName: cv == null ? void 0 : cv.name
            }))
          ]
        })
      })
    })
  });
};
var ListCVAdverts_default = ListCVAdverts;
export {
  ListCVAdverts_default as default
};
//# sourceMappingURL=ListCVAdverts-E2NHLVA5.js.map
