import 'react'
import {
  useWizardNodeDetailsQuery
} from "./chunk-EFTU5ZYV.js";
import "./chunk-MT53WDPF.js";

// src/views/details/views/designer/containers/WizardNodeDetailsDesigner.tsx
import { Box, ButtonSubmit, RightSidebar, useGraphqlMutation, useTranslations } from "@mzara/component";
import { useParams } from "react-router-dom";
import _ from "lodash";
import { ControlListDesigner, ControlListDesignerProperties, useControlListDesignerValueState } from "@mzara/control-list-designer";
import { useEffect, useMemo, useState } from "react";

// src/views/details/views/designer/queries/WizardNodeMutation.ts
var WIZARD_NODE_MUTATION = `
mutation ($data: JSONObject) {
    saveWizardNode (data: { data: $data }){ id }
}
`;

// src/views/details/views/designer/containers/WizardNodeDetailsDesigner.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var WizardNodeDetailsDesigner = () => {
  const [
    SAVE,
    PROPERTIES
  ] = useTranslations(i18n);
  const { id } = useParams();
  const { data } = useWizardNodeDetailsQuery(parseInt(id), true);
  const [dirty, setDirty] = useState(false);
  const [value] = useControlListDesignerValueState(id);
  const mutation = useGraphqlMutation(WIZARD_NODE_MUTATION);
  const defaultValue = useMemo(() => {
    const _val = JSON.parse(data.value || JSON.stringify(defaultForm));
    _val.data.nodeKey = data.nodeKey;
    return _val;
  }, [data]);
  useEffect(() => {
    if (value && !_.isEqual(defaultValue.data, value.data)) {
      setDirty(true);
    }
  }, [value]);
  const handleSaveClick = () => {
    mutation.mutate({
      data: {
        id: data.id,
        nodeKey: value.data.nodeKey,
        value: JSON.stringify(value)
      }
    }, {
      onSuccess: () => setDirty(false)
    });
  };
  return /* @__PURE__ */ jsxs("div", {
    className: "flex flex-col gap-3",
    children: [
      /* @__PURE__ */ jsx("div", {
        className: "flex",
        children: /* @__PURE__ */ jsx(ButtonSubmit, {
          className: "btn-primary ml-auto",
          startIcon: "fa-solid fa-save",
          label: SAVE,
          isSubmit: mutation.isLoading,
          onClick: handleSaveClick,
          disabled: !dirty
        })
      }),
      /* @__PURE__ */ jsx("div", {
        className: "max-w-xl w-full m-auto",
        children: /* @__PURE__ */ jsx(ControlListDesigner, {
          id,
          defaultValue
        })
      }),
      /* @__PURE__ */ jsx(RightSidebar, {
        className: "right-sidebar-absolute",
        children: /* @__PURE__ */ jsx(Box, {
          title: PROPERTIES,
          icon: "fa-solid fa-cog",
          className: "box-transparent box-shadow-none box-p-0",
          children: /* @__PURE__ */ jsx(ControlListDesignerProperties, {
            id
          })
        })
      })
    ]
  });
};
var i18n = [
  "std_save",
  "Bo.WizardNode.Details.ControlDesigner.Properties.title"
];
var defaultForm = {
  data: {
    title: "Titre",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
    forms: [],
    value: {},
    next: {
      label: "Suivant"
    },
    back: {
      label: "Pr\xE9c\xE9dent"
    }
  }
};
var WizardNodeDetailsDesigner_default = WizardNodeDetailsDesigner;
export {
  WizardNodeDetailsDesigner_default as default
};
//# sourceMappingURL=WizardNodeDetailsDesigner-YXZCM7LN.js.map
