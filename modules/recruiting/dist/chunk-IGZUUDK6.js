import 'react'
// src/views/publication-details/hooks/useRecruitingAdvertsDetailsQuery.ts
import { useGraphqlQuery } from "@mzara/component";

// src/views/publication-details/query/RecruitingAdvertsDetailsQuery.ts
var RecruitingAdvertsDetailsQuery = class {
  constructor(variables) {
    this.queryKey = "App.Harea.RecruitingAdvertsDetailsQuery.Details";
    this.gql = `
    query recruitingAdvertsDetails($id: Float){
        recruitingAdvert(filter: {id: $id}){
         id title description dateEnd tags{value color} createdAt cvs{id name state{value}} images{id}
        }
    }
 `;
    this.variables = variables;
  }
  mapFn(data) {
    return data.recruitingAdvert;
  }
};

// src/views/publication-details/hooks/useRecruitingAdvertsDetailsQuery.ts
var useRecruitingAdvertsDetailsQuery = (id, suspense) => {
  return useGraphqlQuery(new RecruitingAdvertsDetailsQuery({ id }), { enabled: id !== void 0, suspense });
};

export {
  useRecruitingAdvertsDetailsQuery
};
//# sourceMappingURL=chunk-IGZUUDK6.js.map
