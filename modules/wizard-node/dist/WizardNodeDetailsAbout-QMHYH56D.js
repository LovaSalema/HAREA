import 'react'
import {
  useWizardNodeDetailsQuery
} from "./chunk-EFTU5ZYV.js";
import "./chunk-MT53WDPF.js";

// src/views/details/views/about/containers/WizardNodeDetailsAbout.tsx
import { Box, Chip, Metadata, useTranslation, useTranslations } from "@mzara/component";
import { useParams } from "react-router-dom";
import { jsx, jsxs } from "react/jsx-runtime";
var WizardNodeDetailsAbout = () => {
  var _a;
  const [
    INFO,
    KEY_LABEL,
    TITLE_LABEL,
    DESCRIPTION_LABEL,
    COMMENT_LABEL,
    TAGS_LABEL
  ] = useTranslations(i18n);
  const t = useTranslation();
  const { id } = useParams();
  const { data } = useWizardNodeDetailsQuery(parseInt(id), true);
  return /* @__PURE__ */ jsxs(Box, {
    title: INFO,
    className: "flex flex-col gap-3",
    children: [
      /* @__PURE__ */ jsx(Metadata, {
        label: KEY_LABEL,
        value: data.nodeKey
      }),
      /* @__PURE__ */ jsx(Metadata, {
        label: TITLE_LABEL,
        value: t(data.title)
      }),
      /* @__PURE__ */ jsx(Metadata, {
        label: DESCRIPTION_LABEL,
        value: t(data.description)
      }),
      /* @__PURE__ */ jsx(Metadata, {
        label: COMMENT_LABEL,
        value: data.comment
      }),
      /* @__PURE__ */ jsx(Metadata, {
        label: TAGS_LABEL,
        value: /* @__PURE__ */ jsx("p", {
          children: (_a = data.tags) == null ? void 0 : _a.map((item, index) => /* @__PURE__ */ jsx(Chip, {
            label: item.value,
            color: item.color
          }, index))
        })
      })
    ]
  });
};
var i18n = [
  "std_info",
  "Bo.WizardNode.form.key.label",
  "Bo.WizardNode.form.title.label",
  "Bo.WizardNode.form.description.label",
  "Bo.WizardNode.form.comment.label"
];
var WizardNodeDetailsAbout_default = WizardNodeDetailsAbout;
export {
  WizardNodeDetailsAbout_default as default
};
//# sourceMappingURL=WizardNodeDetailsAbout-QMHYH56D.js.map
