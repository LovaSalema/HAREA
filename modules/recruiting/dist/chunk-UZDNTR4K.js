import 'react'
import {
  Badge
} from "./chunk-UDGGNIU2.js";

// src/views/template/containers/TemplateContainer.tsx
import { Box, BreadCrumb, Button, GenericSuspense, List, RightSidebar, useTranslationRoute as useTranslationRoute2, useUrlParamsEncode, useUrlParamsValue } from "@mzara/component";
import { Link as Link2, Outlet } from "react-router-dom";

// src/views/template/components/EvaluationTemplateListItem.tsx
import {
  Chip,
  IconButton,
  Tooltip,
  useTranslationRoute
} from "@mzara/component";
import _ from "lodash";
import { Link } from "react-router-dom";
import { jsx, jsxs } from "react/jsx-runtime";
var EvaluationTemplateListItem = ({
  template
}) => {
  var _a, _b;
  const t = useTranslationRoute();
  return /* @__PURE__ */ jsxs("div", {
    className: "flex justify-between items-center py-3 pb-5 border-b w-full",
    children: [
      /* @__PURE__ */ jsxs("div", {
        className: "flex flex-col gap-3 ",
        children: [
          /* @__PURE__ */ jsxs("div", {
            className: "flex flex-col",
            children: [
              /* @__PURE__ */ jsxs("div", {
                className: "flex items-center gap-5",
                children: [
                  /* @__PURE__ */ jsx(Link, {
                    to: t(`recruiting/template/${template.id}/about`),
                    children: /* @__PURE__ */ jsx("h4", {
                      className: "font-bold sm:text-lg text-base",
                      children: template == null ? void 0 : template.title
                    })
                  }),
                  (template == null ? void 0 : template.isPublic) && /* @__PURE__ */ jsx(Badge, {
                    label: "Public",
                    color: "var(--primary)"
                  }),
                  /* @__PURE__ */ jsx("div", {
                    className: "text-xs rounded-full px-2 py-1 bg-[#ECECEC]",
                    children: /* @__PURE__ */ jsx(Tooltip, {
                      text: "Nombre d'utlisations",
                      trigger: "hover",
                      placement: "bottom-end",
                      children: /* @__PURE__ */ jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [
                          /* @__PURE__ */ jsx("i", {
                            className: "fa-solid fa-users"
                          }),
                          /* @__PURE__ */ jsx("span", {
                            children: (_a = template == null ? void 0 : template.evaluations) == null ? void 0 : _a.length
                          })
                        ]
                      })
                    })
                  })
                ]
              }),
              /* @__PURE__ */ jsx("span", {
                className: "text-sm",
                children: template == null ? void 0 : template.description
              })
            ]
          }),
          !_.isEmpty(template == null ? void 0 : template.tags) && /* @__PURE__ */ jsx("div", {
            className: "flex items-center gap-3",
            children: (_b = template == null ? void 0 : template.tags) == null ? void 0 : _b.map((tag) => /* @__PURE__ */ jsx(Chip, {
              label: tag == null ? void 0 : tag.value,
              color: tag == null ? void 0 : tag.color,
              className: "px-2 text-xs rounded-full"
            }))
          })
        ]
      }),
      /* @__PURE__ */ jsx(Link, {
        to: t(`recruiting/template/${template.id}/about`),
        children: /* @__PURE__ */ jsx(IconButton, {
          icon: "fa-solid fa-angle-right"
        })
      })
    ]
  });
};

// src/views/template/hooks/useTemplateBreadCrumb.ts
var useTemplateBreadCrumb = () => {
  return [
    {
      label: "Home"
    },
    {
      label: "Evaluation"
    },
    {
      label: "Template"
    }
  ];
};

// src/views/template/queries/EvaluationTemplateListQuery.ts
var EvaluationTemplateListQuery = class {
  constructor(variables) {
    this.queryKey = "App.Harea.Evalutation.EvalutionTemplateListQuery";
    this.gql = `
        query EvaluationTemplateListQuery(
            $pageSize: Float,
            $page: Float,
            $data: JSONObject
        ){
            evaluationTemplates(filter: {
                data: $data,
                pageSize: $pageSize,
                page: $page
            }) {
                total
                data {
                    id title description isPublic tags{id value color} evaluations{id}
                }
            }
        }
    `;
    this.variables = variables;
  }
  mapFn(data) {
    return {
      total: data.evaluationTemplates.total,
      data: data.evaluationTemplates.data
    };
  }
};

// src/views/template/containers/TemplateContainer.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var TemplateContainer = () => {
  const breadCrumbItems = useTemplateBreadCrumb();
  const urlParams = useUrlParamsValue();
  const encodeUrl = useUrlParamsEncode();
  const t = useTranslationRoute2();
  return /* @__PURE__ */ jsxs2("div", {
    className: "flex h-max justify-center gap-5 w-full",
    children: [
      /* @__PURE__ */ jsxs2("section", {
        className: "sm:py-3 py-1 flex flex-col gap-5 box-body-background flex-1",
        children: [
          /* @__PURE__ */ jsxs2("div", {
            className: "flex items-center justify-between",
            children: [
              /* @__PURE__ */ jsx2("h4", {
                className: "font-semibold",
                children: "Template"
              }),
              /* @__PURE__ */ jsx2(Link2, {
                to: t(`recruiting/template/create?${encodeUrl(urlParams)}`),
                children: /* @__PURE__ */ jsx2(Button, {
                  label: "Ajouter",
                  startIcon: "fa-solid fa-plus",
                  className: "button-bg-primary flex items-center gap-1 button-rounded-full text-white"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsx2(BreadCrumb, {
            items: breadCrumbItems.reverse()
          }),
          /* @__PURE__ */ jsx2(Box, {
            title: "Liste des templates",
            children: /* @__PURE__ */ jsx2(List, {
              search: false,
              selection: false,
              id: EVALUATION_TEMPLATE_LIST,
              GQLRequest: EvaluationTemplateListQuery,
              defaultFilter: {
                pageSize: 10,
                page: 0
              },
              onRenderRow: (row, index) => /* @__PURE__ */ jsx2(EvaluationTemplateListItem, {
                template: row
              }, index)
            })
          })
        ]
      }),
      /* @__PURE__ */ jsx2(RightSidebar, {}),
      /* @__PURE__ */ jsx2(GenericSuspense, {
        children: /* @__PURE__ */ jsx2(Outlet, {})
      })
    ]
  });
};
var EVALUATION_TEMPLATE_LIST = "Evaluation.Template.List";
var TemplateContainer_default = TemplateContainer;

export {
  EVALUATION_TEMPLATE_LIST,
  TemplateContainer_default
};
//# sourceMappingURL=chunk-UZDNTR4K.js.map
