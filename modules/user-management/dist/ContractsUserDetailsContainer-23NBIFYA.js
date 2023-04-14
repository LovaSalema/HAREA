import 'react'
import {
  useUserDetailsQuery
} from "./chunk-7APDHI4A.js";
import "./chunk-MT53WDPF.js";

// src/views/user-details/views/contracts/containers/ContractsUserDetailsContainer.tsx
import { Box, Button, IconButton } from "@mzara/component";
import { useParams } from "react-router-dom";
import { jsx, jsxs } from "react/jsx-runtime";
var ContractsUserDetailsContainer = () => {
  var _a;
  const { id } = useParams();
  const { data } = useUserDetailsQuery(parseInt(id), true);
  return /* @__PURE__ */ jsx("div", {
    className: "py-5",
    children: /* @__PURE__ */ jsx(Box, {
      title: "Liste des contrats",
      tools: /* @__PURE__ */ jsx(Button, {
        label: "Ajouter",
        startIcon: "fa-solid fa-plus",
        className: "flex items-center !bg-primary text-white gap-1 !rounded-full"
      }),
      className: "box-mb-0",
      children: /* @__PURE__ */ jsx("div", {
        className: "mt-3 flex flex-col gap-2",
        children: (_a = data == null ? void 0 : data.recruitingContracts) == null ? void 0 : _a.map((contract) => /* @__PURE__ */ jsxs("div", {
          className: "flex items-center justify-between",
          children: [
            /* @__PURE__ */ jsx("h6", {
              className: "font-semibold",
              children: contract == null ? void 0 : contract.designation
            }),
            /* @__PURE__ */ jsx(IconButton, {
              icon: "fa-solid fa-file-arrow-down text-lg"
            })
          ]
        }))
      })
    })
  });
};
var ContractsUserDetailsContainer_default = ContractsUserDetailsContainer;
export {
  ContractsUserDetailsContainer_default as default
};
//# sourceMappingURL=ContractsUserDetailsContainer-23NBIFYA.js.map
