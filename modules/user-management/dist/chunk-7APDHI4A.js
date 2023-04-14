import 'react'
// src/views/user-details/views/about/hooks/useUserDetailsQuery.ts
import { useGraphqlQuery } from "@mzara/component";

// src/views/user-details/views/about/queries/UserDetailsQuery.ts
var UserDetailsQuery = class {
  constructor(variables) {
    this.queryKey = "App.Harea.UserDetailsQuery.Details";
    this.gql = `
        query($id: Float){
            user(filter: {id: $id}){
                id
                firstName
                lastName
                fullName
                email
                phone
                skype
                isDisabled
                profilePicture{id}
                recruitingContracts{id designation}
                sessionUsers{id active session{id plateform browser browserVersion}}
            }
        }
    `;
    this.variables = variables;
  }
  mapFn(data) {
    return data.user;
  }
};

// src/views/user-details/views/about/hooks/useUserDetailsQuery.ts
var useUserDetailsQuery = (id, suspense) => {
  return useGraphqlQuery(new UserDetailsQuery({ id }), { enabled: id !== void 0, suspense });
};

export {
  useUserDetailsQuery
};
//# sourceMappingURL=chunk-7APDHI4A.js.map
