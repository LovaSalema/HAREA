import 'react'
import {
  useRecruitingAdvertsForm
} from "./chunk-SMGZAMIV.js";
import {
  useRecruitingAdvertsDetailsQuery
} from "./chunk-IGZUUDK6.js";
import {
  Badge
} from "./chunk-UDGGNIU2.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-QM6VBZSE.js";

// src/views/publication-details/views/about/containers/AboutRecruitingAdvert.tsx
import { Box, ControlList, DateSpan, Dialog, GenericSuspense, useFileUrl } from "@mzara/component";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var AboutRecruitingAdvert = () => {
  var _a, _b;
  const { id } = useParams();
  const { data, invalidateQuery } = useRecruitingAdvertsDetailsQuery(parseInt(id), true);
  const closeDialog = () => {
    setOpen(false);
    invalidateQuery();
  };
  const [open, setOpen] = useState(false);
  const handleOnClick = () => {
    setOpen(!open);
  };
  let date = new Date(data.dateEnd);
  const fileUrl = useFileUrl();
  const control = useRecruitingAdvertsForm(parseInt(id));
  control.data.next.label = "Modifier l'annonce";
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [
      /* @__PURE__ */ jsx("div", {
        className: "flex  flex-col justify-between gap-5",
        children: /* @__PURE__ */ jsxs(Box, {
          title: data == null ? void 0 : data.title,
          className: "shadow-lg h-max w-full",
          children: [
            /* @__PURE__ */ jsxs("div", {
              className: "flex w-1/2 ml-2",
              children: [
                /* @__PURE__ */ jsxs("div", {
                  className: " w-full flex gap-3 items-center",
                  children: [
                    /* @__PURE__ */ jsx("i", {
                      className: "fa-solid fa-clock fa-md  text-[#6C6868]"
                    }),
                    /* @__PURE__ */ jsx(DateSpan, {
                      value: `${data == null ? void 0 : data.createdAt}`,
                      className: "text-xs"
                    })
                  ]
                }),
                /* @__PURE__ */ jsxs("div", {
                  className: "w-full flex gap-3 items-center relative right-10",
                  children: [
                    /* @__PURE__ */ jsx("i", {
                      className: "fa-solid fa-clock fa-md text-[#6C6868]"
                    }),
                    /* @__PURE__ */ jsx(DateSpan, {
                      value: data.dateEnd
                    })
                  ]
                })
              ]
            }),
            /* @__PURE__ */ jsx("div", {
              className: "flex flex-col gap-6 mt-6",
              children: /* @__PURE__ */ jsxs("div", {
                className: "flex flex-col gap-3 pb-4",
                children: [
                  (_a = data == null ? void 0 : data.description) == null ? void 0 : _a.split("\n").map((item, i) => /* @__PURE__ */ jsx("p", {
                    className: "text-md ",
                    children: item
                  }, i)),
                  (_b = data == null ? void 0 : data.images) == null ? void 0 : _b.map((item) => /* @__PURE__ */ jsx("img", {
                    className: "w-[200px]",
                    alt: item == null ? void 0 : item.name,
                    src: fileUrl(item == null ? void 0 : item.id),
                    children: item == null ? void 0 : item.value
                  }))
                ]
              })
            }),
            /* @__PURE__ */ jsx(Badge, {
              label: "Nouveau",
              color: "var(--primary)"
            })
          ]
        })
      }),
      /* @__PURE__ */ jsx(Dialog, {
        open,
        title: "Modifier l'annonce",
        onDismiss: () => closeDialog(),
        children: /* @__PURE__ */ jsx(GenericSuspense, {
          children: /* @__PURE__ */ jsx(ControlList, __spreadProps(__spreadValues({}, control), {
            onSubmited: () => closeDialog(),
            onCancel: () => closeDialog()
          }))
        })
      })
    ]
  });
};
var AboutRecruitingAdvert_default = AboutRecruitingAdvert;
export {
  AboutRecruitingAdvert_default as default
};
//# sourceMappingURL=AboutRecruitingAdvert-XTI3374I.js.map
