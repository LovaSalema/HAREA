import 'react'
import {
  Badge
} from "./chunk-UDGGNIU2.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-QM6VBZSE.js";

// src/views/Contract-details/container/ContractDetailsContainer.tsx
import { Box, BreadCrumb, Button, ControlList, Dialog, GenericSuspense, useFileUrl, useGraphqlDelete, useTranslationRoute } from "@mzara/component";
import moment from "moment";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// src/views/Contract-details/hooks/useBreadCrumbContract.tsx
var useBreadCrumbContract = () => {
  return [
    {
      label: "Home"
    },
    {
      label: "Template"
    },
    {
      label: "Contract"
    }
  ];
};

// src/views/Contract-details/hooks/useContractDetailsQuery.tsx
import { useGraphqlQuery } from "@mzara/component";

// src/views/Contract-details/query/ContractDetailsQuery.tsx
var ContractDetailsQuery = class {
  constructor(variables) {
    this.queryKey = "App.Harea.ContractDetailsQuery.details";
    this.gql = `
    query employeeContractDetails($id: Float){
        employeeContract(filter: {id : $id}) {
            id designation isPublic file{id name} tags{value tp }
        }
      
      }
    `;
    this.variables = variables;
  }
  mapFn(data) {
    return data.employeeContract;
  }
};

// src/views/Contract-details/hooks/useContractDetailsQuery.tsx
var useContractDetailsQuery = (id, suspense) => {
  return useGraphqlQuery(new ContractDetailsQuery({ id }), { enabled: id !== void 0, suspense });
};

// src/views/Contract-details/hooks/useContractEditForm.tsx
var useContractEditForm = (id) => {
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
        }
      ],
      value: {},
      next: {
        label: "Modifier le Contrat"
      },
      back: {
        label: "Annuler la modification"
      },
      graphQL: {
        entity: "employeeContract",
        entityId: id
      }
    },
    id: "employeeContractsEdit-add-form"
  };
};

// src/views/Contract-details/container/ContractDetailsContainer.tsx
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var ContractDetailsContainer = () => {
  const { id } = useParams();
  const { data, invalidateQuery } = useContractDetailsQuery(parseInt(id), true);
  const FileUrl = useFileUrl();
  const breadcrumbItems = useBreadCrumbContract();
  const deleteMutation = useGraphqlDelete("employeeContract");
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [url, setUrl] = useState("");
  const handleOnDownload = (id2) => {
    setUrl(FileUrl(id2));
  };
  const control = useContractEditForm(parseInt(id));
  const handleOnEdit = () => {
    setOpen(true);
  };
  const closeDialog = () => {
    setOpen(false);
    invalidateQuery();
  };
  const handleOnDelete = () => {
    setOpenDelete(true);
  };
  const navigate = useNavigate();
  const t = useTranslationRoute();
  const handleDeleteConfirmed = () => {
    deleteMutation.mutate({
      ids: data == null ? void 0 : data.id
    }, {
      onSuccess: () => {
        invalidateQuery();
        setOpenDelete(false);
        navigate(t("recruiting/contract"));
      }
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [
      /* @__PURE__ */ jsxs("div", {
        className: "flex flex-col gap-4 w-full justify-start ",
        children: [
          /* @__PURE__ */ jsxs("section", {
            className: "py-3 pl-5 pr-3 flex flex-1 flex-col gap-5",
            children: [
              /* @__PURE__ */ jsx("h3", {
                children: "D\xE9tails de Contrat "
              }),
              /* @__PURE__ */ jsx(BreadCrumb, {
                items: breadcrumbItems
              }),
              /* @__PURE__ */ jsx(Box, {
                children: /* @__PURE__ */ jsxs("div", {
                  className: "flex gap-12 items-center justify-between",
                  children: [
                    /* @__PURE__ */ jsxs("div", {
                      className: "flex flex-col gap-6",
                      children: [
                        /* @__PURE__ */ jsxs("div", {
                          className: "flex gap-4 items-center",
                          children: [
                            /* @__PURE__ */ jsx("h4", {
                              children: data.designation
                            }),
                            data.isPublic ? /* @__PURE__ */ jsx(Badge, {
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
                              children: moment(data.createdAt).format("DD/MM/YYYY")
                            })
                          ]
                        })
                      ]
                    }),
                    /* @__PURE__ */ jsxs("div", {
                      className: "flex flex-col gap-12",
                      children: [
                        /* @__PURE__ */ jsxs("div", {
                          className: "flex gap-4",
                          children: [
                            /* @__PURE__ */ jsx(Button, {
                              label: "Supprimer",
                              className: "!rounded-full !bg-danger h-8 text-white",
                              onClick: handleOnDelete
                            }),
                            /* @__PURE__ */ jsx(Button, {
                              label: "Modifier",
                              className: "!rounded-full !bg-[#023e96] h-8 text-white",
                              onClick: () => handleOnEdit()
                            })
                          ]
                        }),
                        (data == null ? void 0 : data.file) && /* @__PURE__ */ jsx("div", {
                          className: "flex w-full justify-end",
                          children: /* @__PURE__ */ jsx("a", {
                            href: url,
                            children: /* @__PURE__ */ jsx(Button, {
                              label: "T\xE9l\xE9charger",
                              className: "!rounded-full button-bg-primary h-8 text-white",
                              onClick: () => {
                                var _a;
                                return handleOnDownload((_a = data == null ? void 0 : data.file) == null ? void 0 : _a.id);
                              }
                            })
                          })
                        })
                      ]
                    })
                  ]
                })
              })
            ]
          }),
          /* @__PURE__ */ jsx(Dialog, {
            open,
            title: "Modifier le contrat",
            onDismiss: () => closeDialog(),
            children: /* @__PURE__ */ jsx(GenericSuspense, {
              children: /* @__PURE__ */ jsx(ControlList, __spreadProps(__spreadValues({}, control), {
                onSubmited: () => closeDialog(),
                onCancel: () => closeDialog()
              }))
            })
          })
        ]
      }),
      /* @__PURE__ */ jsx(Dialog, {
        open: openDelete,
        onDismiss: () => setOpenDelete(false),
        onCancel: () => setOpenDelete(false),
        onConfirm: () => handleDeleteConfirmed(),
        title: "\xEAtes-vous s\xFBre?",
        btnOk: { label: "Ok", isSubmit: deleteMutation.isLoading },
        btnCancel: { label: "Annuler" }
      })
    ]
  });
};
var ContractDetailsContainer_default = ContractDetailsContainer;
export {
  ContractDetailsContainer_default as default
};
//# sourceMappingURL=ContractDetailsContainer-6JTTELBX.js.map
