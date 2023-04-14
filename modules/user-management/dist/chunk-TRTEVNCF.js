import 'react'
import {
  useUserOrganisationDetailsQuery
} from "./chunk-FMGK7GP5.js";
import {
  __spreadValues
} from "./chunk-MT53WDPF.js";

// src/views/organisation/hooks/useUserOrganisationRoleFormValue.ts
import { useRuntimeEnv } from "@mzara/component";
import { useMemo } from "react";
var useUserOrganisationRoleFormValue = (id) => {
  const { runtimeEnv } = useRuntimeEnv();
  const { data } = useUserOrganisationDetailsQuery(id, true);
  const categories = useMemo(() => {
    return data.roles.reduce((all, item) => {
      if (!all.some((item1) => item1 === item.descriptorKey)) {
        all.push(item.descriptorKey);
      }
      return all;
    }, []);
  }, [data]);
  return useMemo(() => {
    return __spreadValues({
      id: data.id
    }, categories.reduce((all, category) => {
      all[category] = data.roles.map((item) => item.id);
      return all;
    }, {}));
  }, [categories]);
};

export {
  useUserOrganisationRoleFormValue
};
//# sourceMappingURL=chunk-TRTEVNCF.js.map
