import 'react'
// src/views/details/hooks/useWizardNodeDetailsQuery.ts
import { useGraphqlQuery } from "@mzara/component";

// src/views/details/queries/WizardNodeDetailsQuery.ts
var WizardNodeDetailsQuery = class {
  constructor(variables) {
    this.queryKey = "App.Bo.WizardNodeDetailsQuery.Details";
    this.gql = `
        query WizardNodeDetailsQuery(
                $id: Float
            ) {
                wizardNode (filter: { id: $id }) {
                id nodeKey title description value comment
            }
        }
    `;
    this.variables = variables;
  }
  mapFn(data) {
    return data.wizardNode;
  }
};

// src/views/details/hooks/useWizardNodeDetailsQuery.ts
var useWizardNodeDetailsQuery = (id, suspense) => {
  return useGraphqlQuery(new WizardNodeDetailsQuery({ id }), { enabled: id !== void 0, suspense });
};

export {
  useWizardNodeDetailsQuery
};
//# sourceMappingURL=chunk-EFTU5ZYV.js.map
