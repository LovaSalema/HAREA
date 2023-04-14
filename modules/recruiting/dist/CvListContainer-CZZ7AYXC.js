import 'react'
import {
  ColorState,
  stateDict
} from "./chunk-W3MJLHTQ.js";
import "./chunk-PL5ZRXZG.js";
import "./chunk-QY73VEYP.js";
import {
  useRecruitingAdvertsDetailsQuery
} from "./chunk-IGZUUDK6.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-QM6VBZSE.js";

// src/views/publication-details/views/cv/containers/CvListContainer.tsx
import { Box, Button, ControlList, Dialog, GenericSuspense } from "@mzara/component";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslationRoute } from "@mzara/component";

// src/views/CV/hooks/useRecruitingCuriculumVitaesForm.tsx
var useRecruitingCuriculumVitaeForm = () => {
  return {
    data: {
      forms: [
        {
          type: "text",
          name: "name",
          label: "Nom",
          required: true
        },
        {
          type: "text",
          name: "phone",
          label: "T\xE9l\xE9phone",
          required: true
        },
        {
          type: "text",
          name: "email",
          label: "Email",
          required: true
        },
        {
          type: "text",
          name: "adress",
          label: "Adresse"
        },
        {
          type: "text",
          name: "school",
          label: "Lyc\xE9e ou Universit\xE9"
        },
        {
          type: "text",
          name: "degree",
          label: "Dipl\xF4me"
        },
        {
          type: "textarea",
          name: "comment",
          label: "Commentaire"
        },
        {
          type: "file",
          multiple: true,
          name: "files",
          label: "Pi\xE8ce jointe"
        }
      ],
      value: {},
      next: {
        label: "Ajouter CV"
      },
      back: {
        label: "Annuler CV"
      },
      graphQL: {
        entity: "recruitingCuriculumVitae"
      }
    },
    id: "CV-add-form"
  };
};

// src/views/publication-details/views/cv/containers/CvListContainer.tsx
import moment from "moment";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var CvListContainer = () => {
  var _a;
  const t = useTranslationRoute();
  const { id } = useParams();
  const { data, invalidateQuery } = useRecruitingAdvertsDetailsQuery(parseInt(id), true);
  const ControlCvList = useRecruitingCuriculumVitaeForm();
  const [openListCV, setOpenListCv] = useState(false);
  const closeCVDialog = () => {
    setOpenListCv(false);
    invalidateQuery();
  };
  const handleOnClick = () => {
    setOpenListCv(true);
  };
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [
      /* @__PURE__ */ jsxs(Box, {
        children: [
          /* @__PURE__ */ jsxs("div", {
            className: "flex justify-between px-6 py-3",
            children: [
              /* @__PURE__ */ jsx("p", {
                children: "Liste des CV"
              }),
              /* @__PURE__ */ jsx(Button, {
                label: "Ajouter",
                startIcon: "fa-solid fa-plus",
                className: "flex items-center !bg-[#a1a1a29f] text-white gap-1 button-rounded-full",
                onClick: () => handleOnClick()
              })
            ]
          }),
          /* @__PURE__ */ jsx("ul", {
            className: "flex flex-col gap-2 ",
            children: (_a = data == null ? void 0 : data.cvs) == null ? void 0 : _a.map((item) => {
              var _a2, _b, _c;
              return /* @__PURE__ */ jsx(Fragment, {
                children: /* @__PURE__ */ jsxs("li", {
                  className: "border-b mx-4 py-3 flex justify-between items-center relative ",
                  children: [
                    /* @__PURE__ */ jsx(Link, {
                      to: t(`recruiting/cv/${item == null ? void 0 : item.id}`),
                      children: /* @__PURE__ */ jsxs("div", {
                        className: "flex flex-col gap-1",
                        children: [
                          /* @__PURE__ */ jsxs("div", {
                            className: "flex  gap-5 items-center justify-center",
                            children: [
                              /* @__PURE__ */ jsx("p", {
                                children: /* @__PURE__ */ jsx("b", {
                                  children: item.name
                                })
                              }),
                              /* @__PURE__ */ jsx("p", {
                                style: { backgroundColor: `${ColorState[(_a2 = item == null ? void 0 : item.state) == null ? void 0 : _a2.value]}` },
                                className: " flex justify-center items-center text-xs w-auto px-2 h-[20px] text-white rounded-xl",
                                children: stateDict[(_b = item == null ? void 0 : item.state) == null ? void 0 : _b.value]
                              })
                            ]
                          }),
                          /* @__PURE__ */ jsxs("div", {
                            className: "w-full flex gap-2 items-center",
                            children: [
                              /* @__PURE__ */ jsx("i", {
                                className: "fa-solid fa-clock text-[#6C6868]"
                              }),
                              /* @__PURE__ */ jsxs("span", {
                                className: "text-xs",
                                children: [
                                  " ",
                                  moment(item == null ? void 0 : item.createdAt).format("DD/MM/YYYY"),
                                  " "
                                ]
                              })
                            ]
                          })
                        ]
                      })
                    }),
                    ((_c = item == null ? void 0 : item.state) == null ? void 0 : _c.value) == "NEW" ? /* @__PURE__ */ jsx(Button, {
                      label: "Envoyer test",
                      className: "flex !bg-primary text-white gap-1 !rounded-full absolute right-7 "
                    }) : "",
                    /* @__PURE__ */ jsx(Link, {
                      to: t(`recruiting/cv/${item == null ? void 0 : item.id}/details`),
                      children: /* @__PURE__ */ jsx("i", {
                        className: "fa-solid fa-angle-right text-[#6C6868] "
                      })
                    })
                  ]
                })
              });
            })
          })
        ]
      }),
      /* @__PURE__ */ jsx(Dialog, {
        open: openListCV,
        title: "Ajouter CV",
        onDismiss: () => closeCVDialog(),
        children: /* @__PURE__ */ jsx(GenericSuspense, {
          children: /* @__PURE__ */ jsx(ControlList, __spreadProps(__spreadValues({}, ControlCvList), {
            value: { recrutingAdvert: { id: parseInt(id) } },
            onSubmited: () => closeCVDialog(),
            onCancel: () => closeCVDialog()
          }))
        })
      })
    ]
  });
};
var CvListContainer_default = CvListContainer;
export {
  CvListContainer_default as default
};
//# sourceMappingURL=CvListContainer-CZZ7AYXC.js.map
