import 'react'
import {
  useUserOrganisationEditForm
} from "./chunk-RDLPIISI.js";
import {
  USER_ORGANISATION_LIST_ID
} from "./chunk-6KM7TXGD.js";
import "./chunk-MT53WDPF.js";

// src/views/organisation/containers/UserOrganisationEdit.tsx
import { Dialog, GenericSuspense, Step, useListGraphqlQuery, useTranslationRoute, useTranslations } from "@mzara/component";
import { useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { jsx } from "react/jsx-runtime";
var UserOrganisationEdit = (props) => {
  const [
    TITLE
  ] = useTranslations(i18n);
  const { id } = useParams();
  const translationRoute = useTranslationRoute();
  const steps = useUserOrganisationEditForm();
  const navigate = useNavigate();
  const { invalidateQuery } = useListGraphqlQuery(USER_ORGANISATION_LIST_ID);
  const closeDialog = useCallback(() => {
    navigate(-1, { replace: true });
    invalidateQuery();
  }, []);
  const handleStepFinished = (value) => {
    invalidateQuery();
    navigate(translationRoute(`/user/organisation/${value.id}`));
  };
  return /* @__PURE__ */ jsx(Dialog, {
    open: true,
    title: TITLE,
    onDismiss: () => closeDialog(),
    children: /* @__PURE__ */ jsx(GenericSuspense, {
      children: /* @__PURE__ */ jsx(Step, {
        steps,
        defaultValue: [{ id }, { id }],
        onStepFinished: handleStepFinished
      })
    })
  });
};
var i18n = [
  "Generic.UserOrganisation.Edit.Dialog.title"
];
var UserOrganisationEdit_default = UserOrganisationEdit;
export {
  UserOrganisationEdit_default as default
};
//# sourceMappingURL=UserOrganisationEdit-S7SB5CNO.js.map
