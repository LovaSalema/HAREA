import 'react'
import {
  CvDetails_default
} from "./chunk-W3MJLHTQ.js";
import {
  useCuriculumVitaeDetailsQuery
} from "./chunk-PL5ZRXZG.js";
import "./chunk-QY73VEYP.js";
import "./chunk-QM6VBZSE.js";

// src/views/CV-details/views/details/containers/DetailsContainer.tsx
import { useFileUrl as useFileUrl2 } from "@mzara/component";
import { useState } from "react";

// src/views/CV-details/views/details/components/FileList.tsx
import { Box, Button } from "@mzara/component";
import { useParams } from "react-router-dom";
import { jsx, jsxs } from "react/jsx-runtime";
var FileList = ({ handleOnClick }) => {
  var _a;
  const { id } = useParams();
  const { data } = useCuriculumVitaeDetailsQuery(parseInt(id), true);
  return /* @__PURE__ */ jsx(Box, {
    children: /* @__PURE__ */ jsx("div", {
      className: "w-max ",
      children: /* @__PURE__ */ jsxs("div", {
        className: "flex flex-col gap-4",
        children: [
          /* @__PURE__ */ jsx("h5", {
            children: /* @__PURE__ */ jsx("b", {
              children: "Liste de fichiers"
            })
          }),
          /* @__PURE__ */ jsx("ul", {
            className: "flex flex-col gap-6 m-6",
            children: (data == null ? void 0 : data.files) ? (_a = data == null ? void 0 : data.files) == null ? void 0 : _a.map((file) => /* @__PURE__ */ jsxs("li", {
              className: "flex justify-between items-center gap-6 border-b p-4",
              children: [
                /* @__PURE__ */ jsxs("div", {
                  className: "flex gap-4",
                  children: [
                    /* @__PURE__ */ jsx("i", {
                      className: "fa-solid fa-file"
                    }),
                    /* @__PURE__ */ jsx("div", {
                      children: /* @__PURE__ */ jsx("h6", {
                        children: /* @__PURE__ */ jsx("b", {
                          children: file.name
                        })
                      })
                    })
                  ]
                }),
                /* @__PURE__ */ jsx(Button, {
                  label: "aper\xE7ue",
                  className: "!rounded-full !bg-primary text-white",
                  onClick: () => {
                    handleOnClick(file.id);
                  }
                })
              ]
            })) : /* @__PURE__ */ jsx("b", {
              children: "Aucune pi\xE8ce jointe"
            })
          })
        ]
      })
    })
  });
};
var FileList_default = FileList;

// src/views/CV-details/views/details/containers/DetailsContainer.tsx
import { Fragment, jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var DetailsContainer = () => {
  const fileUrl = useFileUrl2();
  const [open, setOpen] = useState(false);
  const [idUrl, setIdUrl] = useState("");
  const handleOnClick = (id) => {
    setOpen(true);
    setIdUrl(id);
    console.log(fileUrl(id));
  };
  return /* @__PURE__ */ jsx2(Fragment, {
    children: /* @__PURE__ */ jsxs2("div", {
      className: "flex flex-col gap-6 ",
      children: [
        /* @__PURE__ */ jsxs2("div", {
          className: "flex gap-5",
          children: [
            /* @__PURE__ */ jsx2(CvDetails_default, {}),
            /* @__PURE__ */ jsx2(FileList_default, {
              handleOnClick
            })
          ]
        }),
        open && /* @__PURE__ */ jsx2("div", {
          className: "w-full h-max",
          children: /* @__PURE__ */ jsx2("iframe", {
            className: "w-full h-max",
            src: fileUrl(idUrl),
            width: "500",
            height: "400"
          })
        })
      ]
    })
  });
};
var DetailsContainer_default = DetailsContainer;
export {
  DetailsContainer_default as default
};
//# sourceMappingURL=DetailsContainer-VL7BL5FL.js.map
