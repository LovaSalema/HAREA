import 'react'
import {
  __spreadProps,
  __spreadValues
} from "./chunk-MT53WDPF.js";

// src/containers/Translation.tsx
import { BreadCrumb, Button, useTranslations as useTranslations6, List, useCdnFlagUrl, DateSpan, useTranslationRoute as useTranslationRoute3, useTranslation, useUrlParamsValue as useUrlParamsValue2, useUrlParamsEncode as useUrlParamsEncode2, Dialog, useGraphqlDelete, useListGraphqlQuery, RightSidebar, GenericSuspense } from "@mzara/component";
import { Link, Outlet } from "react-router-dom";

// src/components/TranslationFilter.tsx
import { Box, ControlList, useListFilterState, useTranslations as useTranslations2 } from "@mzara/component";
import _ from "lodash";

// src/hooks/useTranslationListFilter.ts
import { useTranslations } from "@mzara/component";
import { useMemo } from "react";
var useTranslationListFilter = () => {
  const [
    KE_LABEL,
    KE_DESCRIPTION,
    VAL_LABEL,
    VAL_DESCRIPTION,
    ZONE_LABEL,
    ZONE_DESCRIPTION,
    APP_LABEL,
    APP_DESCRIPTION,
    COMMENTS_LABEL,
    COMMENTS_DESCRIPTION,
    QUALITY_LABEL,
    QUALITY_DESCRIPTION
  ] = useTranslations(i18n);
  return useMemo(() => {
    return {
      data: {
        forms: [
          {
            type: "text",
            name: "translationKey_like",
            className: "",
            label: KE_LABEL,
            placeholder: KE_DESCRIPTION
          },
          {
            type: "text",
            name: "value_like",
            className: "",
            label: VAL_LABEL,
            placeholder: VAL_DESCRIPTION
          },
          {
            type: "text",
            name: "comment_like",
            className: "",
            label: COMMENTS_LABEL,
            placeholder: COMMENTS_DESCRIPTION
          },
          {
            type: "de-select",
            name: "language",
            tp: "APP_ZONE",
            multiple: true,
            className: "",
            label: ZONE_LABEL,
            placeholder: ZONE_DESCRIPTION
          },
          {
            type: "de-select",
            name: "appName",
            tp: "APP_NAME",
            multiple: true,
            className: "",
            label: APP_LABEL,
            placeholder: APP_DESCRIPTION
          },
          {
            type: "de-select",
            name: "quality",
            tp: "TRANSLATION_QUALITY",
            multiple: true,
            className: "",
            label: QUALITY_LABEL,
            placeholder: QUALITY_DESCRIPTION
          }
        ],
        value: {},
        hideFooter: true
      },
      id: "translation-filter-form"
    };
  }, [KE_LABEL]);
};
var i18n = [
  "Generic.txt.translate.form.ke.label",
  "Generic.txt.translate.form.ke.description",
  "Generic.txt.translate.form.val.label",
  "Generic.txt.translate.form.val.description",
  "Generic.txt.translate.form.zone.label",
  "Generic.txt.translate.form.zone.description",
  "Generic.txt.translate.form.app.label",
  "Generic.txt.translate.form.app.description",
  "Generic.txt.translate.form.comments.label",
  "Generic.txt.translate.form.comments.description",
  "Generic.txt.translate.form.quality.label",
  "Generic.txt.translate.form.quality.description"
];

// src/components/TranslationFilter.tsx
import { jsx } from "react/jsx-runtime";
var TranslationFilter = () => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const control = useTranslationListFilter();
  const { filter, setFilter, resetGlobalFilterValue } = useListFilterState(TRANSLATION_LIST_ID);
  const [
    FILTER
  ] = useTranslations2(i18n2);
  return /* @__PURE__ */ jsx(Box, {
    className: "box-transparent box-shadow-none box-p-0",
    title: FILTER,
    icon: "fa-solid fa-filter",
    children: /* @__PURE__ */ jsx(ControlList, __spreadProps(__spreadValues({}, control), {
      value: __spreadProps(__spreadValues({}, filter == null ? void 0 : filter.data), {
        language: !_.isEmpty((_a = filter == null ? void 0 : filter.data) == null ? void 0 : _a.language.id_among) ? (_c = (_b = filter == null ? void 0 : filter.data) == null ? void 0 : _b.language.id_among) == null ? void 0 : _c.map((item) => ({ id: item })) : void 0,
        appName: !_.isEmpty((_d = filter == null ? void 0 : filter.data) == null ? void 0 : _d.appName.id_among) ? (_f = (_e = filter == null ? void 0 : filter.data) == null ? void 0 : _e.appName.id_among) == null ? void 0 : _f.map((item) => ({ id: item })) : void 0,
        quality: !_.isEmpty((_g = filter == null ? void 0 : filter.data) == null ? void 0 : _g.quality.id_among) ? (_i = (_h = filter == null ? void 0 : filter.data) == null ? void 0 : _h.quality.id_among) == null ? void 0 : _i.map((item) => ({ id: item })) : void 0
      }),
      onChange: (value) => setFilter((v) => {
        var _a2, _b2, _c2;
        return __spreadProps(__spreadValues({}, v), {
          page: 0,
          data: __spreadProps(__spreadValues(__spreadValues({}, v.data), value), {
            language: {
              id_among: (_a2 = value.language) == null ? void 0 : _a2.map((item) => item.id)
            },
            appName: {
              id_among: (_b2 = value.appName) == null ? void 0 : _b2.map((item) => item.id)
            },
            quality: {
              id_among: (_c2 = value.quality) == null ? void 0 : _c2.map((item) => item.id)
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

// src/hooks/useTranslationListSort.ts
import { useTranslations as useTranslations3 } from "@mzara/component";
var useTranslationListSort = () => {
  const [
    KEY,
    CREATED_AT,
    UPDATED_AT
  ] = useTranslations3(i18n3);
  return [
    { label: KEY, value: "translationKey" },
    { label: CREATED_AT, value: "createdAt", className: "ml-auto" },
    { label: UPDATED_AT, value: "updatedAt" }
  ];
};
var i18n3 = [
  "Generic.txt.translate.form.ke.label",
  "std_created_at",
  "std_updated_at"
];

// src/hooks/useTranslationBreadCrumb.ts
import { useTranslationRoute, useTranslations as useTranslations4 } from "@mzara/component";
var useTranslationBreadCrumb = () => {
  const [
    HOME,
    TITLE
  ] = useTranslations4(i18n4);
  const url = useTranslationRoute();
  return [
    {
      label: HOME,
      startIcon: "fa-solid fa-home",
      link: url("")
    },
    {
      label: TITLE,
      startIcon: "fa-solid fa-language",
      className: "active"
    }
  ];
};
var i18n4 = [
  "std_home",
  "Bo.Translation.title"
];

// src/hooks/useTranslationListMenu.ts
import { useTranslationRoute as useTranslationRoute2, useTranslations as useTranslations5, useUrlParamsEncode, useUrlParamsValue } from "@mzara/component";
import { useMemo as useMemo2 } from "react";
var useTranslationListMenu = () => {
  const [
    EDIT,
    DELETE,
    CLONE
  ] = useTranslations5(i18n5);
  const translatedRoute = useTranslationRoute2();
  const urlParams = useUrlParamsValue();
  const encodeUrl = useUrlParamsEncode();
  return useMemo2(() => [
    {
      ke: "edit",
      startIcon: "fa-solid fa-pen",
      label: EDIT,
      linkFn: (row) => translatedRoute(`translation/edit/${row.id}?${encodeUrl(urlParams)}`),
      disabledFn: (row) => !row.isEditable
    },
    {
      ke: "clone",
      startIcon: "fa-solid fa-copy",
      label: CLONE,
      linkFn: (row) => translatedRoute(`translation/clone/${row.id}?${encodeUrl(urlParams)}`),
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
  "std_clone"
];

// src/queries/TranslationsQuery.ts
var TranslationsQuery = class {
  constructor(variables) {
    this.queryKey = "App.Bo.TranslationsQuery";
    this.gql = `
        query translationsQuery(
                $key: String,
                $pageSize: Float, 
                $page: Float,
                $sort: [TFilterSort!],
                $data: JSONObject
            ) {
            translations (filter: {
                key: $key,
                pageSize: $pageSize,
                page: $page,
                sort: $sort,
                data: $data
            }) {
                total
                data {
                    id translationKey value comment createdAt updatedAt isEditable isDeletable
                    language { translationKey value }
                    appName { translationKey }
                    quality { translationKey }
                }
            }
        }
    `;
    this.variables = variables;
  }
  mapFn(data) {
    return {
      total: data.translations.total,
      data: data.translations.data
    };
  }
};

// src/containers/Translation.tsx
import { useState } from "react";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var Translation = () => {
  const breadCrumb = useTranslationBreadCrumb();
  const menus = useTranslationListMenu();
  const [
    ADD,
    CREATED_AT,
    UPDATED_AT,
    CONFIRMATION,
    OK,
    CANCEL,
    APP,
    QUALITY,
    TRANSLATION
  ] = useTranslations6(i18n6);
  const t = useTranslation();
  const cdn = useCdnFlagUrl();
  const sortItems = useTranslationListSort();
  const translatedRoute = useTranslationRoute3();
  const urlParams = useUrlParamsValue2();
  const encodeUrl = useUrlParamsEncode2();
  const deleteMutation = useGraphqlDelete("translation");
  const [deleteItems, setDeleteItems] = useState([]);
  const { invalidateQuery } = useListGraphqlQuery(TRANSLATION_LIST_ID);
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
                children: TRANSLATION
              }),
              /* @__PURE__ */ jsx2(Link, {
                to: translatedRoute(`translation/create?${encodeUrl(urlParams)}`),
                children: /* @__PURE__ */ jsx2(Button, {
                  startIcon: "fa-solid fa-plus",
                  className: "btn btn-primary",
                  label: ADD
                })
              })
            ]
          }),
          /* @__PURE__ */ jsx2("div", {
            className: "flex items-center w-full gap-2 h-14",
            children: /* @__PURE__ */ jsx2(BreadCrumb, {
              items: breadCrumb
            })
          }),
          /* @__PURE__ */ jsx2("div", {
            className: "flex w-full",
            children: /* @__PURE__ */ jsx2(List, {
              id: TRANSLATION_LIST_ID,
              GQLRequest: TranslationsQuery,
              menus,
              sort: { items: sortItems },
              separator: true,
              defaultFilter: {
                pageSize: 50,
                page: 0,
                sort: [{ sort: "DESC", value: "updatedAt" }]
              },
              onMenuClick: handleMenuClick,
              onRenderRow: (row) => {
                var _a, _b, _c;
                return /* @__PURE__ */ jsxs("div", {
                  className: "flex flex-col gap-5",
                  children: [
                    /* @__PURE__ */ jsxs("div", {
                      className: "flex flex-col",
                      children: [
                        /* @__PURE__ */ jsx2(Link, {
                          to: translatedRoute(`translation/edit/${row.id}?${encodeUrl(urlParams)}`),
                          children: /* @__PURE__ */ jsx2("h5", {
                            children: /* @__PURE__ */ jsx2("b", {
                              children: row.translationKey
                            })
                          })
                        }),
                        /* @__PURE__ */ jsx2("p", {
                          children: row.value
                        })
                      ]
                    }),
                    /* @__PURE__ */ jsxs("ul", {
                      className: "flex items-center sm:gap-10 gap-4",
                      children: [
                        /* @__PURE__ */ jsxs("li", {
                          className: "flex items-center gap-1",
                          children: [
                            /* @__PURE__ */ jsx2("img", {
                              src: cdn((_a = row.language) == null ? void 0 : _a.value),
                              title: t(((_b = row.language) == null ? void 0 : _b.translationKey) || ""),
                              alt: t(((_c = row.language) == null ? void 0 : _c.translationKey) || ""),
                              className: "w-4 h-4"
                            }),
                            /* @__PURE__ */ jsx2("span", {
                              className: "text-[12px]",
                              children: t(row.language.translationKey)
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
                              title: APP,
                              className: "fa-solid fa-desktop text-[#6C6868]"
                            }),
                            /* @__PURE__ */ jsx2("span", {
                              className: "text-[12px]",
                              children: t(row.appName.translationKey)
                            })
                          ]
                        }),
                        /* @__PURE__ */ jsxs("li", {
                          className: "flex items-center gap-1",
                          children: [
                            /* @__PURE__ */ jsx2("i", {
                              title: QUALITY,
                              className: "fa-solid fa-vials text-[#6C6868]"
                            }),
                            /* @__PURE__ */ jsx2("span", {
                              className: "text-[12px]",
                              children: t(row.quality.translationKey)
                            })
                          ]
                        })
                      ]
                    })
                  ]
                });
              }
            })
          })
        ]
      }),
      /* @__PURE__ */ jsx2(RightSidebar, {
        children: /* @__PURE__ */ jsx2(TranslationFilter, {})
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
var TRANSLATION_LIST_ID = "Translation.List";
var i18n6 = [
  "std_add",
  "std_created_at",
  "std_updated_at",
  "std_confirmation",
  "std_ok",
  "std_cancel",
  "Generic.txt.translate.form.app.label",
  "Generic.txt.translate.form.quality.label",
  "Generic.txt.traduction.label"
];
var Translation_default = Translation;

export {
  TRANSLATION_LIST_ID,
  Translation_default
};
//# sourceMappingURL=chunk-TA3JQQCU.js.map
