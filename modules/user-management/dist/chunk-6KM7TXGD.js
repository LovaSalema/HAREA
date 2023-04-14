import 'react'
import {
  __spreadProps,
  __spreadValues
} from "./chunk-MT53WDPF.js";

// src/views/organisation/containers/UserOrganisation.tsx
import { BreadCrumb, Button, List, useCdnFlagUrl, DateSpan, useUrlParamsValue as useUrlParamsValue2, useUrlParamsEncode as useUrlParamsEncode2, Dialog, useGraphqlDelete, useListGraphqlQuery, RightSidebar, GenericSuspense, useTranslations as useTranslations6, useTranslation, useTranslationRoute as useTranslationRoute3 } from "@mzara/component";
import { Link, Outlet } from "react-router-dom";

// src/views/organisation/components/UserOrganisationFilter.tsx
import { Box, ControlList, useListFilterState, useTranslations as useTranslations2 } from "@mzara/component";
import _ from "lodash";

// src/views/organisation/hooks/useUserOrganisationListFilter.ts
import { useTranslations } from "@mzara/component";
import { useMemo } from "react";
var useUserOrganisationListFilter = () => {
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
            name: "organisationKey_like",
            className: "",
            label: KEY_LABEL
          },
          {
            type: "text",
            name: "designation_like",
            className: "",
            label: TITLE_LABEL
          },
          {
            type: "textarea",
            name: "comment_like",
            className: "",
            label: COMMENT_LABEL
          }
        ],
        value: {},
        hideFooter: true
      },
      id: "user-organisation-filter-form"
    };
  }, [KEY_LABEL]);
};
var i18n = [
  "Bo.UserOrganisation.form.key.label",
  "Bo.UserOrganisation.form.key.description",
  "Bo.UserOrganisation.form.title.label",
  "Bo.UserOrganisation.form.title.description",
  "Bo.UserOrganisation.form.comment.label",
  "Bo.UserOrganisation.form.comment.description",
  "Bo.UserOrganisation.form.tags.label",
  "Bo.UserOrganisation.form.tags.description"
];

// src/views/organisation/components/UserOrganisationFilter.tsx
import { jsx } from "react/jsx-runtime";
var UserOrganisationFilter = () => {
  var _a, _b, _c;
  const control = useUserOrganisationListFilter();
  const { filter, setFilter, resetGlobalFilterValue } = useListFilterState(USER_ORGANISATION_LIST_ID);
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

// src/views/organisation/hooks/useUserOrganisationListSort.ts
import { useTranslations as useTranslations3 } from "@mzara/component";
var useUserOrganisationListSort = () => {
  const [
    KEY,
    CREATED_AT,
    UPDATED_AT
  ] = useTranslations3(i18n3);
  return [
    { label: KEY, value: "organisationKey" },
    { label: CREATED_AT, value: "createdAt", className: "ml-auto" },
    { label: UPDATED_AT, value: "updatedAt" }
  ];
};
var i18n3 = [
  "Generic.txt.translate.form.ke.label",
  "std_created_at",
  "std_updated_at"
];

// src/views/organisation/hooks/useUserOrganisationBreadCrumb.ts
import { useTranslationRoute, useTranslations as useTranslations4 } from "@mzara/component";
var useUserOrganisationBreadCrumb = () => {
  const [
    HOME,
    USER,
    TITLE
  ] = useTranslations4(i18n4);
  const url = useTranslationRoute();
  return [
    {
      label: HOME,
      link: url("")
    },
    {
      label: USER,
      link: url("/user")
    },
    {
      label: TITLE,
      className: "active"
    }
  ];
};
var i18n4 = [
  "std_home",
  "std_user",
  "Generic.UserOrganisation.title"
];

// src/views/organisation/queries/UserOrganisationsQuery.ts
var UserOrganisationsQuery = class {
  constructor(variables) {
    this.queryKey = "App.Bo.UserOrganisationsQuery";
    this.gql = `
        query UserOrganisationsQuery(
                $key: String,
                $pageSize: Float, 
                $page: Float,
                $sort: [TFilterSort!],
                $data: JSONObject
            ) {
            userOrganisations (filter: {
                key: $key,
                pageSize: $pageSize,
                page: $page,
                sort: $sort,
                data: $data
            }) {
                total
                data {
                    id organisationKey designation createdAt updatedAt isEditable isDeletable userCount
                }
            }
        }
    `;
    this.variables = variables;
  }
  mapFn(data) {
    return {
      total: data.userOrganisations.total,
      data: data.userOrganisations.data
    };
  }
};

// src/views/organisation/containers/UserOrganisation.tsx
import { useState } from "react";

// src/views/organisation/hooks/useUserOrganisationListMenu.ts
import { useTranslationRoute as useTranslationRoute2, useTranslations as useTranslations5, useUrlParamsEncode, useUrlParamsValue } from "@mzara/component";
import { useMemo as useMemo2 } from "react";
var useUserOrganisationListMenu = () => {
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
      linkFn: (row) => translatedRoute(`user/organisation/${row.id}?${encodeUrl(urlParams)}`),
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

// src/views/organisation/containers/UserOrganisation.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var UserOrganisation = () => {
  const breadCrumb = useUserOrganisationBreadCrumb();
  const menus = useUserOrganisationListMenu();
  const [
    TITLE,
    ADD,
    CREATED_AT,
    UPDATED_AT,
    CONFIRMATION,
    OK,
    CANCEL,
    USERS
  ] = useTranslations6(i18n6);
  const t = useTranslation();
  const cdn = useCdnFlagUrl();
  const sortItems = useUserOrganisationListSort();
  const translatedRoute = useTranslationRoute3();
  const urlParams = useUrlParamsValue2();
  const encodeUrl = useUrlParamsEncode2();
  const deleteMutation = useGraphqlDelete("userOrganisation");
  const [deleteItems, setDeleteItems] = useState([]);
  const { invalidateQuery } = useListGraphqlQuery(USER_ORGANISATION_LIST_ID);
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
                children: TITLE
              }),
              /* @__PURE__ */ jsx2(Link, {
                to: translatedRoute(`user/organisation/create?${encodeUrl(urlParams)}`),
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
              id: USER_ORGANISATION_LIST_ID,
              GQLRequest: UserOrganisationsQuery,
              menus,
              sort: { items: sortItems },
              defaultFilter: {
                pageSize: 50,
                page: 0,
                sort: [{ sort: "DESC", value: "updatedAt" }]
              },
              onMenuClick: handleMenuClick,
              onRenderRow: (row) => /* @__PURE__ */ jsxs("div", {
                className: "flex flex-col gap-2",
                children: [
                  /* @__PURE__ */ jsx2("p", {
                    className: "flex gap-2",
                    children: /* @__PURE__ */ jsx2(Link, {
                      to: translatedRoute(`user/organisation/${row.id}?${encodeUrl(urlParams)}`),
                      children: /* @__PURE__ */ jsx2("b", {
                        children: row.designation
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
                            title: CREATED_AT,
                            className: "fa-solid fa-clock text-[#6C6868]"
                          }),
                          /* @__PURE__ */ jsx2("span", {
                            className: "text-[12px]",
                            children: /* @__PURE__ */ jsx2(DateSpan, {
                              value: row.createdAt
                            })
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
                            title: USERS,
                            className: "fa-solid fa-users text-[#6C6868]"
                          }),
                          /* @__PURE__ */ jsx2("span", {
                            className: "text-[12px]",
                            children: row.userCount
                          })
                        ]
                      })
                    ]
                  })
                ]
              })
            })
          })
        ]
      }),
      /* @__PURE__ */ jsx2(RightSidebar, {
        children: /* @__PURE__ */ jsx2(UserOrganisationFilter, {})
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
var USER_ORGANISATION_LIST_ID = "User.Organisation.List";
var i18n6 = [
  "Generic.UserManagement.Menu.User.Organisation.Title",
  "std_add",
  "std_created_at",
  "std_updated_at",
  "std_confirmation",
  "std_ok",
  "std_cancel",
  "std_users"
];
var UserOrganisation_default = UserOrganisation;

export {
  USER_ORGANISATION_LIST_ID,
  UserOrganisation_default
};
//# sourceMappingURL=chunk-6KM7TXGD.js.map
