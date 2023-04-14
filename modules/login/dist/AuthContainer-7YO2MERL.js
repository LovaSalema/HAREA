import 'react'
import {
  useRedirectToApp
} from "./chunk-FUAPWJLM.js";
import "./chunk-EMZHQZBF.js";

// src/containers/AuthContainer.tsx
import { GenericSuspense, useRuntimeEnv } from "@mzara/component";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Fragment, jsx } from "react/jsx-runtime";
var AuthContainer = () => {
  const redirectToApp = useRedirectToApp();
  const { runtimeEnv } = useRuntimeEnv();
  useEffect(() => {
    if (runtimeEnv == null ? void 0 : runtimeEnv.authenticated) {
      redirectToApp();
    }
  }, [runtimeEnv]);
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsx("div", {
      children: /* @__PURE__ */ jsx(GenericSuspense, {
        children: /* @__PURE__ */ jsx(Outlet, {})
      })
    })
  });
};
var AuthContainer_default = AuthContainer;
export {
  AuthContainer_default as default
};
//# sourceMappingURL=AuthContainer-7YO2MERL.js.map
