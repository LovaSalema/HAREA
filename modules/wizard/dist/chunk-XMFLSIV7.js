import 'react'
import {
  useWizardDetailsQuery
} from "./chunk-UYNSIGFG.js";

// src/hooks/useWizardNodeValueQuery.ts
import { useGraphqlQuery } from "@mzara/component";

// src/queries/WizardNodeValueQuery.ts
var WizardNodeValueQuery = class {
  constructor(variables) {
    this.queryKey = "App.Bo.WizardNodesValueQuery";
    this.gql = `
        query WizardNodesValueQuery($id: Float) {
            wizardNode (filter: { id: $id }) { value }
        }
    `;
    this.variables = variables;
  }
  mapFn(data) {
    return JSON.parse(data.wizardNode.value || "{}");
  }
};

// src/hooks/useWizardNodeValueQuery.ts
var useWizardNodeValueQuery = (id, suspense) => {
  return useGraphqlQuery(new WizardNodeValueQuery({ id }), { enabled: id !== void 0 && id !== -1, suspense });
};

// src/view/designer/hooks/useWizardSequentialDetailsValue.ts
import { useMemo } from "react";
var useWizardSequentialDetailsValue = (id, suspense) => {
  const { data } = useWizardDetailsQuery(id, suspense);
  return useMemo(() => {
    return data.value ? JSON.parse(data.value) : [];
  }, [data]);
};

// src/hooks/useWizardNodesMetadataQuery.ts
import { useGraphqlQuery as useGraphqlQuery2 } from "@mzara/component";

// src/queries/WizardNodesMetadataQuery.ts
var WizardNodesMetadataQuery = class {
  constructor(variables) {
    this.queryKey = "App.Bo.WizardNodesMetadataQuery";
    this.gql = `
        query WizardNodesMetadataQuery($ids: [Float]) {
            wizardNodes (filter: {
                data: {
                    id_among: $ids
                }
            }) {
                total
                data {
                    id nodeKey valueTitle
                }
            }
        }
    `;
    this.variables = variables;
  }
  mapFn(data) {
    return data.wizardNodes.data;
  }
};

// src/hooks/useWizardNodesMetadataQuery.ts
var useWizardNodesMetadataQuery = (ids, suspense) => {
  return useGraphqlQuery2(new WizardNodesMetadataQuery({ ids }), { enabled: ids !== void 0, suspense });
};

export {
  useWizardNodeValueQuery,
  useWizardSequentialDetailsValue,
  useWizardNodesMetadataQuery
};
//# sourceMappingURL=chunk-XMFLSIV7.js.map
