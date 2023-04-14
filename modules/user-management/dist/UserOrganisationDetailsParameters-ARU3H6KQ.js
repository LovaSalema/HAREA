import 'react'
import {
  useUserOrganisationRoleFormValue
} from "./chunk-TRTEVNCF.js";
import {
  useUserOrganisationEditForm
} from "./chunk-RDLPIISI.js";
import {
  useUserOrganisationDetailsQuery
} from "./chunk-FMGK7GP5.js";
import "./chunk-MT53WDPF.js";

// src/views/organisation/views/parameters/containers/UserOrganisationDetailsParameters.tsx
import { Box, Step, useTranslations } from "@mzara/component";
import { useParams } from "react-router-dom";
import { jsx } from "react/jsx-runtime";
var UserOrganisationDetailsParameters = () => {
  const [
    PARAMS
  ] = useTranslations(i18n);
  const { id } = useParams();
  const { invalidateQuery } = useUserOrganisationDetailsQuery(parseInt(id), true);
  const steps = useUserOrganisationEditForm();
  const rolesValue = useUserOrganisationRoleFormValue(parseInt(id));
  return /* @__PURE__ */ jsx("div", {
    children: /* @__PURE__ */ jsx(Box, {
      title: PARAMS,
      className: "flex flex-col gap-3",
      children: /* @__PURE__ */ jsx(Step, {
        defaultValue: [
          { id },
          rolesValue
        ],
        steps,
        layout: "MENU",
        onStepSubmited: () => invalidateQuery()
      })
    })
  });
};
var UserOrganisationDetailsParameters_default = UserOrganisationDetailsParameters;
var i18n = [
  "std_params"
];
export {
  UserOrganisationDetailsParameters_default as default
};
//# sourceMappingURL=UserOrganisationDetailsParameters-ARU3H6KQ.js.map
