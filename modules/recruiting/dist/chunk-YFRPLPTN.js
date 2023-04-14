import 'react'
// src/views/template-details/views/about/hooks/useEvaluationTemplateDetailsQuery.ts
import { useGraphqlQuery } from "@mzara/component";

// src/views/template-details/views/about/queries/EvaluationTemplateDetailsQuery.ts
var EvaluationTemplateDetailsQuery = class {
  constructor(variables) {
    this.queryKey = "App.Harea.EvaluationTemplateDetailsQuery";
    this.gql = `
        query EvaluationTemplateDetails($id: Float){
            evaluationTemplate(filter: {id: $id}){
                id title description isPublic tags{value color} evaluations{
                    id
                }
            }
        }
    `;
    this.variables = variables;
  }
  mapFn(data) {
    return data.evaluationTemplate;
  }
};

// src/views/template-details/views/about/hooks/useEvaluationTemplateDetailsQuery.ts
var useEvaluationTemplateDetailsQuery = (id, suspense) => {
  return useGraphqlQuery(new EvaluationTemplateDetailsQuery({ id }), { enabled: id !== void 0, suspense });
};

export {
  useEvaluationTemplateDetailsQuery
};
//# sourceMappingURL=chunk-YFRPLPTN.js.map
