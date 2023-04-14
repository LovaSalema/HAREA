import 'react'
import {
  useWizardNodeValueQuery,
  useWizardNodesMetadataQuery,
  useWizardSequentialDetailsValue
} from "./chunk-XMFLSIV7.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-QM6VBZSE.js";

// src/hooks/useWizardQuery.ts
import { useGraphqlQuery } from "@mzara/component";

// src/queries/WizardQuery.ts
var WizardQuery = class {
  constructor(variables) {
    this.queryKey = "App.Bo.WizardQuery.Details";
    this.gql = `
        query WizardQuery(
                $wizardKey: String!
            ) {
            wizard (filter: { data: { wizardKey_equals: $wizardKey } }) {
                id type value
            }
        }
    `;
    this.variables = variables;
  }
  mapFn(data) {
    return data.wizard;
  }
};

// src/hooks/useWizardQuery.ts
var useWizardQuery = (wizardKey, suspense) => {
  return useGraphqlQuery(new WizardQuery({ wizardKey }), { enabled: wizardKey !== void 0, suspense });
};

// src/components/WizardFlow.tsx
import { Fragment, jsx } from "react/jsx-runtime";
var WizardFlow = (props) => {
  return /* @__PURE__ */ jsx(Fragment, {});
};

// src/components/WizardSequential.tsx
import { Box, ControlList, MainLogo, Menu, useControlListResultMapping, useTranslation } from "@mzara/component";
import _ from "lodash";
import { useCallback, useMemo, useState } from "react";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var WizardSequential = (_a) => {
  var _b = _a, { id, wizardId, defaultValue, layout } = _b, props = __objRest(_b, ["id", "wizardId", "defaultValue", "layout"]);
  var _a2;
  const t = useTranslation();
  const [value, setValue] = useState(defaultValue || []);
  const [index, setIndex] = useState(0);
  const nodeIds = useWizardSequentialDetailsValue(wizardId, true);
  const active = useMemo(() => nodeIds[index], [index]);
  const { data: wizards } = useWizardNodesMetadataQuery(nodeIds, true);
  const { data: wizardNodeControl, isLoading: isWizardNodeLoading } = useWizardNodeValueQuery(active);
  const mapResult = useControlListResultMapping((_a2 = wizardNodeControl == null ? void 0 : wizardNodeControl.data) == null ? void 0 : _a2.resultMapping);
  const isCreation = useMemo(() => layout === "CREATION", [layout]);
  const handleSubmited = (_value) => {
    var _a3;
    if (isCreation) {
      const nextVal = _.clone(value);
      nextVal[index] = _value;
      nextVal[index + 1] = mapResult(_value);
      setValue((v) => nextVal);
      if (index === nodeIds.length - 1) {
        (_a3 = props.onWizardFinished) == null ? void 0 : _a3.call(props, nextVal);
        return;
      }
      setIndex((v) => v + 1);
    }
  };
  const handleCancelClick = (value2) => {
    if (isCreation) {
      setValue((v) => {
        const val = _.clone(v);
        val[index] = value2;
        return val;
      });
      setIndex((v) => v - 1);
    }
  };
  const menus = useMemo(() => {
    var _a3;
    return (_a3 = wizards || []) == null ? void 0 : _a3.map((item) => ({
      label: t(item.valueTitle),
      value: item.id
    }));
  }, [wizards, t]);
  const handleMenuClick = useCallback((item) => {
    if (!isCreation) {
      const index2 = menus.findIndex((item1) => item1.value === item.value);
      setIndex(index2);
    }
  }, [isCreation, menus]);
  const nextDefaultValue = useMemo(() => {
    return value == null ? void 0 : value[index];
  }, [value, index]);
  return /* @__PURE__ */ jsxs("div", {
    className: `flex ${layout === "CREATION" ? "flex-col" : "flex-row"} gap-5`,
    children: [
      /* @__PURE__ */ jsx2("div", {
        children: /* @__PURE__ */ jsx2(Box, {
          className: "p-0 w-60",
          children: /* @__PURE__ */ jsx2(Menu, {
            type: layout === "CREATION" ? "HORIZONTAL" : "VERTICAL",
            items: menus,
            activeFn: (menu) => menu.value === active,
            onClick: handleMenuClick
          })
        })
      }),
      isWizardNodeLoading && /* @__PURE__ */ jsx2(MainLogo, {}),
      !isWizardNodeLoading && /* @__PURE__ */ jsx2(Box, {
        className: "flex-1",
        children: /* @__PURE__ */ jsx2(ControlList, __spreadProps(__spreadValues({}, wizardNodeControl), {
          data: __spreadProps(__spreadValues({
            hideBack: true
          }, wizardNodeControl.data), {
            graphQL: __spreadProps(__spreadValues({}, wizardNodeControl.data.graphQL), {
              entityId: id
            })
          }),
          defaultValue: nextDefaultValue,
          onSubmited: handleSubmited,
          onCancel: handleCancelClick
        }), `step-${index}`)
      })
    ]
  });
};

// src/components/Wizard.tsx
import { Fragment as Fragment2, jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var Wizard = (props) => {
  const { data: wizard } = useWizardQuery(props.wizardKey, true);
  return /* @__PURE__ */ jsxs2(Fragment2, {
    children: [
      wizard.type === "SEQUENTIAL" && /* @__PURE__ */ jsx3(WizardSequential, __spreadProps(__spreadValues({}, props), {
        wizardId: wizard.id
      })),
      wizard.type === "FLOW" && /* @__PURE__ */ jsx3(WizardFlow, {
        id: wizard.id
      })
    ]
  });
};

export {
  Wizard
};
//# sourceMappingURL=chunk-XSS5LABU.js.map
