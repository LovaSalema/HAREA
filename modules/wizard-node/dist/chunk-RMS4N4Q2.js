import 'react'
import {
  __spreadProps,
  __spreadValues
} from "./chunk-MT53WDPF.js";

// src/containers/WizardNode.tsx
import { BreadCrumb, Button, List, DateSpan, useUrlParamsValue as useUrlParamsValue2, useUrlParamsEncode as useUrlParamsEncode2, Dialog, useGraphqlDelete, useListGraphqlQuery, RightSidebar, GenericSuspense, useTranslations as useTranslations6, useTranslation, useTranslationRoute as useTranslationRoute3, Chip } from "@mzara/component";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

// src/hooks/useWizardNodeBreadCrumb.ts
import { useTranslationRoute, useTranslations } from "@mzara/component";
var useWizardNodeBreadCrumb = () => {
  const [
    HOME,
    TITLE
  ] = useTranslations(i18n);
  const url = useTranslationRoute();
  return [
    {
      label: HOME,
      link: url("")
    },
    {
      label: TITLE,
      className: "active"
    }
  ];
};
var i18n = [
  "std_home",
  "Bo.WizardNode.title"
];

// src/hooks/useWizardNodeListMenu.ts
import { useTranslationRoute as useTranslationRoute2, useTranslations as useTranslations2, useUrlParamsEncode, useUrlParamsValue } from "@mzara/component";
import { useMemo } from "react";
var useWizardNodeListMenu = () => {
  const [
    EDIT,
    CLONE,
    DELETE
  ] = useTranslations2(i18n2);
  const translatedRoute = useTranslationRoute2();
  const urlParams = useUrlParamsValue();
  const encodeUrl = useUrlParamsEncode();
  return useMemo(() => [
    {
      ke: "edit",
      startIcon: "fa-solid fa-pen",
      label: EDIT,
      linkFn: (row) => translatedRoute(`wizard-node/edit/${row.id}?${encodeUrl(urlParams)}`),
      disabledFn: (row) => !row.isEditable
    },
    {
      ke: "clone",
      startIcon: "fa-solid fa-copy",
      label: CLONE,
      linkFn: (row) => translatedRoute(`wizard-node/clone/${row.id}?${encodeUrl(urlParams)}`),
      disabledFn: (row) => !row.isEditable
    },
    {
      ke: "delete",
      startIcon: "fa-solid fa-trash",
      label: DELETE,
      disabledFn: (row) => !row.isDeletable
    }
  ], [urlParams]);
};
var i18n2 = [
  "std_edit",
  "std_clone",
  "std_delete"
];

// src/hooks/useWizardNodeListSort.ts
import { useTranslations as useTranslations3 } from "@mzara/component";
var useWizardNodeListSort = () => {
  const [
    KEY,
    CREATED_AT,
    UPDATED_AT
  ] = useTranslations3(i18n3);
  return [
    { label: KEY, value: "nodeKey" },
    { label: CREATED_AT, value: "createdAt", className: "ml-auto" },
    { label: UPDATED_AT, value: "updatedAt" }
  ];
};
var i18n3 = [
  "Generic.txt.translate.form.ke.label",
  "std_created_at",
  "std_updated_at"
];

// src/queries/WizardNodesQuery.ts
var WizardNodesQuery = class {
  constructor(variables) {
    this.queryKey = "App.Bo.WizardsQuery";
    this.gql = `
        query WizardNodesQuery(
                $key: String,
                $pageSize: Float, 
                $page: Float,
                $sort: [TFilterSort!],
                $data: JSONObject
            ) {
            wizardNodes (filter: {
                key: $key,
                pageSize: $pageSize,
                page: $page,
                sort: $sort,
                data: $data
            }) {
                total
                data {
                    id nodeKey title comment createdAt updatedAt isEditable isDeletable
                    tags { id color value }
                }
            }
        }
    `;
    this.variables = variables;
  }
  mapFn(data) {
    return {
      total: data.wizardNodes.total,
      data: data.wizardNodes.data
    };
  }
};

// src/components/WizardNodeFilter.tsx
import { Box, ControlList, useListFilterState, useTranslations as useTranslations5 } from "@mzara/component";

// src/hooks/useWizardNodeListFilter.ts
import { useTranslations as useTranslations4 } from "@mzara/component";
import { useMemo as useMemo2 } from "react";
var useWizardNodeListFilter = () => {
  const [
    KEY,
    TITLE,
    DESCRIPTION,
    COMMENT
  ] = useTranslations4(i18n4);
  return useMemo2(() => {
    return {
      data: {
        forms: [
          {
            type: "text",
            name: "nodeKey_like",
            className: "",
            label: KEY
          },
          {
            type: "text",
            name: "title_like",
            className: "",
            label: TITLE
          },
          {
            type: "text",
            name: "description_like",
            className: "",
            label: DESCRIPTION
          },
          {
            type: "text",
            name: "comment_like",
            className: "",
            label: COMMENT
          }
        ],
        value: {}
      },
      id: "wizard-node-filter-form"
    };
  }, [KEY]);
};
var i18n4 = [
  "Bo.WizardNode.form.key.label",
  "Bo.WizardNode.form.title.label",
  "Bo.WizardNode.form.description.label",
  "Bo.WizardNode.form.comment.label"
];

// src/components/WizardNodeFilter.tsx
import _ from "lodash";
import { jsx } from "react/jsx-runtime";
var WizardNodeFilter = () => {
  var _a, _b, _c;
  const control = useWizardNodeListFilter();
  const { filter, setFilter, resetGlobalFilterValue } = useListFilterState(WIZARD_NODE_LIST_ID);
  const [
    FILTER
  ] = useTranslations5(i18n5);
  return /* @__PURE__ */ jsx(Box, {
    className: "box-transparent box-shadow-none box-p-0",
    title: FILTER,
    icon: "fa-solid fa-filter",
    children: /* @__PURE__ */ jsx(ControlList, __spreadProps(__spreadValues({}, control), {
      value: __spreadProps(__spreadValues({}, filter == null ? void 0 : filter.data), {
        tags: !_.isEmpty((_a = filter == null ? void 0 : filter.data) == null ? void 0 : _a.tags.id_among) ? (_c = (_b = filter == null ? void 0 : filter.data) == null ? void 0 : _b.tags.id_among) == null ? void 0 : _c.map((item) => ({ id: item })) : void 0
      }),
      onChange: (value) => setFilter((v) => {
        var _a2;
        return __spreadProps(__spreadValues({}, v), {
          page: 0,
          data: __spreadProps(__spreadValues(__spreadValues({}, v.data), value), {
            tags: {
              id_among: (_a2 = value.tags) == null ? void 0 : _a2.map((item) => item.id)
            }
          })
        });
      })
    }))
  });
};
var i18n5 = [
  "std_filter"
];

// src/containers/WizardNode.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var WizardNode = () => {
  const breadCrumb = useWizardNodeBreadCrumb();
  const menus = useWizardNodeListMenu();
  const [
    ADD,
    CREATED_AT,
    UPDATED_AT,
    CONFIRMATION,
    OK,
    CANCEL,
    WIZARD_NODE
  ] = useTranslations6(i18n6);
  const t = useTranslation();
  const sortItems = useWizardNodeListSort();
  const translatedRoute = useTranslationRoute3();
  const urlParams = useUrlParamsValue2();
  const encodeUrl = useUrlParamsEncode2();
  const deleteMutation = useGraphqlDelete("wizardNode");
  const [deleteItems, setDeleteItems] = useState([]);
  const { invalidateQuery } = useListGraphqlQuery(WIZARD_NODE_LIST_ID);
  const handleMenuClick = (row, menu) => {
    if (menu.ke === "delete") {
      setDeleteItems([row.id]);
    }
  };
  const handleDeleteConfirmed = () => {
    deleteMutation.mutate({
      ids: deleteItems
    }, {
      onSuccess: () => {
        invalidateQuery();
        setDeleteItems([]);
      }
    });
  };
  return /* @__PURE__ */ jsxs("div", {
    className: "flex flex-row w-full",
    children: [
      /* @__PURE__ */ jsxs("div", {
        className: "flex flex-col gap-5 flex-1",
        children: [
          /* @__PURE__ */ jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              /* @__PURE__ */ jsx2("h4", {
                className: "font-semibold",
                children: WIZARD_NODE
              }),
              /* @__PURE__ */ jsx2(Link, {
                to: translatedRoute(`wizard-node/create?${encodeUrl(urlParams)}`),
                children: /* @__PURE__ */ jsx2(Button, {
                  startIcon: "fa-solid fa-plus",
                  className: "btn btn-primary",
                  label: ADD
                })
              })
            ]
          }),
          /* @__PURE__ */ jsx2(BreadCrumb, {
            items: breadCrumb.reverse()
          }),
          /* @__PURE__ */ jsx2("div", {
            className: "flex w-full",
            children: /* @__PURE__ */ jsx2(List, {
              id: WIZARD_NODE_LIST_ID,
              GQLRequest: WizardNodesQuery,
              menus,
              separator: true,
              sort: { items: sortItems },
              defaultFilter: {
                pageSize: 50,
                page: 0,
                sort: [{ sort: "DESC", value: "updatedAt" }]
              },
              onMenuClick: handleMenuClick,
              onRenderRow: (row) => {
                var _a;
                return /* @__PURE__ */ jsxs("div", {
                  className: "flex flex-col gap-2",
                  children: [
                    /* @__PURE__ */ jsx2("div", {
                      className: "flex flex-col",
                      children: /* @__PURE__ */ jsx2(Link, {
                        to: translatedRoute(`wizard-node/${row.id}?${encodeUrl(urlParams)}`),
                        children: /* @__PURE__ */ jsx2("h5", {
                          children: /* @__PURE__ */ jsx2("b", {
                            children: t(row.title)
                          })
                        })
                      })
                    }),
                    /* @__PURE__ */ jsxs("ul", {
                      className: "flex items-center sm:gap-10 gap-4",
                      children: [
                        /* @__PURE__ */ jsxs("li", {
                          className: "flex items-center gap-1",
                          children: [
                            /* @__PURE__ */ jsx2("i", {
                              className: "fa-solid fa-key text-[#6C6868]"
                            }),
                            /* @__PURE__ */ jsx2("span", {
                              className: "text-[12px]",
                              children: row.nodeKey
                            })
                          ]
                        }),
                        /* @__PURE__ */ jsxs("li", {
                          className: "flex items-center gap-1",
                          children: [
                            /* @__PURE__ */ jsx2("i", {
                              title: UPDATED_AT,
                              className: "fa-solid fa-clock text-[#6C6868]"
                            }),
                            /* @__PURE__ */ jsx2("span", {
                              className: "text-[12px]",
                              children: /* @__PURE__ */ jsx2(DateSpan, {
                                value: row.updatedAt
                              })
                            })
                          ]
                        })
                      ]
                    }),
                    /* @__PURE__ */ jsx2("div", {
                      className: "flex gap-2",
                      children: (_a = row.tags) == null ? void 0 : _a.map((tag, index) => /* @__PURE__ */ jsx2(Chip, {
                        color: tag.color,
                        label: tag.value
                      }, index))
                    })
                  ]
                });
              }
            })
          })
        ]
      }),
      /* @__PURE__ */ jsx2(RightSidebar, {
        children: /* @__PURE__ */ jsx2(WizardNodeFilter, {})
      }),
      /* @__PURE__ */ jsx2(GenericSuspense, {
        children: /* @__PURE__ */ jsx2(Outlet, {})
      }),
      deleteItems.length > 0 && /* @__PURE__ */ jsx2(Dialog, {
        open: deleteItems.length > 0,
        onDismiss: () => setDeleteItems([]),
        onCancel: () => setDeleteItems([]),
        onConfirm: () => handleDeleteConfirmed(),
        title: CONFIRMATION,
        btnOk: { label: OK, isSubmit: deleteMutation.isLoading },
        btnCancel: { label: CANCEL }
      })
    ]
  });
};
var WIZARD_NODE_LIST_ID = "Wizard.Node.List";
var i18n6 = [
  "std_add",
  "std_created_at",
  "std_updated_at",
  "std_confirmation",
  "std_ok",
  "std_cancel",
  "Bo.WizardNode.title"
];
var WizardNode_default = WizardNode;

export {
  WIZARD_NODE_LIST_ID,
  WizardNode_default
};
//# sourceMappingURL=chunk-RMS4N4Q2.js.map
