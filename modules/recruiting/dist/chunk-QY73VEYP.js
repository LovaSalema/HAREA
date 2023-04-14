import 'react'
// src/views/CV/hooks/useStateCvItems.tsx
import { useMemo } from "react";

// src/views/CV/hooks/useDescriptorsCvStateQuery.tsx
import { useGraphqlQuery } from "@mzara/component";

// src/views/CV/query/DescriptorsCvStateQuery.tsx
var DescriptorsCvStateQuery = class {
  constructor(variables) {
    this.queryKey = "App.Harea.RecruitingCuriculumVitaeDetailsQuery.DescriptorCvState";
    this.gql = `
    query descriptorsCvState ($tp: String){
        descriptors (filter:{data:{tp: $tp}}){total data{
          id value descriptorKey}}
        }
 `;
    this.variables = variables;
  }
  mapFn(data) {
    return data.descriptor;
  }
};

// src/views/CV/hooks/useDescriptorsCvStateQuery.tsx
var useDescriptorsCvStateQuery = (tp, suspense) => {
  return useGraphqlQuery(new DescriptorsCvStateQuery({ tp }), { enabled: tp !== void 0, suspense });
};

// src/views/CV/hooks/useStateCvItems.tsx
var useStateCvItems = () => {
  const { data } = useDescriptorsCvStateQuery("RECRUITING_CV_STATE", true);
  return useMemo(() => {
    const CvState = [
      ...data.descriptors.data,
      data.descriptors.data[0].label = "Nouveau",
      data.descriptors.data[1].label = "En cours de test",
      data.descriptors.data[2].label = "Entretient",
      data.descriptors.data[3].label = "R\xE9jet\xE9"
    ];
    return [CvState[0], CvState[1], CvState[2], CvState[3]];
  }, []);
};

export {
  useStateCvItems
};
//# sourceMappingURL=chunk-QY73VEYP.js.map
