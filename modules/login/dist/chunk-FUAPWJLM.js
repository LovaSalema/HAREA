import 'react'
import {
  __spreadProps,
  __spreadValues
} from "./chunk-EMZHQZBF.js";

// src/hooks/useRedirectApp.ts
import { useAjax, useUrlParamsDecode, useUrlParamsEncode, useUrlParamsValue } from "@mzara/component";
import { useCallback } from "react";
var useRedirectToApp = () => {
  const ajax = useAjax();
  const { r } = useUrlParamsValue();
  const urlDecode = useUrlParamsDecode();
  const urlEncode = useUrlParamsEncode();
  return useCallback(() => {
    if (r) {
      const [url] = r.split("?");
      const returnUrlParams = urlDecode(r);
      const params = __spreadProps(__spreadValues({}, returnUrlParams), { _t: ajax == null ? void 0 : ajax.get_token() });
      window.location.href = `${url}?${urlEncode(params)}`;
    } else {
      window.location.href = `${process.env.REACT_APP_DEFAULT_APP}?_t=${ajax == null ? void 0 : ajax.get_token()}`;
    }
  }, [r]);
};

export {
  useRedirectToApp
};
//# sourceMappingURL=chunk-FUAPWJLM.js.map
