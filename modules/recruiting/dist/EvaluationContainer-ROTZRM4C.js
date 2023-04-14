import 'react'
import {
  useCuriculumVitaeDetailsQuery
} from "./chunk-PL5ZRXZG.js";
import "./chunk-QM6VBZSE.js";

// src/views/CV-details/views/evaluations/container/EvaluationContainer.tsx
import { Button, ControlList, Dialog, useTranslationRoute } from "@mzara/component";
import { useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

// src/views/CV-details/views/evaluations/hooks/useEvaluationsQuery.ts
import { useGraphqlQuery } from "@mzara/component";

// src/views/CV-details/views/evaluations/queries/EvaluationsQuery.ts
var EvaluationsQuery = class {
  constructor(variables) {
    this.queryKey = "App.Harea.EvaluationsQuery";
    this.gql = `
        query EvaluationQuery($email: String){
            evaluations(filter: {data: {email: $email}}){
                total
                data{
                    id evaluationTemplate {id title}
                }
            }
        }
    `;
    this.variables = variables;
  }
  mapFn(data) {
    return {
      total: data.evaluations.total,
      data: data.evaluations.data
    };
  }
};

// src/views/CV-details/views/evaluations/hooks/useEvaluationsQuery.ts
var useEvaluationQuery = (email, suspense) => {
  return useGraphqlQuery(new EvaluationsQuery({ email }), { enabled: email !== void 0, suspense });
};

// src/views/CV-details/views/evaluations/container/EvaluationContainer.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var TestResult = () => {
  var _a;
  const { id } = useParams();
  const { data } = useCuriculumVitaeDetailsQuery(parseInt(id), true);
  const { data: evaluationData, invalidateQuery } = useEvaluationQuery(
    data == null ? void 0 : data.email,
    true
  );
  const [open, setOpen] = useState(false);
  const closeDialog = () => {
    invalidateQuery();
    setOpen(false);
  };
  const t = useTranslationRoute();
  return /* @__PURE__ */ jsxs("div", {
    className: "flex flex-col gap-1",
    children: [
      /* @__PURE__ */ jsxs("div", {
        className: "flex items-center gap-2 flex-wrap",
        children: [
          /* @__PURE__ */ jsx(Button, {
            label: "Envoyer une \xE9valuation",
            startIcon: "fa-solid fa-plus",
            className: "button-rounded-full button-bg-primary text-white flex items-center",
            onClick: () => setOpen(true)
          }),
          (_a = evaluationData == null ? void 0 : evaluationData.data) == null ? void 0 : _a.map((evaluation) => {
            var _a2;
            return /* @__PURE__ */ jsx(Link, {
              to: t(`recruiting/cv/${id}/evaluations/${evaluation == null ? void 0 : evaluation.id}/results`),
              children: /* @__PURE__ */ jsx(Button, {
                label: (_a2 = evaluation == null ? void 0 : evaluation.evaluationTemplate) == null ? void 0 : _a2.title,
                startIcon: "fa-solid fa-file-lines",
                className: "button-rounded-full button-bg-grey flex items-center"
              })
            });
          })
        ]
      }),
      /* @__PURE__ */ jsx(Outlet, {}),
      /* @__PURE__ */ jsx(Dialog, {
        open,
        onDismiss: () => closeDialog(),
        children: /* @__PURE__ */ jsx(ControlList, {
          nodeKey: "Harea.CV.Details.SendEvaluationForm",
          data: { forms: [] },
          value: {
            email: data == null ? void 0 : data.email,
            evaluationTemplate: { id: 2 }
          },
          onSubmited: () => closeDialog()
        })
      })
    ]
  });
};
var EvaluationContainer_default = TestResult;
export {
  EvaluationContainer_default as default
};
//# sourceMappingURL=EvaluationContainer-ROTZRM4C.js.map
