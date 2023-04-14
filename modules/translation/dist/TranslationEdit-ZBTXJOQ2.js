import 'react'
import {
  TRANSLATION_LIST_ID
} from "./chunk-TA3JQQCU.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-MT53WDPF.js";

// src/views/edit/containers/TranslationEdit.tsx
import { ControlList, Dialog, GenericSuspense, useListGraphqlQuery, useTranslationRoute, useTranslations as useTranslations2, useUrlParamsEncode, useUrlParamsValue } from "@mzara/component";
import { useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";

// src/views/edit/hooks/useTranslationEditForm.ts
import { useTranslations } from "@mzara/component";
import { useMemo } from "react";
var useTranslationEditForm = (id) => {
  const [
    KE_LABEL,
    KE_DESCRIPTION,
    VAL_LABEL,
    VAL_DESCRIPTION,
    ZONE_LABEL,
    ZONE_DESCRIPTION,
    APP_LABEL,
    APP_DESCRIPTION,
    COMMENTS_LABEL,
    COMMENTS_DESCRIPTION,
    QUALITY_LABEL,
    QUALITY_DESCRIPTION,
    SAVE,
    CANCEL
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
            name: "translationKey",
            className: "",
            label: KE_LABEL,
            placeholder: KE_DESCRIPTION,
            required: true
          },
          {
            type: "text",
            name: "value",
            className: "",
            label: VAL_LABEL,
            placeholder: VAL_DESCRIPTION,
            required: true
          },
          {
            type: "text",
            name: "comment",
            className: "",
            label: COMMENTS_LABEL,
            placeholder: COMMENTS_DESCRIPTION
          },
          {
            type: "de-select",
            name: "language",
            tp: "APP_ZONE",
            className: "",
            label: ZONE_LABEL,
            placeholder: ZONE_DESCRIPTION,
            required: true
          },
          {
            type: "de-select",
            name: "appName",
            tp: "APP_NAME",
            className: "",
            label: APP_LABEL,
            placeholder: APP_DESCRIPTION,
            required: true
          },
          {
            type: "de-select",
            name: "quality",
            tp: "TRANSLATION_QUALITY",
            className: "",
            label: QUALITY_LABEL,
            placeholder: QUALITY_DESCRIPTION,
            required: true
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
          entity: "translation",
          entityId: id
        }
      },
      id: "translation-edit-form"
    };
  }, [KE_LABEL]);
};
var i18n = [
  "Generic.txt.translate.form.ke.label",
  "Generic.txt.translate.form.ke.description",
  "Generic.txt.translate.form.val.label",
  "Generic.txt.translate.form.val.description",
  "Generic.txt.translate.form.zone.label",
  "Generic.txt.translate.form.zone.description",
  "Generic.txt.translate.form.app.label",
  "Generic.txt.translate.form.app.description",
  "Generic.txt.translate.form.comments.label",
  "Generic.txt.translate.form.comments.description",
  "Generic.txt.translate.form.quality.label",
  "Generic.txt.translate.form.quality.description",
  "Generic.txt.translate.form.save.title",
  "Generic.txt.translate.form.cancel.title"
];

// src/views/edit/containers/TranslationEdit.tsx
import { jsx } from "react/jsx-runtime";
var TranslationEdit = (props) => {
  const [
    TITLE
  ] = useTranslations2(i18n2);
  const { id } = useParams();
  const urlParams = useUrlParamsValue();
  const encodeUrl = useUrlParamsEncode();
  const control = useTranslationEditForm(id ? parseInt(id) : void 0);
  const navigate = useNavigate();
  const translatedRoute = useTranslationRoute();
  const { invalidateQuery } = useListGraphqlQuery(TRANSLATION_LIST_ID);
  const closeDialog = useCallback(() => {
    navigate(translatedRoute(`translation?${encodeUrl(urlParams)}`), { replace: true });
    invalidateQuery();
  }, [urlParams]);
  return /* @__PURE__ */ jsx(Dialog, {
    open: true,
    title: TITLE,
    onDismiss: () => closeDialog(),
    children: /* @__PURE__ */ jsx(GenericSuspense, {
      children: /* @__PURE__ */ jsx(ControlList, __spreadProps(__spreadValues({}, control), {
        onBeforeSaving: props.clone ? (value) => __spreadProps(__spreadValues({}, value), { id: void 0 }) : void 0,
        onSubmited: () => closeDialog(),
        onCancel: () => closeDialog()
      }))
    })
  });
};
var i18n2 = [
  "Bo.Translation.Edit.Dialog.title"
];
var TranslationEdit_default = TranslationEdit;
export {
  TranslationEdit_default as default
};
//# sourceMappingURL=TranslationEdit-ZBTXJOQ2.js.map
