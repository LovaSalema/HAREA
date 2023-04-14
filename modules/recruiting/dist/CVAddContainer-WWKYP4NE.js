import 'react'
import {
  CURRICULUM_LIST_ID
} from "./chunk-YFGHKRWF.js";
import "./chunk-QY73VEYP.js";
import "./chunk-IOBJJFIT.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-QM6VBZSE.js";

// src/views/CV/views/edit/containers/CVAddContainer.tsx
import {
  ControlList,
  Dialog,
  GenericSuspense,
  useListGraphqlQuery,
  useTranslationRoute,
  useUrlParamsEncode,
  useUrlParamsValue
} from "@mzara/component";
import { useNavigate } from "react-router-dom";

// src/views/CV/views/edit/hooks/useCurriculumVitaeForm.ts
var useCurriculumVitaeForm = () => {
  return {
    data: {
      forms: [
        {
          type: "profile-picture",
          name: "profilePicture",
          label: "Photo de profil"
        },
        {
          type: "text",
          name: "name",
          label: "Nom",
          required: true
        },
        {
          type: "text",
          name: "phone",
          label: "T\xE9l\xE9phone",
          required: true
        },
        {
          type: "text",
          name: "email",
          label: "Email",
          required: true
        },
        {
          type: "text",
          name: "adress",
          label: "Adresse"
        },
        {
          type: "text",
          name: "school",
          label: "Lyc\xE9e ou Universit\xE9"
        },
        {
          type: "text",
          name: "degree",
          label: "Dipl\xF4me"
        },
        {
          type: "textarea",
          name: "comment",
          label: "Commentaire"
        },
        {
          type: "select",
          name: "recrutingAdvert",
          label: "Annonce",
          GQLProps: {
            gql,
            labelProp: "title",
            valueProp: "id",
            rootProp: "recruitingAdverts.data"
          },
          valueObject: true
        }
      ],
      value: {},
      next: {
        label: "Ajouter un CV"
      },
      back: {
        label: "Annuler le CV"
      },
      graphQL: {
        entity: "recruitingCuriculumVitae"
      }
    },
    id: "CV-add-recruitingAdvert-form"
  };
};
var gql = `
    query RecruitingAdvertsSelectQuery{
        recruitingAdverts{
            total 
            data {
                id title
            }
        }
    }
`;

// src/views/CV/views/edit/containers/CVAddContainer.tsx
import { jsx } from "react/jsx-runtime";
var CVAddContainer = () => {
  const addControl = useCurriculumVitaeForm();
  const { invalidateQuery } = useListGraphqlQuery(CURRICULUM_LIST_ID);
  const urlParams = useUrlParamsValue();
  const encodeUrl = useUrlParamsEncode();
  const t = useTranslationRoute();
  const navigate = useNavigate();
  const closeDialog = () => {
    invalidateQuery();
    navigate(t(`recruiting/cv?${encodeUrl(urlParams)}`));
  };
  return /* @__PURE__ */ jsx(Dialog, {
    open: true,
    title: "Ajouter un CV",
    onDismiss: () => closeDialog(),
    children: /* @__PURE__ */ jsx(GenericSuspense, {
      children: /* @__PURE__ */ jsx(ControlList, __spreadProps(__spreadValues({}, addControl), {
        onSubmited: () => closeDialog(),
        onCancel: () => closeDialog()
      }))
    })
  });
};
var CVAddContainer_default = CVAddContainer;
export {
  CVAddContainer_default as default
};
//# sourceMappingURL=CVAddContainer-WWKYP4NE.js.map
