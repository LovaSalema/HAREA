import 'react'
import {
  WIZARD_NODE_LIST_ID
} from "./chunk-RMS4N4Q2.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-MT53WDPF.js";

// src/views/create/containers/WizardEdit.tsx
import { ControlList, Dialog, GenericSuspense, useListGraphqlQuery, useTranslations as useTranslations2, useUrlParamsValue } from "@mzara/component";

// src/views/create/hooks/useWizardNodeEditForm.ts
import { useTranslations } from "@mzara/component";
import { useMemo } from "react";
var useWizardNodeEditForm = (id) => {
  const [
    KEY_LABEL,
    TITLE_LABEL,
    DESCRIPTION_LABEL,
    COMMENT_LABEL,
    SAVE,
    CANCEL,
    TAGS_LABEL
  ] = useTranslations(i18n);
  return useMemo(() => {
    return {
      data: {
        forms: [
          {
            type: "hidden",
            name: "id"
          },
          {
            type: "text",
            name: "nodeKey",
            className: "",
            required: true,
            label: KEY_LABEL
          },
          {
            type: "text",
            name: "title",
            className: "",
            required: true,
            label: TITLE_LABEL
          },
          {
            type: "textarea",
            name: "description",
            className: "",
            label: DESCRIPTION_LABEL
          },
          {
            type: "textarea",
            name: "comment",
            className: "",
            label: COMMENT_LABEL
          },
          {
            type: "lov-select",
            name: "tags",
            tp: "WIZARD_NODE_TAGS",
            multiple: true,
            className: "",
            label: TAGS_LABEL
          }
        ],
        value: {},
        next: {
          label: SAVE
        },
        back: {
          label: CANCEL
        },
        graphQL: {
          entity: "wizardNode",
          entityId: id
        }
      },
      id: "translation-edit-form"
    };
  }, [KEY_LABEL]);
};
var i18n = [
  "Bo.WizardNode.form.key.label",
  "Bo.WizardNode.form.title.label",
  "Bo.WizardNode.form.description.label",
  "Bo.WizardNode.form.comment.label",
  "std_save",
  "std_cancel",
  "Bo.WizardNode.form.tags.label"
];

// src/views/create/containers/WizardEdit.tsx
import { useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { jsx } from "react/jsx-runtime";
var WizardEdit = (props) => {
  const [
    TITLE
  ] = useTranslations2(i18n2);
  const { id } = useParams();
  const urlParams = useUrlParamsValue();
  const control = useWizardNodeEditForm(id ? parseInt(id) : void 0);
  const navigate = useNavigate();
  const { invalidateQuery } = useListGraphqlQuery(WIZARD_NODE_LIST_ID);
  const closeDialog = useCallback(() => {
    navigate(-1, { replace: true });
    invalidateQuery();
  }, [urlParams]);
  return /* @__PURE__ */ jsx(Dialog, {
    open: true,
    title: TITLE,
    onDismiss: () => closeDialog(),
    children: /* @__PURE__ */ jsx(GenericSuspense, {
      children: /* @__PURE__ */ jsx(ControlList, __spreadProps(__spreadValues({}, control), {
        onBeforeSaving: props.clone ? (value) => __spreadValues({ id: void 0 }, value) : void 0,
        onSubmited: () => closeDialog(),
        onCancel: () => closeDialog()
      }))
    })
  });
};
var i18n2 = [
  "Bo.Wizard.Node.Edit.Dialog.title"
];
var WizardEdit_default = WizardEdit;
export {
  WizardEdit_default as default
};
//# sourceMappingURL=WizardEdit-TEWERDC2.js.map
