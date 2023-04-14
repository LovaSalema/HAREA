import 'react'
import {
  useWizardDetailsQuery
} from "./chunk-UYNSIGFG.js";
import "./chunk-QM6VBZSE.js";

// src/view/about/containers/WizardDetailsAbout.tsx
import { Box, Button, Chip, Metadata, useTranslationRoute, useTranslations } from "@mzara/component";
import { Link, useParams } from "react-router-dom";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var WizardDetailsAbout = () => {
  var _a;
  const [
    INFO,
    KEY_LABEL,
    TITLE_LABEL,
    COMMENT_LABEL,
    TAGS_LABEL,
    EDIT
  ] = useTranslations(i18n);
  const { id } = useParams();
  const { data } = useWizardDetailsQuery(parseInt(id), true);
  const translatedRoute = useTranslationRoute();
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsxs(Box, {
      title: INFO,
      className: "flex flex-col gap-3",
      children: [
        /* @__PURE__ */ jsx(Metadata, {
          label: KEY_LABEL,
          value: data.wizardKey
        }),
        /* @__PURE__ */ jsx(Metadata, {
          label: TITLE_LABEL,
          value: data.title
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
        }),
        /* @__PURE__ */ jsx("div", {
          className: "flex justify-end mt-5",
          children: /* @__PURE__ */ jsx(Link, {
            to: translatedRoute(`wizard/${id}/edit`),
            children: /* @__PURE__ */ jsx(Button, {
              label: EDIT,
              startIcon: "fa-solid fa-pen",
              className: "btn btn-primary"
            })
          })
        })
      ]
    })
  });
};
var WizardDetailsAbout_default = WizardDetailsAbout;
var i18n = [
  "std_info",
  "Bo.Wizard.form.key.label",
  "Bo.Wizard.form.title.label",
  "Bo.Wizard.form.comment.label",
  "Bo.Wizard.form.tags.label",
  "std_edit"
];
export {
  WizardDetailsAbout_default as default
};
//# sourceMappingURL=WizardDetailsAbout-RTIB35LG.js.map
