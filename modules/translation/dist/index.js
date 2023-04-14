import 'react'
import "./chunk-MT53WDPF.js";

// src/views/edit/TranslationEditRoutes.tsx
import React from "react";
import { jsx } from "react/jsx-runtime";
var TranslationEdit = React.lazy(() => import("./TranslationEdit-ZBTXJOQ2.js"));
var TranslationEditRoutes = [
  {
    path: "create",
    title: "Bo.Translation.Edit.title",
    element: /* @__PURE__ */ jsx(TranslationEdit, {})
  },
  {
    path: "edit/:id",
    title: "Bo.Translation.Edit.title",
    element: /* @__PURE__ */ jsx(TranslationEdit, {})
  },
  {
    path: "clone/:id",
    title: "Bo.Translation.Edit.title",
    element: /* @__PURE__ */ jsx(TranslationEdit, {
      clone: true
    })
  }
];

// src/TranslationRoutes.tsx
import React2 from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
var Translation = React2.lazy(() => import("./Translation-CG4HSWW5.js"));
var TranslationRoutes = [
  {
    path: "translation",
    title: "Bo.Translation.title",
    element: /* @__PURE__ */ jsx2(Translation, {}),
    children: [
      ...TranslationEditRoutes
    ]
  }
];
export {
  TranslationRoutes
};
//# sourceMappingURL=index.js.map
