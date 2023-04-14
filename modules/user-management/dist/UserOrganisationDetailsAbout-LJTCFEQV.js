import 'react'
import {
  useUserOrganisationRoleFormValue
} from "./chunk-TRTEVNCF.js";
import {
  useUserOrganisationEditForm
} from "./chunk-RDLPIISI.js";
import {
  useUserOrganisationDetailsQuery
} from "./chunk-FMGK7GP5.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-MT53WDPF.js";

// src/views/organisation/views/about/containers/UserOrganisationDetailsAbout.tsx
import { Box as Box2, ControlList as ControlList2, List as List2, Metadata, useTranslationRoute as useTranslationRoute2, useTranslations as useTranslations3 } from "@mzara/component";
import { useMemo as useMemo4 } from "react";
import { Link as Link2, useParams } from "react-router-dom";

// src/views/organisation/views/about/components/UserList.tsx
import { Box, Chip, List, useTranslationRoute, useTranslations as useTranslations2 } from "@mzara/component";
import { useMemo as useMemo3, useState as useState2 } from "react";
import { Link } from "react-router-dom";

// src/views/organisation/views/about/components/UserAddForm.tsx
import { ControlList, Dialog } from "@mzara/component";

// src/views/organisation/views/about/hooks/useUserAffiliateControlList.tsx
import { useTranslation } from "@mzara/component";
import { useMemo } from "react";
var useUserAffiliateControlList = () => {
  const t = useTranslation();
  return useMemo(() => {
    return {
      data: {
        forms: [
          {
            type: "select",
            multiple: true,
            name: "users",
            label: t("std_users")
          }
        ]
      }
    };
  }, []);
};

// src/views/organisation/views/about/components/UserAddForm.tsx
import { jsx } from "react/jsx-runtime";
var UserAddForm = (props) => {
  const control = useUserAffiliateControlList();
  const handleSubmit = () => {
  };
  return /* @__PURE__ */ jsx(Dialog, __spreadProps(__spreadValues({}, props), {
    children: /* @__PURE__ */ jsx(ControlList, __spreadProps(__spreadValues({}, control), {
      onSubmit: handleSubmit
    }))
  }));
};

// src/views/organisation/views/about/components/UserListFilter.tsx
import { useTranslations } from "@mzara/component";
import { useState } from "react";

// src/views/organisation/views/about/hooks/useUserFilterMenu.ts
import { useTranslation as useTranslation2 } from "@mzara/component";
import { useMemo as useMemo2 } from "react";
var useUserFilterMenu = (id) => {
  const t = useTranslation2();
  const { data } = useUserOrganisationDetailsQuery(id, true);
  return useMemo2(() => {
    return [
      {
        id: void 0,
        label: t("std_all")
      },
      ...data.groups.map((item) => ({
        id: item.id,
        label: item.designation
      }))
    ];
  }, [data]);
};

// src/views/organisation/views/about/components/UserListFilter.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var UserListFilter = (props) => {
  const [
    USERS,
    INVITE
  ] = useTranslations(i18n);
  const [anchorEl, setAnchorEl] = useState();
  const menus = useUserFilterMenu(props.id);
  return /* @__PURE__ */ jsx2("span", {
    className: "flex justify-between",
    children: /* @__PURE__ */ jsx2("span", {
      children: USERS
    })
  });
};
var i18n = [
  "std_users",
  "std_invite"
];

// src/views/organisation/views/about/components/UserList.tsx
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
var UserList = (props) => {
  const [
    USERS
  ] = useTranslations2(i18n2);
  const { data } = useUserOrganisationDetailsQuery(props.id, true);
  const translatedRoute = useTranslationRoute();
  const [openInvitation, setOpenInvitation] = useState2(false);
  const users = useMemo3(() => {
    return data.groups.reduce((all, item) => {
      return all.concat(item.users);
    }, []).reduce((all, item) => {
      if (!all.some((item1) => item1.id === item.id)) {
        all.push(item);
      }
      return all;
    }, []);
  }, [data]);
  return /* @__PURE__ */ jsxs(Box, {
    className: "box-transparent p-0",
    title: /* @__PURE__ */ jsx3(UserListFilter, {
      id: props.id,
      onAddClick: () => setOpenInvitation(true)
    }),
    children: [
      /* @__PURE__ */ jsx3(List, {
        rows: users,
        pagination: false,
        search: false,
        selection: false,
        onRenderRow: (row) => /* @__PURE__ */ jsxs("div", {
          className: "flex flex-col gap-2",
          children: [
            /* @__PURE__ */ jsx3("h5", {
              className: "font-bold",
              children: /* @__PURE__ */ jsx3(Link, {
                to: translatedRoute(`user/${row.id}`),
                children: row.fullName
              })
            }),
            /* @__PURE__ */ jsx3("div", {
              className: "flex gap-2",
              children: row.groups.map((group) => /* @__PURE__ */ jsx3(Chip, {
                url: translatedRoute(`user/organisation/role/${group.id}`),
                label: group.designation
              }, group.id))
            })
          ]
        })
      }),
      /* @__PURE__ */ jsx3(UserAddForm, {
        open: openInvitation,
        onDismiss: () => setOpenInvitation(false)
      })
    ]
  });
};
var i18n2 = [
  "std_users"
];

// src/views/organisation/views/about/containers/UserOrganisationDetailsAbout.tsx
import { jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
var UserOrganisationDetailsAbout = () => {
  const [
    INFO,
    METADATA_KEY_LABEL,
    METADATA_DESIGNATION_LABEL,
    METADATA_COMMENTS_LABEL,
    ROLES_TITLE,
    USERS,
    GROUP_TITLE
  ] = useTranslations3(i18n3);
  const { id } = useParams();
  const { data } = useUserOrganisationDetailsQuery(parseInt(id), true);
  const [, rolesForm] = useUserOrganisationEditForm();
  const rolesValue = useUserOrganisationRoleFormValue(parseInt(id));
  const translatedRoute = useTranslationRoute2();
  const groups = useMemo4(() => {
    return data.groups;
  }, [data]);
  return /* @__PURE__ */ jsxs2("div", {
    className: "flex gap-5",
    children: [
      /* @__PURE__ */ jsxs2("div", {
        className: "basis-8/12 flex flex-col gap-5",
        children: [
          /* @__PURE__ */ jsxs2(Box2, {
            title: INFO,
            className: "flex flex-col gap-3 ",
            children: [
              /* @__PURE__ */ jsx4(Metadata, {
                label: METADATA_KEY_LABEL,
                value: data.organisationKey
              }),
              /* @__PURE__ */ jsx4(Metadata, {
                label: METADATA_DESIGNATION_LABEL,
                value: data.designation
              }),
              /* @__PURE__ */ jsx4(Metadata, {
                label: METADATA_COMMENTS_LABEL,
                value: data.comment
              })
            ]
          }),
          /* @__PURE__ */ jsx4(Box2, {
            className: "basis-8/12",
            title: ROLES_TITLE,
            children: /* @__PURE__ */ jsx4(ControlList2, __spreadProps(__spreadValues({}, rolesForm), {
              data: __spreadProps(__spreadValues({}, rolesForm.data), {
                hideFooter: true
              }),
              value: rolesValue,
              readonly: true
            }))
          })
        ]
      }),
      /* @__PURE__ */ jsxs2("div", {
        className: "basis-4/12 flex flex-col gap-5",
        children: [
          /* @__PURE__ */ jsx4(Box2, {
            className: "box-transparent p-0",
            title: GROUP_TITLE,
            children: /* @__PURE__ */ jsx4(List2, {
              rows: groups,
              pagination: false,
              search: false,
              selection: false,
              onRenderRow: (row) => /* @__PURE__ */ jsxs2("div", {
                children: [
                  /* @__PURE__ */ jsx4("h5", {
                    className: "font-bold",
                    children: /* @__PURE__ */ jsx4(Link2, {
                      to: translatedRoute(`user/organisation/role/${row.id}`),
                      children: row.designation
                    })
                  }),
                  /* @__PURE__ */ jsxs2("ul", {
                    className: "flex items-center sm:gap-10 gap-4",
                    children: [
                      /* @__PURE__ */ jsxs2("li", {
                        className: "flex items-center gap-1",
                        children: [
                          /* @__PURE__ */ jsx4("i", {
                            className: "fa-solid fa-key text-[#6C6868]"
                          }),
                          /* @__PURE__ */ jsx4("span", {
                            className: "text-[12px]",
                            children: row.groupKey
                          })
                        ]
                      }),
                      /* @__PURE__ */ jsxs2("li", {
                        className: "flex items-center gap-1",
                        children: [
                          /* @__PURE__ */ jsx4("i", {
                            title: USERS,
                            className: "fa-solid fa-users text-[#6C6868]"
                          }),
                          /* @__PURE__ */ jsx4("span", {
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
          }),
          /* @__PURE__ */ jsx4(UserList, {
            id: parseInt(id)
          })
        ]
      })
    ]
  });
};
var UserOrganisationDetailsAbout_default = UserOrganisationDetailsAbout;
var i18n3 = [
  "std_info",
  "Generic.UserOrganisation.form.Metadata.Key.label",
  "Generic.UserOrganisation.form.Metadata.Designation.label",
  "Generic.UserOrganisation.form.Metadata.Comments.label",
  "Generic.UserOrganisation.form.Roles.title",
  "std_users",
  "Generic.UserOrganisation.form.Group.title"
];
export {
  UserOrganisationDetailsAbout_default as default
};
//# sourceMappingURL=UserOrganisationDetailsAbout-LJTCFEQV.js.map
