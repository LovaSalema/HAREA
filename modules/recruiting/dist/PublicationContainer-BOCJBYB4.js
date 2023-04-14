import 'react'
import {
  useBreadCrumb
} from "./chunk-IOBJJFIT.js";
import {
  useRecruitingAdvertsForm
} from "./chunk-SMGZAMIV.js";
import {
  Badge
} from "./chunk-UDGGNIU2.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-QM6VBZSE.js";

// src/views/publication/containers/PublicationContainer.tsx
import { useState as useState2 } from "react";
import {
  Box,
  BreadCrumb,
  Button,
  ControlList,
  Dialog,
  GenericSuspense,
  List,
  RightSidebar,
  useListFilterState,
  useListGraphqlQuery
} from "@mzara/component";

// src/views/publication/components/PublicationListItem.tsx
import { Chip, IconButton, useCdnAssets, useTranslationRoute } from "@mzara/component";
import moment from "moment";
import { Link } from "react-router-dom";

// src/views/publication/hooks/useBreakPoint.ts
import { useState, useEffect, useCallback } from "react";
var useBreakpoints = () => {
  const evalBreakPoint = useCallback(() => {
    return {
      xs: window.matchMedia("(max-width: 639px)").matches,
      sm: window.matchMedia("(max-width: 768px)").matches,
      md: window.matchMedia("(max-width: 1024px)").matches,
      lg: window.matchMedia("(max-width: 1280px)").matches,
      xl: window.matchMedia("(max-width: 1535px)").matches,
      xxl: window.matchMedia("(min-width: 1536px)").matches
    };
  }, []);
  const [breakpoints, setBreakpoints] = useState(evalBreakPoint());
  useEffect(() => {
    const handleResize = () => {
      setBreakpoints(evalBreakPoint());
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return breakpoints;
};

// src/views/publication/components/PublicationListItem.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var PublicationListItem = ({ advert }) => {
  var _a, _b, _c, _d;
  const cdn = useCdnAssets();
  const t = useTranslationRoute();
  const breakPoint = useBreakpoints();
  return /* @__PURE__ */ jsxs("div", {
    className: "publication-list-item w-full flex items-center justify-between px-1 pb-4 border-[#6C6868] border-b",
    children: [
      /* @__PURE__ */ jsxs("div", {
        className: "flex flex-col gap-5",
        children: [
          /* @__PURE__ */ jsxs("div", {
            className: "flex flex-col",
            children: [
              /* @__PURE__ */ jsxs("div", {
                className: "flex items-center gap-3",
                children: [
                  /* @__PURE__ */ jsx(Link, {
                    to: breakPoint.xs ? t(`recruiting/publication/details/${advert == null ? void 0 : advert.id}`) : t(`recruiting/publication/viewer/${advert == null ? void 0 : advert.id}`),
                    children: /* @__PURE__ */ jsx("h4", {
                      className: "font-bold text-base sm:text-lg",
                      children: advert == null ? void 0 : advert.title
                    })
                  }),
                  !(advert == null ? void 0 : advert.state) && /* @__PURE__ */ jsx(Badge, {
                    label: "Nouveau",
                    color: "var(--primary)"
                  }),
                  ((_a = advert == null ? void 0 : advert.state) == null ? void 0 : _a.value) === "CLOSED" && /* @__PURE__ */ jsx(Badge, {
                    label: "Ferm\xE9",
                    color: "#E4260E"
                  })
                ]
              }),
              /* @__PURE__ */ jsx("span", {
                className: "text-xs",
                children: advert == null ? void 0 : advert.description
              })
            ]
          }),
          /* @__PURE__ */ jsxs("ul", {
            className: "flex items-center sm:gap-10 gap-4",
            children: [
              /* @__PURE__ */ jsxs("li", {
                className: "flex items-center gap-1",
                children: [
                  /* @__PURE__ */ jsx("i", {
                    className: "fa-solid fa-clock text-[#6C6868]"
                  }),
                  /* @__PURE__ */ jsx("span", {
                    className: "text-xs",
                    children: moment(+(advert == null ? void 0 : advert.createdAt)).isValid() ? moment(+(advert == null ? void 0 : advert.createdAt)).format("DD/MM/YYYY") : advert == null ? void 0 : advert.createdAt
                  })
                ]
              }),
              /* @__PURE__ */ jsxs("li", {
                className: "flex items-center gap-1",
                children: [
                  /* @__PURE__ */ jsx("i", {
                    className: "fa-solid fa-clock text-danger"
                  }),
                  /* @__PURE__ */ jsx("span", {
                    className: "text-xs",
                    children: `Fin: ${moment(advert == null ? void 0 : advert.dateEnd).isValid() ? moment(advert == null ? void 0 : advert.dateEnd).format("DD/MM/YYYY") : "None"}`
                  })
                ]
              }),
              /* @__PURE__ */ jsxs("li", {
                className: "flex items-center gap-1",
                children: [
                  /* @__PURE__ */ jsx("span", {
                    className: "w-[16px] h-[16px] flex justify-center",
                    children: /* @__PURE__ */ jsx("img", {
                      className: "w-full h-full",
                      src: cdn("/img/icon/file-cv.svg"),
                      alt: "icon-menu"
                    })
                  }),
                  /* @__PURE__ */ jsxs("span", {
                    className: "text-[12px]",
                    children: [
                      (_b = advert == null ? void 0 : advert.cvs) == null ? void 0 : _b.length,
                      " : CV"
                    ]
                  })
                ]
              }),
              /* @__PURE__ */ jsxs("li", {
                className: "flex items-center gap-1",
                children: [
                  /* @__PURE__ */ jsx("i", {
                    className: "fa-solid fa-layer-group text-[#6C6868]"
                  }),
                  /* @__PURE__ */ jsx("span", {
                    className: "text-[12px]",
                    children: ((_c = advert == null ? void 0 : advert.category) == null ? void 0 : _c.value) || "Non class\xE9"
                  })
                ]
              })
            ]
          }),
          /* @__PURE__ */ jsx("div", {
            className: "flex items-center gap-2",
            children: (_d = advert == null ? void 0 : advert.tags) == null ? void 0 : _d.map((tag) => /* @__PURE__ */ jsx(Chip, {
              label: tag.value,
              color: tag.color,
              className: "px-2 rounded-full text-xs py-1"
            }))
          })
        ]
      }),
      /* @__PURE__ */ jsx(Link, {
        to: t(`recruiting/publication/${advert == null ? void 0 : advert.id}/about`),
        children: /* @__PURE__ */ jsx(IconButton, {
          icon: "fa-solid fa-angle-right",
          className: "text-[#807B7B]"
        })
      })
    ]
  });
};

// src/views/publication/containers/PublicationContainer.tsx
import { Outlet } from "react-router-dom";

// src/views/publication/query/RecruitingAdvertsQuery.ts
var RecruitingAdvertsQuery = class {
  constructor(variables) {
    this.queryKey = "App.Harea.RecruitingAdvertsQuery";
    this.gql = `
        query RecruitingAdvertsQuery(
            $pageSize: Float,
            $page: Float,
            $data: JSONObject
        ) {
            recruitingAdverts(filter: {
                data: $data,
                pageSize: $pageSize,
                page: $page
            }){
                total
                data {
                  id title createdAt dateEnd description tags{value color} cvs{id} state{id value} category{ value }
                }
            }
        }
    `;
    this.variables = variables;
  }
  mapFn(data) {
    return {
      total: data.recruitingAdverts.total,
      data: data.recruitingAdverts.data
    };
  }
};

// src/views/publication/hooks/usePublicationFilterForm.ts
var usePublicationFilterForm = () => {
  return {
    data: {
      forms: [
        {
          type: "de-select",
          multiple: true,
          name: "category",
          label: "Categorie",
          tp: "RECRUITING_ADVERT_CATEGORY"
        },
        {
          type: "text",
          name: "title_like",
          label: "Titre"
        },
        {
          type: "date",
          name: "dateEnd",
          label: "Date limite"
        },
        {
          type: "lov-select",
          multiple: true,
          name: "tags",
          label: "tags",
          tp: "RECRUITING_ADVERT_TAGS"
        }
      ],
      value: {},
      hideFooter: true,
      graphQL: {
        entity: "recruitingAdvert"
      }
    },
    id: "publication-filter-form"
  };
};

// src/views/publication/containers/PublicationContainer.tsx
import _ from "lodash";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var PublicationContainer = () => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const { invalidateQuery } = useListGraphqlQuery(PUBLICATION_LIST_ID);
  const controlFilter = usePublicationFilterForm();
  const breadcrumbItems = useBreadCrumb();
  const [open, setOpen] = useState2(false);
  const closeDialog = () => {
    invalidateQuery();
    setOpen(false);
  };
  const control = useRecruitingAdvertsForm();
  const { filter, setFilter } = useListFilterState(PUBLICATION_LIST_ID);
  return /* @__PURE__ */ jsxs2("div", {
    className: "flex w-full h-max justify-center gap-4",
    children: [
      /* @__PURE__ */ jsxs2("section", {
        className: "sm:py-3 py-1 flex flex-col gap-5 !bg-body-background flex-1",
        children: [
          /* @__PURE__ */ jsxs2("div", {
            className: "flex items-center justify-between",
            children: [
              /* @__PURE__ */ jsx2("h4", {
                className: "font-semibold",
                children: "Annonce"
              }),
              /* @__PURE__ */ jsx2(Button, {
                label: "Ajouter",
                startIcon: "fa-solid fa-plus",
                className: "flex items-center !bg-primary text-white gap-1 !rounded-full",
                onClick: () => setOpen(true)
              })
            ]
          }),
          /* @__PURE__ */ jsx2(BreadCrumb, {
            items: breadcrumbItems.reverse()
          }),
          /* @__PURE__ */ jsx2(Box, {
            title: "Liste des annonces",
            className: "box-mb-0 flex flex-col gap-2",
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
                id: PUBLICATION_LIST_ID,
                GQLRequest: RecruitingAdvertsQuery,
                defaultFilter: {
                  pageSize: 10,
                  page: 0
                },
                onRenderRow: (row, index) => /* @__PURE__ */ jsx2(PublicationListItem, {
                  advert: row
                }, index)
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
              tags: !_.isEmpty((_a = filter == null ? void 0 : filter.data) == null ? void 0 : _a.tags.id_among) ? (_d = (_c = (_b = filter == null ? void 0 : filter.data) == null ? void 0 : _b.tags) == null ? void 0 : _c.id_among) == null ? void 0 : _d.map((item) => ({ id: item })) : void 0,
              category: !_.isEmpty((_e = filter == null ? void 0 : filter.data) == null ? void 0 : _e.category.id_among) ? (_h = (_g = (_f = filter == null ? void 0 : filter.data) == null ? void 0 : _f.category) == null ? void 0 : _g.id_among) == null ? void 0 : _h.map((item) => ({ id: item })) : void 0
            }),
            onChange: (value) => setFilter((v) => {
              var _a2, _b2;
              return __spreadProps(__spreadValues({}, v), {
                page: 0,
                data: __spreadProps(__spreadValues(__spreadValues({}, v.data), value), {
                  tags: {
                    id_among: (_a2 = value.tags) == null ? void 0 : _a2.map((item) => item.id)
                  },
                  category: {
                    id_among: (_b2 = value.category) == null ? void 0 : _b2.map((item) => item.id)
                  }
                })
              });
            })
          }))
        })
      }),
      /* @__PURE__ */ jsx2(GenericSuspense, {
        children: /* @__PURE__ */ jsx2(Outlet, {})
      }),
      /* @__PURE__ */ jsx2(Dialog, {
        open,
        title: "Ajouter une annonce",
        onDismiss: () => closeDialog(),
        children: /* @__PURE__ */ jsx2(GenericSuspense, {
          children: /* @__PURE__ */ jsx2(ControlList, __spreadProps(__spreadValues({}, control), {
            onSubmited: () => closeDialog(),
            onCancel: () => closeDialog()
          }))
        })
      })
    ]
  });
};
var PUBLICATION_LIST_ID = "Publication.List";
var PublicationContainer_default = PublicationContainer;
export {
  PUBLICATION_LIST_ID,
  PublicationContainer_default as default
};
//# sourceMappingURL=PublicationContainer-BOCJBYB4.js.map
