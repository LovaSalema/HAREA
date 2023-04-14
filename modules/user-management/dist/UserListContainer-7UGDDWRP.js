import 'react'
import {
  __spreadProps,
  __spreadValues
} from "./chunk-MT53WDPF.js";

// src/views/list/containers/UserListContainer.tsx
import {
  Box,
  BreadCrumb,
  Button,
  ControlList,
  List,
  RightSidebar,
  useListFilterState,
  useTranslationRoute as useTranslationRoute2,
  useUrlParamsEncode,
  useUrlParamsValue
} from "@mzara/component";
import { Link as Link2, Outlet } from "react-router-dom";

// src/views/list/components/UserListItem.tsx
import { IconButton, useFileUrl, useTranslationRoute } from "@mzara/component";
import { AvatarComponent } from "avatar-initials";
import { Link } from "react-router-dom";
import { jsx, jsxs } from "react/jsx-runtime";
var UserListItem = ({ userItem }) => {
  var _a, _b, _c, _d, _e;
  const t = useTranslationRoute();
  const fileUrl = useFileUrl();
  return /* @__PURE__ */ jsxs("div", {
    className: "flex items-center justify-between w-full pt-2 pb-4 border-b",
    children: [
      /* @__PURE__ */ jsxs("div", {
        className: "flex items-start gap-5",
        children: [
          /* @__PURE__ */ jsx("div", {
            className: "w-12 h-12 p-[2px] flex items-start object-cover object-center overflow-hidden rounded-full bg-secondary",
            children: /* @__PURE__ */ jsx(AvatarComponent, {
              primarySource: ((_a = userItem == null ? void 0 : userItem.profilePicture) == null ? void 0 : _a.id) && fileUrl((_b = userItem == null ? void 0 : userItem.profilePicture) == null ? void 0 : _b.id),
              initials: (userItem == null ? void 0 : userItem.firstName) && (userItem == null ? void 0 : userItem.lastName) ? `${((_c = userItem == null ? void 0 : userItem.firstName) == null ? void 0 : _c.split(""))[0]}${((_d = userItem == null ? void 0 : userItem.lastName) == null ? void 0 : _d.split(""))[0]}` : "NN",
              useGravatar: false,
              classes: "rounded-full w-full"
            })
          }),
          /* @__PURE__ */ jsxs("div", {
            className: "flex flex-col gap-2",
            children: [
              /* @__PURE__ */ jsxs("div", {
                className: "flex flex-col",
                children: [
                  /* @__PURE__ */ jsx("h6", {
                    className: "text-lg tracking-wider",
                    children: `${userItem == null ? void 0 : userItem.firstName} ${userItem == null ? void 0 : userItem.lastName}`
                  }),
                  /* @__PURE__ */ jsx("span", {
                    children: userItem == null ? void 0 : userItem.email
                  })
                ]
              }),
              /* @__PURE__ */ jsxs("div", {
                className: "flex items-center gap-4",
                children: [
                  /* @__PURE__ */ jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      /* @__PURE__ */ jsx("i", {
                        className: "fa-solid fa-user-tie"
                      }),
                      /* @__PURE__ */ jsx("span", {
                        children: (userItem == null ? void 0 : userItem.job) || "None"
                      })
                    ]
                  }),
                  /* @__PURE__ */ jsxs("div", {
                    className: "flex items-center gap-1",
                    children: [
                      /* @__PURE__ */ jsx("i", {
                        className: "fa-solid fa-file-signature"
                      }),
                      /* @__PURE__ */ jsx("div", {
                        className: "flex items-center gap-1",
                        children: ((_e = userItem == null ? void 0 : userItem.recruitingContracts) == null ? void 0 : _e.map(
                          (contract) => /* @__PURE__ */ jsx("span", {
                            children: contract == null ? void 0 : contract.designation
                          })
                        )) || "None"
                      })
                    ]
                  })
                ]
              })
            ]
          })
        ]
      }),
      /* @__PURE__ */ jsx(Link, {
        to: t(`user/list/${userItem.id}/details/about`),
        children: /* @__PURE__ */ jsx(IconButton, {
          icon: "fa-solid fa-angle-right"
        })
      })
    ]
  });
};

// src/views/list/hooks/useUserListBreadCrumb.ts
var useUserListBreadCrumb = () => {
  return [
    {
      label: "Home"
    },
    {
      label: "List"
    }
  ];
};

// src/views/list/hooks/useUserListFilterForm.ts
var useUserListFilterForm = () => {
  return {
    data: {
      forms: [
        {
          type: "text",
          name: "firstName_like",
          label: "Nom"
        },
        {
          type: "text",
          name: "lastName_like",
          label: "Pr\xE9noms"
        },
        {
          type: "text",
          name: "email_like",
          label: "Email"
        },
        {
          type: "text",
          name: "job_like",
          label: "Poste"
        }
      ],
      hideFooter: true,
      value: {},
      graphQL: {
        entity: "users"
      }
    },
    id: "user-list-filter-form"
  };
};

// src/views/list/queries/UserListQuery.ts
var UserListQuery = class {
  constructor(variables) {
    this.queryKey = "App.Harea.UserManagement.UserListQuery";
    this.gql = `
        query UserListQuery(
            $pageSize: Float,
            $page: Float,
            $data: JSONObject
        ){
            users(filter: {
                data: $data,
                pageSize: $pageSize,
                page: $page
            }){
                total
                data{
                    id firstName lastName email job recruitingContracts{id designation} profilePicture{id}
                }
            }
        }
    `;
    this.variables = variables;
  }
  mapFn(data) {
    return {
      total: data.users.total,
      data: data.users.data
    };
  }
};

// src/views/list/containers/UserListContainer.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var UserListContainer = () => {
  const t = useTranslationRoute2();
  const urlParams = useUrlParamsValue();
  const encodeUrl = useUrlParamsEncode();
  const breadcrumbItems = useUserListBreadCrumb();
  const filterControl = useUserListFilterForm();
  const { filter, setFilter } = useListFilterState(USER_LIST_ID);
  return /* @__PURE__ */ jsxs2("div", {
    className: "flex w-full h-max justify-center gap-5",
    children: [
      /* @__PURE__ */ jsxs2("section", {
        className: "sm:py-3 py-1 flex flex-col gap-5 bg-body-background flex-1",
        children: [
          /* @__PURE__ */ jsxs2("div", {
            className: "flex items-center justify-between",
            children: [
              /* @__PURE__ */ jsx2("h4", {
                className: "font-semibold",
                children: "Utilisateurs"
              }),
              /* @__PURE__ */ jsx2(Link2, {
                to: t(`recruiting/cv/create?${encodeUrl(urlParams)}`),
                children: /* @__PURE__ */ jsx2(Button, {
                  label: "Ajouter",
                  startIcon: "fa-solid fa-plus",
                  className: "flex items-center !bg-primary text-white gap-1 button-rounded-full"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsx2(BreadCrumb, {
            items: breadcrumbItems.reverse()
          }),
          /* @__PURE__ */ jsx2(Box, {
            title: "Liste des utilisateurs",
            className: "box-mb-0 flex flex-col gap-3",
            tools: /* @__PURE__ */ jsx2(Button, {
              label: "Ce mois",
              endIcon: "fa-solid fa-caret-down",
              className: "!bg-[#D9D9D9] button-rounded-full text-[#3E3A3A] [&>i]:text-white"
            }),
            children: /* @__PURE__ */ jsx2("div", {
              className: "publication-list-content flex w-full",
              children: /* @__PURE__ */ jsx2(List, {
                search: false,
                selection: false,
                id: USER_LIST_ID,
                GQLRequest: UserListQuery,
                defaultFilter: {
                  pageSize: 10,
                  page: 0
                },
                onRenderRow: (row) => /* @__PURE__ */ jsx2(UserListItem, {
                  userItem: row
                })
              })
            })
          })
        ]
      }),
      /* @__PURE__ */ jsx2(RightSidebar, {
        children: /* @__PURE__ */ jsx2(Box, {
          title: "Filter",
          icon: "fa-solid fa-filter",
          className: "h-full",
          children: /* @__PURE__ */ jsx2(ControlList, __spreadProps(__spreadValues({}, filterControl), {
            value: __spreadValues({}, filter == null ? void 0 : filter.data),
            onChange: (value) => setFilter((v) => __spreadProps(__spreadValues({}, v), {
              page: 0,
              data: __spreadValues(__spreadValues({}, v.data), value)
            }))
          }))
        })
      }),
      /* @__PURE__ */ jsx2(Outlet, {})
    ]
  });
};
var USER_LIST_ID = "UserManagement.Users.List";
var UserListContainer_default = UserListContainer;
export {
  USER_LIST_ID,
  UserListContainer_default as default
};
//# sourceMappingURL=UserListContainer-7UGDDWRP.js.map
