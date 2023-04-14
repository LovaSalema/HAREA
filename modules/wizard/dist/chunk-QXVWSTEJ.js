import 'react'
import {
  __spreadProps,
  __spreadValues
} from "./chunk-QM6VBZSE.js";

// src/containers/Wizard.tsx
import { BreadCrumb, Button, List, useCdnFlagUrl, DateSpan, useUrlParamsValue as useUrlParamsValue2, useUrlParamsEncode as useUrlParamsEncode2, Dialog, useGraphqlDelete, useListGraphqlQuery, RightSidebar, GenericSuspense, useTranslations as useTranslations6, useTranslation, useTranslationRoute as useTranslationRoute3, Chip } from "@mzara/component";
import { Link, Outlet } from "react-router-dom";

// src/components/WizardFilter.tsx
import { Box, ControlList, useListFilterState, useTranslations as useTranslations2 } from "@mzara/component";
import _ from "lodash";

// src/hooks/useWizardListFilter.ts
import { useTranslations } from "@mzara/component";
import { useMemo } from "react";
var useWizardListFilter = () => {
  const [
    KEY_LABEL,
    KEY_DESCRIPTION,
    TITLE_LABEL,
    TITLE_DESCRIPTION,
    COMMENT_LABEL,
    COMMENT_DESCRIPTION,
    TAGS_LABEL,
    TAGS_DESCRIPTION
  ] = useTranslations(i18n);
  return useMemo(() => {
    return {
      data: {
        forms: [
          {
            type: "text",
            name: "wizardKey_like",
            className: "",
            label: KEY_LABEL
          },
          {
            type: "text",
            name: "title_like",
            className: "",
            label: TITLE_LABEL
          },
          {
            type: "text",
            name: "comment_like",
            className: "",
            label: COMMENT_LABEL
          },
          {
            type: "lov-select",
            name: "tags",
            tp: "WIZARD_TAGS",
            multiple: true,
            className: "",
            label: TAGS_LABEL
          }
        ],
        value: {}
      },
      id: "wizard-filter-form"
    };
  }, [KEY_LABEL]);
};
var i18n = [
  "Bo.Wizard.form.key.label",
  "Bo.Wizard.form.key.description",
  "Bo.Wizard.form.title.label",
  "Bo.Wizard.form.title.description",
  "Bo.Wizard.form.comment.label",
  "Bo.Wizard.form.comment.description",
  "Bo.Wizard.form.tags.label",
  "Bo.Wizard.form.tags.description"
];

// src/components/WizardFilter.tsx
import { jsx } from "react/jsx-runtime";
var WizardFilter = () => {
  var _a, _b, _c;
  const control = useWizardListFilter();
  const { filter, setFilter, resetGlobalFilterValue } = useListFilterState(WIZARD_LIST_ID);
  const [
    FILTER
  ] = useTranslations2(i18n2);
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
var i18n2 = [
  "std_filter"
];

// src/hooks/useWizardListSort.ts
import { useTranslations as useTranslations3 } from "@mzara/component";
var useWizardListSort = () => {
  const [
    KEY,
    CREATED_AT,
    UPDATED_AT
  ] = useTranslations3(i18n3);
  return [
    { label: KEY, value: "wizardKey" },
    { label: CREATED_AT, value: "createdAt", className: "ml-auto" },
    { label: UPDATED_AT, value: "updatedAt" }
  ];
};
var i18n3 = [
  "Generic.txt.translate.form.ke.label",
  "std_created_at",
  "std_updated_at"
];

// src/hooks/useWizardBreadCrumb.ts
import { useTranslationRoute, useTranslations as useTranslations4 } from "@mzara/component";
var useWizardBreadCrumb = () => {
  const [
    HOME,
    TITLE
  ] = useTranslations4(i18n4);
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
var i18n4 = [
  "std_home",
  "Bo.Wizard.title"
];

// src/hooks/useWizardListMenu.ts
import { useTranslationRoute as useTranslationRoute2, useTranslations as useTranslations5, useUrlParamsEncode, useUrlParamsValue } from "@mzara/component";
import { useMemo as useMemo2 } from "react";
var useWizardListMenu = () => {
  const [
    EDIT,
    DELETE,
    CLONE,
    DESIGNER
  ] = useTranslations5(i18n5);
  const translatedRoute = useTranslationRoute2();
  const urlParams = useUrlParamsValue();
  const encodeUrl = useUrlParamsEncode();
  return useMemo2(() => [
    {
      ke: "edit",
      startIcon: "fa-solid fa-pen",
      label: EDIT,
      linkFn: (row) => translatedRoute(`wizard/edit/${row.id}?${encodeUrl(urlParams)}`),
      disabledFn: (row) => !row.isEditable
    },
    {
      ke: "designer",
      startIcon: "fa-solid fa-wand-magic-sparkles",
      label: DESIGNER,
      linkFn: (row) => translatedRoute(`wizard/designer/${row.id}?${encodeUrl(urlParams)}`),
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
var i18n5 = [
  "std_edit",
  "std_delete",
  "std_clone",
  "std_designer"
];

// src/queries/WizardsQuery.ts
var WizardsQuery = class {
  constructor(variables) {
    this.queryKey = "App.Bo.WizardsQuery";
    this.gql = `
        query WizardsQuery(
                $key: String,
                $pageSize: Float, 
                $page: Float,
                $sort: [TFilterSort!],
                $data: JSONObject
            ) {
            wizards (filter: {
                key: $key,
                pageSize: $pageSize,
                page: $page,
                sort: $sort,
                data: $data
            }) {
                total
                data {
                    id wizardKey type title comment createdAt updatedAt isEditable isDeletable
                    tags { value color }
                }
            }
        }
    `;
    this.variables = variables;
  }
  mapFn(data) {
    return {
      total: data.wizards.total,
      data: data.wizards.data
    };
  }
};

// src/containers/Wizard.tsx
import { useState } from "react";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var Wizard = () => {
  const breadCrumb = useWizardBreadCrumb();
  const menus = useWizardListMenu();
  const [
    ADD,
    CREATED_AT,
    UPDATED_AT,
    CONFIRMATION,
    OK,
    CANCEL,
    WIZARD,
    TYPE
  ] = useTranslations6(i18n6);
  const t = useTranslation();
  const cdn = useCdnFlagUrl();
  const sortItems = useWizardListSort();
  const translatedRoute = useTranslationRoute3();
  const urlParams = useUrlParamsValue2();
  const encodeUrl = useUrlParamsEncode2();
  const deleteMutation = useGraphqlDelete("wizard");
  const [deleteItems, setDeleteItems] = useState([]);
  const { invalidateQuery } = useListGraphqlQuery(WIZARD_LIST_ID);
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
                children: WIZARD
              }),
              /* @__PURE__ */ jsx2(Link, {
                to: translatedRoute(`wizard/create?${encodeUrl(urlParams)}`),
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
              id: WIZARD_LIST_ID,
              GQLRequest: WizardsQuery,
              menus,
              sort: { items: sortItems },
              defaultFilter: {
                pageSize: 50,
                page: 0,
                sort: [{ sort: "DESC", value: "updatedAt" }]
              },
              onMenuClick: handleMenuClick,
              separator: true,
              onRenderRow: (row) => {
                var _a;
                return /* @__PURE__ */ jsxs("div", {
                  className: "flex flex-col gap-2",
                  children: [
                    /* @__PURE__ */ jsx2("p", {
                      className: "flex gap-2",
                      children: /* @__PURE__ */ jsx2(Link, {
                        to: translatedRoute(`wizard/${row.id}?${encodeUrl(urlParams)}`),
                        children: /* @__PURE__ */ jsx2("b", {
                          children: row.title
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
                              children: row.wizardKey
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
                        }),
                        /* @__PURE__ */ jsxs("li", {
                          className: "flex items-center gap-1",
                          children: [
                            /* @__PURE__ */ jsx2("i", {
                              title: TYPE,
                              className: `fa-solid ${row.type === "SEQUENTIAL" ? "fa-layer-group" : "fa-code-branch"} text-[#6C6868]`
                            }),
                            /* @__PURE__ */ jsx2("span", {
                              className: "text-[12px]",
                              children: t(`Bo.WizardNode.form.type.${row.type}.label`)
                            })
                          ]
                        })
                      ]
                    }),
                    /* @__PURE__ */ jsx2("div", {
                      className: "flex gap-2 w-full",
                      children: (_a = row.tags) == null ? void 0 : _a.map((item, index) => /* @__PURE__ */ jsx2(Chip, {
                        label: item.value,
                        color: item.color
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
        children: /* @__PURE__ */ jsx2(WizardFilter, {})
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
var WIZARD_LIST_ID = "Wizard.List";
var i18n6 = [
  "std_add",
  "std_created_at",
  "std_updated_at",
  "std_confirmation",
  "std_ok",
  "std_cancel",
  "Bo.Wizard.title",
  "std_type"
];
var Wizard_default = Wizard;

export {
  WIZARD_LIST_ID,
  Wizard_default
};
//# sourceMappingURL=chunk-QXVWSTEJ.js.map
