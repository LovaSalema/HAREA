import 'react'
import {
  EVALUATION_TEMPLATE_LIST
} from "./chunk-UZDNTR4K.js";
import "./chunk-UDGGNIU2.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-QM6VBZSE.js";

// src/views/template/views/create/containers/CreateEvaluationTemplateContainer.tsx
import { ControlList, Dialog, useListGraphqlQuery, useTranslationRoute, useUrlParamsEncode, useUrlParamsValue } from "@mzara/component";
import { useNavigate } from "react-router-dom";

// src/views/template/views/create/hooks/useCreateEvaluationTemplateForm.ts
var useCreateEvaluationTemplateForm = () => {
  return {
    data: {
      forms: [
        {
          type: "text",
          name: "title",
          label: "Titre"
        },
        {
          type: "textarea",
          name: "description",
          label: "Description"
        },
        {
          type: "lov-select",
          multiple: true,
          name: "tags",
          label: "Tags"
        }
      ],
      value: {},
      next: {
        label: "Sauvegarder"
      },
      back: {
        label: "Annuler"
      },
      graphQL: {
        entity: "evaluationTemplate"
      }
    },
    id: "Evaluation-Template-add-form"
  };
};

// src/views/template/views/create/containers/CreateEvaluationTemplateContainer.tsx
import { jsx } from "react/jsx-runtime";
var CreateEvaluationTemplateContainer = () => {
  const controlAdd = useCreateEvaluationTemplateForm();
  const { invalidateQuery } = useListGraphqlQuery(EVALUATION_TEMPLATE_LIST);
  const navigate = useNavigate();
  const t = useTranslationRoute();
  const urlParams = useUrlParamsValue();
  const encodeUrl = useUrlParamsEncode();
  const closeDialog = () => {
    invalidateQuery();
    navigate(t(`recruiting/template?${encodeUrl(urlParams)}`));
  };
  return /* @__PURE__ */ jsx(Dialog, {
    open: true,
    onDismiss: () => closeDialog(),
    title: "Ajouter un template",
    children: /* @__PURE__ */ jsx(ControlList, __spreadProps(__spreadValues({}, controlAdd), {
      onSubmited: () => closeDialog()
    }))
  });
};
var CreateEvaluationTemplateContainer_default = CreateEvaluationTemplateContainer;
export {
  CreateEvaluationTemplateContainer_default as default
};
//# sourceMappingURL=CreateEvaluationTemplateContainer-VPVPPHO4.js.map
