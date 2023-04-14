import 'react'
// src/views/organisation/hooks/useUserOrganisationDetailsQuery.ts
import { useGraphqlQuery } from "@mzara/component";

// src/views/organisation/queries/UserOrganisationQuery.ts
var UserOrganisationDetailsQuery = class {
  constructor(variables) {
    this.queryKey = "App.Bo.UserOrganisationDetailsQuery.Details";
    this.gql = `
        query UserOrganisationDetailsQuery(
                $id: Float
            ) {
            userOrganisation (filter: { id: $id }) {
                id organisationKey designation userCount
                roles { id translationKey }
                groups { 
                    id groupKey designation comment userCount
                    users {
                        id userName fullName
                        groups { id designation  }
                    }
                }
                isEditable canUpdateRoles
            }
        }
    `;
    this.variables = variables;
  }
  mapFn(data) {
    return data.userOrganisation;
  }
};

// src/views/organisation/hooks/useUserOrganisationDetailsQuery.ts
var useUserOrganisationDetailsQuery = (id, suspense) => {
  return useGraphqlQuery(new UserOrganisationDetailsQuery({ data: { id } }), { enabled: id !== void 0, suspense });
};

export {
  useUserOrganisationDetailsQuery
};
//# sourceMappingURL=chunk-FMGK7GP5.js.map
