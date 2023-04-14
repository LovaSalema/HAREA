import 'react'
import {
  useEvaluationTemplateDetailsQuery
} from "./chunk-YFRPLPTN.js";
import {
  Badge
} from "./chunk-UDGGNIU2.js";
import "./chunk-QM6VBZSE.js";

// src/views/template-details/views/about/containers/AboutTemplateDetailsContainer.tsx
import { Box, Chip } from "@mzara/component";
import _ from "lodash";
import { useParams } from "react-router-dom";
import { jsx, jsxs } from "react/jsx-runtime";
var AboutTemplateDetailsContainer = () => {
  var _a, _b;
  const { id } = useParams();
  const { data } = useEvaluationTemplateDetailsQuery(parseInt(id), true);
  return /* @__PURE__ */ jsx("div", {
    className: "py-5",
    children: /* @__PURE__ */ jsx(Box, {
      title: data == null ? void 0 : data.title,
      description: /* @__PURE__ */ jsx("p", {
        children: data == null ? void 0 : data.description
      }),
      tools: /* @__PURE__ */ jsxs("div", {
        className: "flex items-center gap-2 text-xs rounded-full px-2 py-1 bg-[#ECECEC]",
        children: [
          /* @__PURE__ */ jsx("i", {
            className: "fa-solid fa-users"
          }),
          /* @__PURE__ */ jsx("span", {
            children: (_a = data == null ? void 0 : data.evaluations) == null ? void 0 : _a.length
          })
        ]
      }),
      badge: (data == null ? void 0 : data.isPublic) && /* @__PURE__ */ jsx(Badge, {
        label: "Public",
        color: "var(--primary)"
      }),
      className: "w-max sm:min-w-[500px] flex flex-col gap-5 box-mb-0",
      children: !_.isEmpty(data == null ? void 0 : data.tags) && /* @__PURE__ */ jsx("div", {
        className: "flex items-center gap-4",
        children: (_b = data == null ? void 0 : data.tags) == null ? void 0 : _b.map((tag) => /* @__PURE__ */ jsx(Chip, {
          label: tag == null ? void 0 : tag.value,
          color: tag == null ? void 0 : tag.color,
          className: "px-2 text-xs rounded-full"
        }))
      })
    })
  });
};
var AboutTemplateDetailsContainer_default = AboutTemplateDetailsContainer;
export {
  AboutTemplateDetailsContainer_default as default
};
//# sourceMappingURL=AboutTemplateDetailsContainer-N277AFET.js.map
