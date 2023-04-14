import 'react'
import {
  useBreadCrumb
} from "./chunk-IOBJJFIT.js";
import {
  Badge
} from "./chunk-UDGGNIU2.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-QM6VBZSE.js";

// src/views/Contract/container/ContractListContainer.tsx
import { Box, BreadCrumb, Button as Button2, ControlList, Dialog, GenericSuspense, List, RightSidebar, useListFilterState, useListGraphqlQuery } from "@mzara/component";
import { useState } from "react";

// src/views/Contract/hooks/useEmployeeContractForm.tsx
var useEmployeeContractForm = (id) => {
  return {
    data: {
      forms: [
        {
          type: "hidden",
          name: "id"
        },
        {
          type: "text",
          name: "designation",
          label: "Designation"
        },
        {
          type: "toggle",
          name: "isPublic",
          label: "Rendre publique"
        },
        {
          type: "lov-select",
          multiple: true,
          name: "tags",
          label: "tags",
          tp: "EMPOLYEE_CONTRACT_TAGS"
        },
        {
          type: "file",
          name: "file",
          label: "Pi\xE8ce jointe"
        }
      ],
      value: {},
      next: {
        label: "Ajouter le Contrat"
      },
      back: {
        label: "Annuler contrat"
      },
      graphQL: {
        entity: "employeeContract",
        entityId: id
      }
    },
    id: "employeeContracts-add-form"
  };
};

// src/views/Contract/query/EmployeeContactsQuery.tsx
var EmployeeContractsQuery = class {
  constructor(variables) {
    this.queryKey = "App.Harea.EmployeeContractsQuery";
    this.gql = `
    query EmployeeContractsQuery(
        $pageSize: Float,
        $page: Float,
        $data: JSONObject
    ) {
        employeeContracts(filter: {
            data: $data,
            pageSize: $pageSize,
            page: $page
        }){
            total
            data {
                id createdAt updatedAt designation userCreator{ id userName} isOwner isPublic isActive 
                file{ id name value } tags{id value tp}
            }
        }
    }
    `;
    this.variables = variables;
  }
  mapFn(data) {
    return {
      total: data.employeeContracts.total,
      data: data.employeeContracts.data
    };
  }
};

// src/views/Contract/components/ContractListItem.tsx
import { Button, IconButton, useTranslationRoute } from "@mzara/component";
import moment from "moment";
import { Link } from "react-router-dom";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var ContractListItem = ({ designation, creationDate, isPublic, id }) => {
  const t = useTranslationRoute();
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsxs("div", {
      className: "publication-list-item w-full flex gap-6 items-center justify-between px-1 pb-4 border-[#6C6868] border-b",
      children: [
        /* @__PURE__ */ jsxs("div", {
          className: "flex  flex-col gap-4 items-start",
          children: [
            /* @__PURE__ */ jsxs("div", {
              className: "flex justify-center items-center gap-6",
              children: [
                /* @__PURE__ */ jsx(Link, {
                  to: t(`recruiting/contract/${id}`),
                  children: /* @__PURE__ */ jsx("h4", {
                    className: "font-bold text-base sm:text-lg",
                    children: designation
                  })
                }),
                isPublic ? /* @__PURE__ */ jsx(Badge, {
                  className: "h-4 items-center",
                  label: "Publique",
                  color: "var(--primary)"
                }) : ""
              ]
            }),
            /* @__PURE__ */ jsxs("div", {
              className: "flex gap-2  items-center",
              children: [
                /* @__PURE__ */ jsx("i", {
                  className: "fa-solid fa-clock fa-md text-[#6C6868]"
                }),
                /* @__PURE__ */ jsx("p", {
                  children: moment(+creationDate).format("DD/MM/YYYY")
                }),
                /* @__PURE__ */ jsx(IconButton, {
                  icon: "fa-solid fa-file"
                })
              ]
            })
          ]
        }),
        /* @__PURE__ */ jsx(Button, {
          label: "T\xE9l\xE9charger",
          className: "!rounded-full !bg-primary text-white"
        })
      ]
    })
  });
};

// src/views/Contract/container/ContractListContainer.tsx
import _ from "lodash";

// src/views/Contract/hooks/useContractListFilterForm.tsx
var useContractListFilterForm = () => {
  return {
    data: {
      forms: [
        {
          type: "text",
          name: "designation_like",
          label: "Designation"
        },
        {
          type: "lov-select",
          multiple: true,
          name: "tags",
          label: "tags",
          tp: "EMPOLYEE_CONTRACT_TAGS"
        }
      ],
      value: {},
      hideFooter: true,
      graphQL: {
        entity: "employeeContract"
      }
    },
    id: "employeeContract-filter-form"
  };
};

// src/views/Contract/container/ContractListContainer.tsx
import { Fragment as Fragment2, jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var ContractListContainer = () => {
  var _a, _b, _c, _d;
  const { invalidateQuery } = useListGraphqlQuery(CONTRACT_LIST_ID);
  const { filter, setFilter } = useListFilterState(CONTRACT_LIST_ID);
  const controlFilter = useContractListFilterForm();
  const breadcrumbItems = useBreadCrumb();
  const [open, setOpen] = useState(false);
  const closeDialog = () => {
    setOpen(false);
    invalidateQuery();
  };
  const control = useEmployeeContractForm();
  return /* @__PURE__ */ jsx2(Fragment2, {
    children: /* @__PURE__ */ jsxs2("div", {
      className: "flex w-full h-max justify-center gap-4",
      children: [
        /* @__PURE__ */ jsxs2("section", {
          className: "sm:py-3 py-1 flex flex-col gap-5 bg-body-background flex-1",
          children: [
            /* @__PURE__ */ jsxs2("div", {
              className: "flex items-center justify-between",
              children: [
                /* @__PURE__ */ jsx2("h4", {
                  className: "font-semibold",
                  children: "Contrat"
                }),
                /* @__PURE__ */ jsx2(Button2, {
                  label: "Ajouter",
                  startIcon: "fa-solid fa-plus",
                  className: "flex items-center button-bg-primary text-white gap-1 button-rounded-full",
                  onClick: () => setOpen(true)
                })
              ]
            }),
            /* @__PURE__ */ jsx2(BreadCrumb, {
              items: breadcrumbItems.reverse()
            }),
            /* @__PURE__ */ jsx2(Box, {
              title: "Liste des contrats",
              className: "box-mb-0 flex flex-col gap-2",
              tools: /* @__PURE__ */ jsx2(Button2, {
                label: "Ce mois",
                endIcon: "fa-solid fa-caret-down",
                className: "!bg-[#D9D9D9] button-rounded-full text-[#3E3A3A] [&>i]:text-white"
              }),
              children: /* @__PURE__ */ jsx2("div", {
                className: "publication-list-content flex w-full",
                children: /* @__PURE__ */ jsx2(List, {
                  search: false,
                  selection: false,
                  id: CONTRACT_LIST_ID,
                  GQLRequest: EmployeeContractsQuery,
                  defaultFilter: {
                    pageSize: 10,
                    page: 0
                  },
                  onRenderRow: (row) => /* @__PURE__ */ jsx2(ContractListItem, {
                    designation: row == null ? void 0 : row.designation,
                    creationDate: row == null ? void 0 : row.createdAt,
                    isPublic: row == null ? void 0 : row.isPublic,
                    id: row == null ? void 0 : row.id
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
            children: /* @__PURE__ */ jsx2(ControlList, __spreadProps(__spreadValues({}, controlFilter), {
              value: __spreadProps(__spreadValues({}, filter == null ? void 0 : filter.data), {
                tags: !_.isEmpty((_a = filter == null ? void 0 : filter.data) == null ? void 0 : _a.tags.id_among) ? (_d = (_c = (_b = filter == null ? void 0 : filter.data) == null ? void 0 : _b.tags) == null ? void 0 : _c.id_among) == null ? void 0 : _d.map((item) => ({ id: item })) : void 0
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
          })
        }),
        /* @__PURE__ */ jsx2(Dialog, {
          open,
          title: "Ajouter un contrat",
          onDismiss: () => closeDialog(),
          children: /* @__PURE__ */ jsx2(GenericSuspense, {
            children: /* @__PURE__ */ jsx2(ControlList, __spreadProps(__spreadValues({}, control), {
              onSubmited: () => closeDialog(),
              onCancel: () => closeDialog()
            }))
          })
        })
      ]
    })
  });
};
var CONTRACT_LIST_ID = "Contract.List";
var ContractListContainer_default = ContractListContainer;
export {
  CONTRACT_LIST_ID,
  ContractListContainer_default as default
};
//# sourceMappingURL=ContractListContainer-QJLCATWG.js.map
