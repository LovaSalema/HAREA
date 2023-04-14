import 'react'
// src/views/CV/hooks/useCuriculumVitaeDetailsQuery.tsx
import { useGraphqlQuery } from "@mzara/component";

// src/views/CV/query/RecruitingCuriculumVitaeDetailsQuery.tsx
var RecruitingCuriculumVitaeDetailsQuery = class {
  constructor(variables) {
    this.queryKey = "App.Harea.RecruitingCuriculumVitaeDetailsQuery.Details";
    this.gql = `
    query recruitingCuriculumVitaes($id: Float){
        recruitingCuriculumVitae(filter: {id : $id}) {
          id name phone email adress school degree comment state{value} files {id name value}
        }
      
      }
 `;
    this.variables = variables;
  }
  mapFn(data) {
    return data.recruitingCuriculumVitae;
  }
};

// src/views/CV/hooks/useCuriculumVitaeDetailsQuery.tsx
var useCuriculumVitaeDetailsQuery = (id, suspense) => {
  return useGraphqlQuery(new RecruitingCuriculumVitaeDetailsQuery({ id }), { enabled: id !== void 0, suspense });
};

export {
  useCuriculumVitaeDetailsQuery
};
//# sourceMappingURL=chunk-PL5ZRXZG.js.map
