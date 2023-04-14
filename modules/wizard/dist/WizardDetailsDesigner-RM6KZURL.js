import 'react'
import {
  useWizardNodeValueQuery,
  useWizardNodesMetadataQuery,
  useWizardSequentialDetailsValue
} from "./chunk-XMFLSIV7.js";
import {
  useWizardDetailsQuery
} from "./chunk-UYNSIGFG.js";
import "./chunk-QM6VBZSE.js";

// src/view/designer/containers/WizardDetailsDesigner.tsx
import { useTranslations as useTranslations3 } from "@mzara/component";
import { useParams as useParams3 } from "react-router-dom";

// src/view/designer/components/WizardFlowDesigner.tsx
import { Box, ButtonSubmit, useGraphqlMutation, useTranslations } from "@mzara/component";
import { Flow } from "@mzara/flow";
import _ from "lodash";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// src/view/designer/hooks/useWizardFlowDetailsValue.ts
import { FlowDefault } from "@mzara/flow";
import { useMemo } from "react";
var useWizardFlowDetailsValue = (id, suspense) => {
  const { data } = useWizardDetailsQuery(id, suspense);
  return useMemo(() => {
    return data.value ? JSON.parse(data.value) : FlowDefault;
  }, [data]);
};

// src/view/designer/hooks/useWizardFlowEdgeControl.ts
import { useStepControlListCondition } from "@mzara/control-list-designer";
var useWizardFlowEdgeControl = (variables) => {
  const conditionForm = useStepControlListCondition(variables || []);
  return [
    conditionForm
  ];
};

// src/view/designer/hooks/useWizardFlowNodeControl.ts
import { useMemo as useMemo2 } from "react";
var useWizardFlowNodeControl = () => {
  return useMemo2(() => {
    return [
      {
        type: "select",
        name: "nodeId",
        label: "Bo.Wizard.Designer.Flow.Edit.FormNode.label",
        GQLConfig: { refetchOnMount: true },
        GQLProps: {
          gql: `
                        query WizardNodesSelectQuery {
                            wizardNodes {
                                total
                                data {
                                    id title
                                }
                            }
                        }
                    `,
          labelProp: "title",
          valueProp: "id",
          rootProp: "wizardNodes.data"
        }
      }
    ];
  }, []);
};

// src/view/designer/components/WizardFlowDesigner.tsx
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var WizardFlowDesigner = (props) => {
  const [
    SAVE
  ] = useTranslations(i18n);
  const { id } = useParams();
  const flowNodeControl = useWizardFlowNodeControl();
  const flowEdgeControl = useWizardFlowEdgeControl([]);
  const defaultValue = useWizardFlowDetailsValue(parseInt(id), true);
  const [value, setValue] = useState();
  const mutation = useGraphqlMutation(WIZARD_MUTATION);
  const { invalidateQuery } = useWizardDetailsQuery(parseInt(id), true);
  useEffect(() => {
    if (!_.isEqual(defaultValue, value)) {
      setValue(defaultValue);
    }
  }, [defaultValue]);
  const handleSaveClick = () => {
    mutation.mutate({
      data: {
        id: parseInt(id),
        value: JSON.stringify(value)
      }
    }, {
      onSuccess: () => invalidateQuery()
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [
      /* @__PURE__ */ jsx("div", {
        className: "flex items-center justify-end",
        children: /* @__PURE__ */ jsx(ButtonSubmit, {
          className: "btn-primary",
          startIcon: "fa-solid fa-save",
          label: SAVE,
          disabled: mutation.isLoading || _.isEqual(defaultValue, value),
          onClick: handleSaveClick
        })
      }),
      /* @__PURE__ */ jsx(Box, {
        className: "h-[80vh] p-0",
        children: /* @__PURE__ */ jsx(Flow, {
          initialNodes: defaultValue.nodes,
          initialEdges: defaultValue.edges,
          nodeCustomProperties: flowNodeControl,
          edgeCustomProperties: flowEdgeControl,
          onChange: (nodes, edges) => setValue({ nodes, edges })
        })
      })
    ]
  });
};
var i18n = [
  "std_save"
];

// src/view/designer/components/WizardSequentialDesigner.tsx
import { Box as Box2, Button, ButtonSubmit as ButtonSubmit2, ControlList, Dialog, MainLogo, Menu, RightSidebar, useGraphqlMutation as useGraphqlMutation2, useTranslation, useTranslations as useTranslations2 } from "@mzara/component";
import { ControlListDesigner, ControlListDesignerProperties, useControlListDesignerValueState } from "@mzara/control-list-designer";
import _2 from "lodash";
import { useCallback, useEffect as useEffect2, useMemo as useMemo3, useState as useState2 } from "react";
import { useParams as useParams2 } from "react-router-dom";
import { Fragment as Fragment2, jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var WizardSequentialDesigner = (props) => {
  const [
    NEW,
    SAVE,
    CONFIRMATION,
    OK,
    CANCEL
  ] = useTranslations2(i18n2);
  const t = useTranslation();
  const { id } = useParams2();
  const [active, setActive] = useState2();
  const nodeIds = useWizardSequentialDetailsValue(parseInt(id), true);
  const [value, setValue] = useState2(nodeIds);
  const { data: wizards, isLoading: isWizardsloading, invalidateQuery: invalidateWizardQuery } = useWizardNodesMetadataQuery(value);
  const { data: wizardNodeDefaultValue, isLoading: isWizardNodeLoading, invalidateQuery: invalidateWizardNodeQuery } = useWizardNodeValueQuery(active);
  const wizardMutation = useGraphqlMutation2(WIZARD_MUTATION);
  const wizardNodeMutation = useGraphqlMutation2(WIZARD_NODE_MUTATION);
  const [nodeValue] = useControlListDesignerValueState(active == null ? void 0 : active.toString());
  const [removeDialog, setRemoveDialog] = useState2(false);
  useEffect2(() => {
    var _a;
    if (!active) {
      setActive((_a = wizards == null ? void 0 : wizards[0]) == null ? void 0 : _a.id);
    }
  }, [wizards]);
  const menus = useMemo3(() => {
    var _a;
    return [
      ...(_a = wizards || []) == null ? void 0 : _a.map((item) => ({
        label: t(item.valueTitle),
        value: item.id
      })),
      {
        label: NEW,
        startIcon: "fa-solid fa-plus",
        value: -1
      }
    ];
  }, [wizards]);
  const handleMenuClick = useCallback((item) => {
    setActive(item.value);
  }, []);
  const handleBeforeSubmit = useCallback((value2) => {
    if (value2.createNew !== true) {
      setValue((v) => [...v, value2.nodeId]);
      setActive(value2.nodeId);
      return false;
    }
    return value2;
  }, []);
  const handleSubmited = useCallback((value2) => {
    setValue((v) => [...v, value2.saveWizardNode.id]);
    setActive(value2.saveWizardNode.id);
  }, []);
  const handleSaveClick = () => {
    wizardMutation.mutate({
      data: {
        id: parseInt(id),
        value: JSON.stringify(value)
      }
    }, {
      onSuccess: () => invalidateWizardQuery()
    });
    wizardNodeMutation.mutate({
      data: {
        id: active,
        value: JSON.stringify(nodeValue)
      }
    }, {
      onSuccess: () => invalidateWizardNodeQuery()
    });
  };
  const handleRemoveConfirm = useCallback(() => {
    setValue((v) => v.filter((item) => item !== active));
    setActive(void 0);
    setRemoveDialog(false);
  }, [active]);
  const isWizardDirty = useMemo3(() => {
    return !_2.isEqual(value, nodeIds);
  }, [value, nodeIds]);
  const isWizardNodeDirty = useMemo3(() => {
    return !_2.isEqual(_2.omitBy(nodeValue, _2.isNil), wizardNodeDefaultValue);
  }, [nodeValue, wizardNodeDefaultValue]);
  return /* @__PURE__ */ jsxs2(Fragment2, {
    children: [
      /* @__PURE__ */ jsxs2("div", {
        className: "flex items-center justify-end",
        children: [
          /* @__PURE__ */ jsx2(Button, {
            startIcon: "fa-solid fa-times",
            label: "Retirer la formulaire",
            onClick: () => setRemoveDialog(true)
          }),
          /* @__PURE__ */ jsx2(ButtonSubmit2, {
            className: "btn-primary",
            startIcon: "fa-solid fa-save",
            label: SAVE,
            disabled: !isWizardDirty && !isWizardNodeDirty,
            isSubmit: wizardMutation.isLoading || wizardNodeMutation.isLoading,
            onClick: handleSaveClick
          })
        ]
      }),
      /* @__PURE__ */ jsxs2("div", {
        className: "flex gap-5",
        children: [
          /* @__PURE__ */ jsx2("div", {
            children: /* @__PURE__ */ jsx2(Box2, {
              className: "w-60 p-0",
              children: /* @__PURE__ */ jsx2(Menu, {
                items: menus,
                activeFn: (menu) => menu.value === active,
                onClick: handleMenuClick
              })
            })
          }),
          /* @__PURE__ */ jsxs2("div", {
            className: "flex flex-col gap-5 flex-1",
            children: [
              !isWizardNodeLoading && /* @__PURE__ */ jsxs2(Fragment2, {
                children: [
                  /* @__PURE__ */ jsx2("div", {
                    className: "max-w-xl w-full m-auto",
                    children: /* @__PURE__ */ jsx2(ControlListDesigner, {
                      id: active == null ? void 0 : active.toString(),
                      defaultValue: wizardNodeDefaultValue
                    })
                  }),
                  /* @__PURE__ */ jsx2(RightSidebar, {
                    className: "right-sidebar-absolute",
                    children: /* @__PURE__ */ jsx2(ControlListDesignerProperties, {
                      id: active == null ? void 0 : active.toString()
                    })
                  })
                ]
              }),
              (isWizardsloading || isWizardNodeLoading) && /* @__PURE__ */ jsx2(MainLogo, {})
            ]
          }),
          active === -1 && /* @__PURE__ */ jsx2(Dialog, {
            open: active === -1,
            onClose: () => {
              var _a;
              return setActive((_a = wizards[0]) == null ? void 0 : _a.id);
            },
            children: /* @__PURE__ */ jsx2(ControlList, {
              data: { forms: [] },
              nodeKey: "Generic.Wizard.Designer.Sequential.Import.Form",
              onBeforeSaving: handleBeforeSubmit,
              onSubmited: handleSubmited
            })
          }),
          removeDialog && /* @__PURE__ */ jsx2(Dialog, {
            open: removeDialog,
            title: CONFIRMATION,
            btnOk: { label: OK },
            btnCancel: { label: CANCEL },
            onConfirm: handleRemoveConfirm,
            onCancel: () => setRemoveDialog(false),
            onClose: () => setRemoveDialog(false)
          })
        ]
      })
    ]
  });
};
var WIZARD_NODE_MUTATION = `
mutation ($data: JSONObject) {
    saveWizardNode (data: { data: $data }){ id }
}
`;
var i18n2 = [
  "std_new",
  "std_save",
  "std_confirmation",
  "std_ok",
  "std_cancel"
];

// src/view/designer/containers/WizardDetailsDesigner.tsx
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var WizardDetailsDesigner = () => {
  const [
    SAVE
  ] = useTranslations3(i18n3);
  const { id } = useParams3();
  const { data } = useWizardDetailsQuery(parseInt(id), true);
  return /* @__PURE__ */ jsx3("div", {
    className: "flex flex-row w-full gap-4 mr-4",
    children: /* @__PURE__ */ jsxs3("div", {
      className: "flex flex-col gap-5 flex-1",
      children: [
        data.type === "FLOW" && /* @__PURE__ */ jsx3(WizardFlowDesigner, {}),
        data.type === "SEQUENTIAL" && /* @__PURE__ */ jsx3(WizardSequentialDesigner, {})
      ]
    })
  });
};
var WIZARD_MUTATION = `
    mutation SaveWizardDetails ($data: JSONObject) {
        saveWizard (data: { data: $data }) { id }
    }
`;
var i18n3 = [
  "std_save"
];
var WizardDetailsDesigner_default = WizardDetailsDesigner;
export {
  WIZARD_MUTATION,
  WizardDetailsDesigner_default as default
};
//# sourceMappingURL=WizardDetailsDesigner-RM6KZURL.js.map
