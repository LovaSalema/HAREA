import 'react'
import "./chunk-MT53WDPF.js";

// src/index.tsx
import "@mzara/control-list-designer/dist/main.css";
import "@mzara/control-list-designer/dist/index.css";

// src/WizardNodeRoutes.tsx
import React3 from "react";

// src/views/create/WizardNodeEditRoute.tsx
import React from "react";
import { jsx } from "react/jsx-runtime";
var WizardEdit = React.lazy(() => import("./WizardEdit-TEWERDC2.js"));
var WizardNodeEditRoute = [
  {
    path: "create",
    title: "Bo.Wizard.Create.title",
    element: /* @__PURE__ */ jsx(WizardEdit, {})
  },
  {
    path: "edit/:id",
    title: "Bo.Wizard.Edit.title",
    element: /* @__PURE__ */ jsx(WizardEdit, {})
  },
  {
    path: "clone/:id",
    title: "Bo.Wizard.Clone.title",
    element: /* @__PURE__ */ jsx(WizardEdit, {
      clone: true
    })
  }
];

// src/views/details/WizardNodeDetailsRoute.tsx
import React2 from "react";

// src/views/details/views/params/containers/WizardNodeParams.tsx
import { useParams } from "react-router-dom";
import { Wizard } from "@mzara/wizard";
import { jsx as jsx2 } from "react/jsx-runtime";
var WizardNodeParams = () => {
  const { id } = useParams();
  return /* @__PURE__ */ jsx2(Wizard, {
    wizardKey: "Generic.Wizard.Node.Params.Wizard",
    id: parseInt(id),
    layout: "PARAMS"
  });
};
var WizardNodeParams_default = WizardNodeParams;

// src/views/details/WizardNodeDetailsRoute.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
var WizardNodeDetails = React2.lazy(() => import("./WizardNodeDetails-FVZ6W5HK.js"));
var WizardNodeDetailsAbout = React2.lazy(() => import("./WizardNodeDetailsAbout-QMHYH56D.js"));
var WizardNodeDetailsDesigner = React2.lazy(() => import("./WizardNodeDetailsDesigner-YXZCM7LN.js"));
var WizardNodeDetailsTesting = React2.lazy(() => import("./WizardNodeDetailsTesting-JIJV5DMH.js"));
var WizardNodeDetailsRoute = [
  {
    path: ":id",
    title: "",
    element: /* @__PURE__ */ jsx3(WizardNodeDetails, {}),
    children: [
      {
        path: "about",
        title: "std_about",
        element: /* @__PURE__ */ jsx3(WizardNodeDetailsAbout, {})
      },
      {
        path: "designer",
        title: "std_designer",
        element: /* @__PURE__ */ jsx3(WizardNodeDetailsDesigner, {})
      },
      {
        path: "test",
        title: "std_test",
        element: /* @__PURE__ */ jsx3(WizardNodeDetailsTesting, {})
      },
      {
        path: "params",
        title: "std_params",
        element: /* @__PURE__ */ jsx3(WizardNodeParams_default, {})
      }
    ]
  }
];

// src/WizardNodeRoutes.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
var WizardNode = React3.lazy(() => import("./WizardNode-N5CM64Y2.js"));
var WizardNodeDetails2 = React3.lazy(() => import("./WizardNodeDetails-FVZ6W5HK.js"));
var WizardNodeRoutes = [
  {
    path: "wizard-node",
    title: "Bo.WizardNode.title",
    element: /* @__PURE__ */ jsx4(WizardNode, {}),
    children: [
      ...WizardNodeEditRoute
    ]
  },
  {
    path: "wizard-node",
    title: "Bo.WizardNode.title",
    children: WizardNodeDetailsRoute
  }
];
export {
  WizardNodeRoutes
};
//# sourceMappingURL=index.js.map
