import 'react'
import {
  WIZARD_LIST_ID
} from "./chunk-QXVWSTEJ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-QM6VBZSE.js";

// src/containers/WizardEdit.tsx
import { ControlList, Dialog, GenericSuspense, useListGraphqlQuery, useTranslations as useTranslations2, useUrlParamsValue } from "@mzara/component";
import { useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";

// src/hooks/useWizardEditForm.ts
import { useTranslations } from "@mzara/component";
import { useMemo } from "react";
var useWizardEditForm = (id) => {
  const [
    KEY_LABEL,
    KEY_DESCRIPTION,
    TITLE_LABEL,
    TITLE_DESCRIPTION,
    COMMENT_LABEL,
    COMMENT_DESCRIPTION,
    TAGS_LABEL,
    TAGS_DESCRIPTION,
    SAVE,
    CANCEL,
    TYPE_LABEL,
    TYPE_FLOW,
    TYPE_SEQUENTIAL
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
            type: "select",
            name: "type",
            label: TYPE_LABEL,
            required: true,
            options: [
              { value: "FLOW", label: TYPE_FLOW },
              { value: "SEQUENTIAL", label: TYPE_SEQUENTIAL }
            ]
          },
          {
            type: "text",
            name: "wizardKey",
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
            name: "comment",
            className: "",
            label: COMMENT_LABEL
          },
          {
            type: "lov-select",
            name: "tags",
            tp: "WIZARD_TAGS",
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
          entity: "wizard",
          entityId: id
        }
      },
      id: "translation-edit-form"
    };
  }, [KEY_LABEL]);
};
var i18n = [
  "Bo.Wizard.form.key.label",
  "Bo.Wizard.form.key.description",
  "Bo.Wizard.form.title.label",
  "Bo.Wizard.form.title.description",
  "Bo.Wizard.form.comment.label",
  "Bo.Wizard.form.comment.description",
  "Bo.Wizard.form.tags.label",
  "Bo.Wizard.form.tags.description",
  "std_save",
  "std_cancel",
  "Bo.WizardNode.form.type.label",
  "Bo.WizardNode.form.type.FLOW.label",
  "Bo.WizardNode.form.type.SEQUENTIAL.label"
];

// src/containers/WizardEdit.tsx
import { jsx } from "react/jsx-runtime";
var WizardEdit = (props) => {
  const [
    TITLE
  ] = useTranslations2(i18n2);
  const { id } = useParams();
  const urlParams = useUrlParamsValue();
  const control = useWizardEditForm(id ? parseInt(id) : void 0);
  const navigate = useNavigate();
  const { invalidateQuery } = useListGraphqlQuery(WIZARD_LIST_ID);
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
  "Bo.Wizard.Edit.Dialog.title"
];
var WizardEdit_default = WizardEdit;
export {
  WizardEdit_default as default
};
//# sourceMappingURL=WizardEdit-4SMXAVHH.js.map
