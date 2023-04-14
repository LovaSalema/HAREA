import 'react'
import {
  useStateCvItems
} from "./chunk-QY73VEYP.js";
import {
  useBreadCrumb
} from "./chunk-IOBJJFIT.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-QM6VBZSE.js";

// src/views/CV/container/CVListContainer.tsx
import {
  Box,
  BreadCrumb,
  Button,
  ControlList,
  Dropdown,
  List,
  Menu,
  RightSidebar,
  useListFilterState,
  useTranslationRoute as useTranslationRoute2,
  useUrlParamsEncode,
  useUrlParamsValue
} from "@mzara/component";
import _ from "lodash";
import { Link as Link2, Outlet } from "react-router-dom";

// src/views/CV/hooks/useCurriculumVitaeFilterForm.ts
var useCurriculumVitaeFilterForm = () => {
  return {
    data: {
      forms: [
        {
          type: "text",
          name: "name_like",
          label: "Nom"
        },
        {
          type: "de-select",
          name: "state",
          label: "Etat",
          multiple: true,
          tp: "RECRUITING_CV_STATE",
          className: "scroll-selected"
        },
        {
          type: "select",
          name: "recrutingAdvert",
          label: "Annonce",
          multiple: true,
          GQLProps: {
            gql,
            labelProp: "title",
            valueProp: "id",
            rootProp: "recruitingAdverts.data"
          }
        }
      ],
      hideFooter: true,
      value: {},
      next: {},
      back: {},
      graphQL: {
        entity: "recruitingCuriculumVitae"
      }
    },
    id: "curriculumVitae-filter-form"
  };
};
var gql = `
    query RecruitingAdvertsSelectQuery{
        recruitingAdverts{
            total 
            data {
                id title
            }
        }
    }
`;

// src/views/CV/query/CurriculumVitaeListQuery.ts
var CurriculumVitaeListQuery = class {
  constructor(variables) {
    this.queryKey = "App.Harea.RecruitingCuriculumVitaesQuery";
    this.gql = `
        query CurriculumVitaeListQuery(
            $pageSize: Float,
            $page: Float,
            $data: JSONObject
        ){
            recruitingCuriculumVitaes(filter: {
                data: $data,
                pageSize: $pageSize,
                page: $page
            }){
                total data {
                    id name state{value} recrutingAdvert{
                        id title
                    }
                }
            }
        }
    `;
    this.variables = variables;
  }
  mapFn(data) {
    return {
      total: data.recruitingCuriculumVitaes.total,
      data: data.recruitingCuriculumVitaes.data
    };
  }
};

// src/views/CV/components/CurriculumVitaeItem.tsx
import {
  Chip,
  IconButton,
  useCdnAssets,
  useTranslationRoute
} from "@mzara/component";
import { Link } from "react-router-dom";
import { jsx, jsxs } from "react/jsx-runtime";
var CurriculumVitaeItem = (_a) => {
  var _b = _a, {
    name,
    advertName,
    id,
    state
  } = _b, props = __objRest(_b, [
    "name",
    "advertName",
    "id",
    "state"
  ]);
  const cdn = useCdnAssets();
  const t = useTranslationRoute();
  return /* @__PURE__ */ jsxs("div", __spreadProps(__spreadValues({
    className: "flex items-center justify-between w-full pt-2 pb-5 px-3 border-b"
  }, props), {
    children: [
      /* @__PURE__ */ jsxs("div", {
        className: "flex items-start gap-5",
        children: [
          /* @__PURE__ */ jsx("div", {
            className: "object-cover object-center rounded-full w-12 h-12 overflow-hidden",
            children: /* @__PURE__ */ jsx("img", {
              src: cdn("/img/isa/profile-user.png"),
              alt: ""
            })
          }),
          /* @__PURE__ */ jsxs("div", {
            className: "flex flex-col gap-1",
            children: [
              /* @__PURE__ */ jsx("h6", {
                className: "font-semibold",
                children: name || "Unknown"
              }),
              (state == null ? void 0 : state.value) && /* @__PURE__ */ jsx(Chip, {
                label: stateDict[state == null ? void 0 : state.value],
                color: `${ColorState[state.value]}`,
                className: "text-xs  rounded-full w-fit px-2"
              }),
              /* @__PURE__ */ jsxs("span", {
                children: [
                  "Annonce: ",
                  /* @__PURE__ */ jsxs("strong", {
                    children: [
                      " ",
                      advertName,
                      " "
                    ]
                  })
                ]
              })
            ]
          })
        ]
      }),
      /* @__PURE__ */ jsx(Link, {
        to: t(`recruiting/cv/${id}/details`),
        children: /* @__PURE__ */ jsx(IconButton, {
          icon: "fa-solid fa-angle-right"
        })
      })
    ]
  }));
};
var stateDict = {
  "NEW": "Nouveau",
  "TESTING": "En cours de teste",
  "INTERVIEW": "Entretien",
  "REJECTED": "Rejet\xE9"
};
var ColorState = {
  "NEW": "#48496C",
  "TESTING": "#17a2b8",
  "INTERVIEW": "#110ee438",
  "REJECTED": "#E4260E"
};

// src/views/CV/container/CVListContainer.tsx
import { useState } from "react";
import { Fragment, jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var CVListContainer = () => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const breadcrumbItems = useBreadCrumb();
  const urlParams = useUrlParamsValue();
  const encodeUrl = useUrlParamsEncode();
  const t = useTranslationRoute2();
  const filterControl = useCurriculumVitaeFilterForm();
  const { filter, setFilter } = useListFilterState(CURRICULUM_LIST_ID);
  const [anchorEl, setAnchorEl] = useState();
  const menuStateItems = useStateCvItems();
  const dropDownMenuState = [
    { id: void 0, label: "Toutes" },
    ...menuStateItems
  ];
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
                children: "Curriculum Vitaes"
              }),
              /* @__PURE__ */ jsx2(Link2, {
                to: t(`recruiting/cv/create?${encodeUrl(urlParams)}`),
                children: /* @__PURE__ */ jsx2(Button, {
                  label: "Ajouter",
                  startIcon: "fa-solid fa-plus",
                  className: "flex items-center button-bg-primary text-white gap-1 button-rounded-full"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsx2(BreadCrumb, {
            items: breadcrumbItems.reverse()
          }),
          /* @__PURE__ */ jsx2(Box, {
            title: "Liste des CV",
            className: "box-mb-0 flex flex-col gap-3",
            tools: /* @__PURE__ */ jsxs2(Fragment, {
              children: [
                /* @__PURE__ */ jsx2("a", {
                  href: "",
                  onClick: (e) => {
                    setAnchorEl(e.currentTarget);
                    e.preventDefault();
                  },
                  children: /* @__PURE__ */ jsx2(Button, {
                    label: (_a = dropDownMenuState.find((state) => {
                      var _a2, _b2;
                      return state.id == ((_b2 = (_a2 = filter == null ? void 0 : filter.data) == null ? void 0 : _a2.state) == null ? void 0 : _b2.id);
                    })) == null ? void 0 : _a.label,
                    endIcon: "fa-solid fa-caret-down",
                    className: "!bg-[#D9D9D9] button-rounded-full text-[#3E3A3A] [&>i]:text-white"
                  })
                }),
                /* @__PURE__ */ jsx2(Dropdown, {
                  anchorEl,
                  arrow: true,
                  placement: "bottom-end",
                  onClose: () => setAnchorEl(void 0),
                  children: /* @__PURE__ */ jsx2(Menu, {
                    items: dropDownMenuState,
                    onClick: (menu) => {
                      setFilter((v) => __spreadProps(__spreadValues({}, v), {
                        page: 0,
                        data: __spreadProps(__spreadValues({}, v.data), {
                          state: {
                            id: menu.id
                          }
                        })
                      }));
                      setAnchorEl(void 0);
                    }
                  })
                })
              ]
            }),
            children: /* @__PURE__ */ jsx2("div", {
              className: "publication-list-content flex w-full",
              children: /* @__PURE__ */ jsx2(List, {
                search: false,
                selection: false,
                id: CURRICULUM_LIST_ID,
                GQLRequest: CurriculumVitaeListQuery,
                defaultFilter: {
                  pageSize: 10,
                  page: 0
                },
                onRenderRow: (row) => {
                  var _a2;
                  return /* @__PURE__ */ jsx2(CurriculumVitaeItem, {
                    id: row == null ? void 0 : row.id,
                    name: row == null ? void 0 : row.name,
                    advertName: (_a2 = row == null ? void 0 : row.recrutingAdvert) == null ? void 0 : _a2.title,
                    state: row == null ? void 0 : row.state
                  });
                }
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
            value: __spreadProps(__spreadValues({}, filter == null ? void 0 : filter.data), {
              recrutingAdvert: !_.isEmpty(
                (_b = filter == null ? void 0 : filter.data) == null ? void 0 : _b.recrutingAdvert.id_among
              ) ? (_d = (_c = filter == null ? void 0 : filter.data) == null ? void 0 : _c.recrutingAdvert) == null ? void 0 : _d.id_among : void 0,
              state: !_.isEmpty((_e = filter == null ? void 0 : filter.data) == null ? void 0 : _e.state.id_among) ? (_h = (_g = (_f = filter == null ? void 0 : filter.data) == null ? void 0 : _f.state) == null ? void 0 : _g.id_among) == null ? void 0 : _h.map(
                (item) => ({ id: item })
              ) : void 0
            }),
            onChange: (value) => setFilter((v) => {
              var _a2;
              return __spreadProps(__spreadValues({}, v), {
                page: 0,
                data: __spreadProps(__spreadValues(__spreadValues({}, v.data), value), {
                  recrutingAdvert: {
                    id_among: value.recrutingAdvert
                  },
                  state: {
                    id_among: (_a2 = value.state) == null ? void 0 : _a2.map(
                      (item) => item.id
                    )
                  }
                })
              });
            })
          }))
        })
      }),
      /* @__PURE__ */ jsx2(Outlet, {})
    ]
  });
};
var CURRICULUM_LIST_ID = "CurriculumVitae.List";
var CVListContainer_default = CVListContainer;

export {
  CURRICULUM_LIST_ID,
  CVListContainer_default
};
//# sourceMappingURL=chunk-YFGHKRWF.js.map
