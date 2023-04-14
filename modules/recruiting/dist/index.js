import 'react'
import "./chunk-QM6VBZSE.js";

// src/RecruitingRoutes.tsx
import React19 from "react";

// src/views/publication/PublicationRoutes.tsx
import React from "react";
import { jsx } from "react/jsx-runtime";
var PublicationContainer = React.lazy(() => import("./PublicationContainer-BOCJBYB4.js"));
var ListCVAdverts = React.lazy(() => import("./ListCVAdverts-E2NHLVA5.js"));
var PublicationRoutes = [
  {
    path: "publication",
    title: "Harea.Recruiting.Publication.title",
    element: /* @__PURE__ */ jsx(PublicationContainer, {}),
    children: [
      {
        path: "viewer/:id",
        title: "Harea.Recruiting.Publication.Viewer.title",
        element: /* @__PURE__ */ jsx(ListCVAdverts, {})
      }
    ]
  }
];

// src/views/CV/CvRoutes.tsx
import React3 from "react";

// src/views/CV/views/edit/CVEditRoutes.tsx
import React2 from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
var CVAddContainer = React2.lazy(() => import("./CVAddContainer-WWKYP4NE.js"));
var CVEditRoutes = [
  {
    path: "create",
    title: "Harea.CV.List.Edit.title",
    element: /* @__PURE__ */ jsx2(CVAddContainer, {})
  }
];

// src/views/CV/CvRoutes.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
var CVListContainer = React3.lazy(() => import("./CVListContainer-5NJ7QU4F.js"));
var CvtRoutes = [
  {
    path: "cv",
    title: "Harea.CV.List.title",
    element: /* @__PURE__ */ jsx3(CVListContainer, {}),
    children: [
      ...CVEditRoutes
    ]
  }
];

// src/views/Contract/ContractRoutes.tsx
import React4 from "react";
import { jsx as jsx4 } from "react/jsx-runtime";
var ContractListContainer = React4.lazy(() => import("./ContractListContainer-QJLCATWG.js"));
var ContractRoutes = [
  {
    path: "contract",
    title: "Harea.Contract.list.title",
    element: /* @__PURE__ */ jsx4(ContractListContainer, {})
  }
];

// src/views/publication-details/PublicationDetailsRoutes.tsx
import React7 from "react";

// src/views/publication-details/views/about/AboutPublicationDetailsRoutes.tsx
import React5 from "react";
import { jsx as jsx5 } from "react/jsx-runtime";
var AboutRecruitingAdvert = React5.lazy(() => import("./AboutRecruitingAdvert-XTI3374I.js"));
var AboutPublicationDetailsRoutes = [
  {
    path: "about",
    title: "Harea.Recruiting.Publicattion.details",
    element: /* @__PURE__ */ jsx5(AboutRecruitingAdvert, {})
  }
];

// src/views/publication-details/views/cv/CvListPublicationRoutes.tsx
import React6 from "react";
import { jsx as jsx6 } from "react/jsx-runtime";
var CvListContainer = React6.lazy(() => import("./CvListContainer-CZZ7AYXC.js"));
var CvListPublicationRoutes = [
  {
    path: "cv",
    title: "Harea.Recruiting.Publicattion.cv",
    element: /* @__PURE__ */ jsx6(CvListContainer, {})
  }
];

// src/views/publication-details/PublicationDetailsRoutes.tsx
import { jsx as jsx7 } from "react/jsx-runtime";
var PublicationDetailsContainer = React7.lazy(() => import("./PuclicationDetailsContainer-EXJBP4OC.js"));
var PublicationDetailsRoutes = [
  {
    path: "publication/:id",
    title: "Harea.Recruiting.Publication.menu",
    element: /* @__PURE__ */ jsx7(PublicationDetailsContainer, {}),
    children: [
      ...AboutPublicationDetailsRoutes,
      ...CvListPublicationRoutes
    ]
  }
];

// src/views/template/TemplateRoutes.tsx
import React9 from "react";

// src/views/template/views/create/CreateEvaluationTemplateRoutes.tsx
import React8 from "react";
import { jsx as jsx8 } from "react/jsx-runtime";
var CreateEvaluationTemplateContainer = React8.lazy(() => import("./CreateEvaluationTemplateContainer-VPVPPHO4.js"));
var CreateEvaluationTemplateRoutes = [
  {
    path: "create",
    title: "App.Harea.Evaluation.Template.Create.title",
    element: /* @__PURE__ */ jsx8(CreateEvaluationTemplateContainer, {})
  }
];

// src/views/template/TemplateRoutes.tsx
import { jsx as jsx9 } from "react/jsx-runtime";
var TemplateContainer = React9.lazy(() => import("./TemplateContainer-4OF5PABO.js"));
var TemplateRoutes = [
  {
    path: "template",
    title: "Harea.Evaluation.Template.List.title",
    element: /* @__PURE__ */ jsx9(TemplateContainer, {}),
    children: [
      ...CreateEvaluationTemplateRoutes
    ]
  }
];

// src/views/template-details/TemplateDetailsRoutes.tsx
import React13 from "react";

// src/views/template-details/views/about/AboutTemplateDetailsRoutes.tsx
import React10 from "react";
import { jsx as jsx10 } from "react/jsx-runtime";
var AboutTemplateDetailsContainer = React10.lazy(() => import("./AboutTemplateDetailsContainer-N277AFET.js"));
var AboutTemplateDetailsRoutes = [
  {
    path: "about",
    title: "Harea.Evaluation.Template.Details.About.title",
    element: /* @__PURE__ */ jsx10(AboutTemplateDetailsContainer, {})
  }
];

// src/views/template-details/views/designer/DesignerTemplateDetailsRoutes.tsx
import React11 from "react";
import { jsx as jsx11 } from "react/jsx-runtime";
var DesignerTemplateDetailsContainer = React11.lazy(() => import("./DesignerTemplateDetailsContainer-PT6ZLWAU.js"));
var DesignerTemplateDetailsRoutes = [
  {
    path: "designer",
    title: "Harea.Evaluation.Template.Details.Designer.title",
    element: /* @__PURE__ */ jsx11(DesignerTemplateDetailsContainer, {})
  }
];

// src/views/template-details/views/params/ParamsTemplateDetailsRoutes.tsx
import React12 from "react";
import { jsx as jsx12 } from "react/jsx-runtime";
var ParamsTemplateDetailsContainer = React12.lazy(() => import("./ParamsTemplateDetailsContainer-2RKT52GS.js"));
var ParamsTemplateDetailsRoutes = [
  {
    path: "params",
    title: "Harea.Evaluation.Template.Details.Params.title",
    element: /* @__PURE__ */ jsx12(ParamsTemplateDetailsContainer, {})
  }
];

// src/views/template-details/TemplateDetailsRoutes.tsx
import { jsx as jsx13 } from "react/jsx-runtime";
var TemplateDetailsContainer = React13.lazy(() => import("./TemplateDetailsContainer-J2XVWSMW.js"));
var TemplateDetailsRoutes = [
  {
    path: "template/:id",
    title: "Harea.Evaluation.Template.Details.title",
    element: /* @__PURE__ */ jsx13(TemplateDetailsContainer, {}),
    children: [
      ...AboutTemplateDetailsRoutes,
      ...DesignerTemplateDetailsRoutes,
      ...ParamsTemplateDetailsRoutes
    ]
  }
];

// src/views/CV-details/CvDetailsRoutes.tsx
import React17 from "react";

// src/views/CV-details/views/details/DetailsRoutes.tsx
import React14 from "react";
import { jsx as jsx14 } from "react/jsx-runtime";
var DetailsContainer = React14.lazy(() => import("./DetailsContainer-VL7BL5FL.js"));
var DetailsRoutes = [
  {
    path: "details",
    title: "Generic.Auth.Cv.details.title",
    element: /* @__PURE__ */ jsx14(DetailsContainer, {})
  }
];

// src/views/CV-details/views/evaluations/EvaluationsRoutes.tsx
import React16 from "react";

// src/views/CV-details/views/evaluations/views/evaluation-results/EvaluationResultsRoutes.tsx
import React15 from "react";
import { jsx as jsx15 } from "react/jsx-runtime";
var EvaluationResultsContainer = React15.lazy(() => import("./EvaluationResultsContainer-4Z2RE4AC.js"));
var EvaluationResultsRoutes = [
  {
    path: ":idEvaluation/results",
    title: "Harea.CV.Details.Evaluations.Results.title",
    element: /* @__PURE__ */ jsx15(EvaluationResultsContainer, {})
  }
];

// src/views/CV-details/views/evaluations/EvaluationsRoutes.tsx
import { jsx as jsx16 } from "react/jsx-runtime";
var EvaluationContainer = React16.lazy(() => import("./EvaluationContainer-ROTZRM4C.js"));
var EvaluationsRoutes = [
  {
    path: "evaluations",
    title: "Generic.Auth.Cv.result.title",
    element: /* @__PURE__ */ jsx16(EvaluationContainer, {}),
    children: [
      ...EvaluationResultsRoutes
    ]
  }
];

// src/views/CV-details/CvDetailsRoutes.tsx
import { jsx as jsx17 } from "react/jsx-runtime";
var CvDetailsContainer = React17.lazy(() => import("./CvDetailsContainer-TK2QRDVO.js"));
var CvDetailsRoutes = [
  {
    path: "cv/:id",
    title: "Generic.Auth.Cv.title",
    element: /* @__PURE__ */ jsx17(CvDetailsContainer, {}),
    children: [
      ...EvaluationsRoutes,
      ...DetailsRoutes
    ]
  }
];

// src/views/Contract-details/ContractDetailsRoutes.tsx
import React18 from "react";
import { jsx as jsx18 } from "react/jsx-runtime";
var ContractDetailsContainer = React18.lazy(() => import("./ContractDetailsContainer-6JTTELBX.js"));
var ContractDetailsRoutes = [
  {
    path: "contract/:id",
    title: "Harea.Contract.details.title",
    element: /* @__PURE__ */ jsx18(ContractDetailsContainer, {})
  }
];

// src/RecruitingRoutes.tsx
import { jsx as jsx19 } from "react/jsx-runtime";
var AuthContainer = React19.lazy(() => import("./AuthContainer-NIIJV25B.js"));
var RecruitingRoutes = [
  {
    path: "recruiting",
    title: "Harea.Recruiting.Publication",
    element: /* @__PURE__ */ jsx19(AuthContainer, {}),
    children: [
      ...PublicationRoutes,
      ...PublicationDetailsRoutes,
      ...CvtRoutes,
      ...ContractRoutes,
      ...TemplateRoutes,
      ...TemplateDetailsRoutes,
      ...ContractDetailsRoutes,
      ...CvDetailsRoutes
    ]
  }
];
export {
  RecruitingRoutes
};
//# sourceMappingURL=index.js.map
