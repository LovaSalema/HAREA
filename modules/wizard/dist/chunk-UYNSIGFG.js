import 'react'
// src/hooks/useWizardDetailsQuery.ts
import { useGraphqlQuery } from "@mzara/component";

// src/queries/WizardDetailsQuery.ts
var WizardDetailsQuery = class {
  constructor(variables) {
    this.queryKey = "App.Bo.WizardDetailsQuery.Details";
    this.gql = `
        query WizardDetailsQuery(
                $id: Float
            ) {
            wizard (filter: { id: $id }) {
                id wizardKey type title value comment
                tags { id value }
            }
        }
    `;
    this.variables = variables;
  }
  mapFn(data) {
    return data.wizard;
  }
};

// src/hooks/useWizardDetailsQuery.ts
var useWizardDetailsQuery = (id, suspense) => {
  return useGraphqlQuery(new WizardDetailsQuery({ id }), { enabled: id !== void 0, suspense });
};

export {
  useWizardDetailsQuery
};
//# sourceMappingURL=chunk-UYNSIGFG.js.map
