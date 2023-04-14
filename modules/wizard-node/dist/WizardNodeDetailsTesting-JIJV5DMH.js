import 'react'
import {
  useWizardNodeDetailsQuery
} from "./chunk-EFTU5ZYV.js";
import "./chunk-MT53WDPF.js";

// src/views/details/views/test/containers/WizardNodeDetailsTesting.tsx
import { Box, ControlList } from "@mzara/component";
import { useParams } from "react-router-dom";
import { jsx } from "react/jsx-runtime";
var WizardNodeDetailsTesting = () => {
  const { id } = useParams();
  const { data } = useWizardNodeDetailsQuery(parseInt(id), true);
  return /* @__PURE__ */ jsx("div", {
    className: "flex flex-col gap-3",
    children: /* @__PURE__ */ jsx(Box, {
      className: "max-w-xl w-full m-auto",
      children: /* @__PURE__ */ jsx(ControlList, {
        data: { forms: [] },
        nodeKey: data.nodeKey
      })
    })
  });
};
var WizardNodeDetailsTesting_default = WizardNodeDetailsTesting;
export {
  WizardNodeDetailsTesting_default as default
};
//# sourceMappingURL=WizardNodeDetailsTesting-JIJV5DMH.js.map
