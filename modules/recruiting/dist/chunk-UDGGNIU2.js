import 'react'
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-QM6VBZSE.js";

// src/containers/components/Badge.tsx
import { jsx } from "react/jsx-runtime";
var Badge = (_a) => {
  var _b = _a, { label, color, className } = _b, props = __objRest(_b, ["label", "color", "className"]);
  return /* @__PURE__ */ jsx("span", __spreadProps(__spreadValues({
    className: className + " text-white text-[9px] px-2 py-[2px] w-fit rounded-full"
  }, props), {
    style: { backgroundColor: color },
    children: label
  }));
};

export {
  Badge
};
//# sourceMappingURL=chunk-UDGGNIU2.js.map
