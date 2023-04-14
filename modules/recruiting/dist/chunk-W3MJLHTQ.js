import 'react'
import {
  useCuriculumVitaeDetailsQuery
} from "./chunk-PL5ZRXZG.js";
import {
  useStateCvItems
} from "./chunk-QY73VEYP.js";

// src/views/CV-details/views/details/components/CvDetails.tsx
import { Dropdown, useCdnAssets, Menu, useGraphqlMutation } from "@mzara/component";
import { Button } from "@mzara/component";
import { useState } from "react";
import { useParams } from "react-router-dom";

// src/views/CV/hooks/useGqlMutationStateCv.tsx
var useGqlMutationStateCv = () => {
  return `
    mutation ($data: JSONObject){
        stateChangeResult: saveRecruitingCuriculumVitae (data: {data: $data}) {id}
    }
    `;
};

// src/views/CV-details/views/details/components/CvDetails.tsx
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var CvDetails = () => {
  var _a, _b;
  const { id } = useParams();
  const { data, invalidateQuery } = useCuriculumVitaeDetailsQuery(parseInt(id), true);
  const [CvState, setCvState] = useState("Nouveau");
  const cdn = useCdnAssets();
  const menuItems = useStateCvItems();
  const [anchorEl, setAnchorEl] = useState();
  const gqlStateChange = useGqlMutationStateCv();
  const mutationState = useGraphqlMutation(gqlStateChange);
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsxs("div", {
      className: "shadow-md flex  flex-col gap-6 bg-white min-w-[58%] h-[251px] rounded-lg",
      children: [
        /* @__PURE__ */ jsx("div", {
          className: "flex flex-col gap-4 mx-3  p-4",
          children: /* @__PURE__ */ jsxs("div", {
            className: "flex gap-5",
            children: [
              /* @__PURE__ */ jsx("img", {
                className: "w-[67px] h-[67px]",
                src: cdn("/img/isa/profile-user.png"),
                alt: "profile"
              }),
              /* @__PURE__ */ jsxs("div", {
                className: "flex w-full flex-col gap-2 justify-start",
                children: [
                  /* @__PURE__ */ jsxs("div", {
                    className: "flex gap-4",
                    children: [
                      /* @__PURE__ */ jsx("p", {
                        children: /* @__PURE__ */ jsx("b", {
                          children: data == null ? void 0 : data.name
                        })
                      }),
                      /* @__PURE__ */ jsx("div", {
                        style: { backgroundColor: `${ColorState[(_a = data == null ? void 0 : data.state) == null ? void 0 : _a.value]}` },
                        className: `px-2 h-[20px] rounded-xl flex items-center justify-center`,
                        children: /* @__PURE__ */ jsx("p", {
                          className: "text-xs text-white",
                          children: stateDict[(_b = data == null ? void 0 : data.state) == null ? void 0 : _b.value]
                        })
                      })
                    ]
                  }),
                  /* @__PURE__ */ jsxs("p", {
                    children: [
                      data == null ? void 0 : data.email,
                      " "
                    ]
                  }),
                  /* @__PURE__ */ jsxs("p", {
                    children: [
                      data == null ? void 0 : data.phone,
                      " "
                    ]
                  })
                ]
              })
            ]
          })
        }),
        /* @__PURE__ */ jsxs("div", {
          className: "flex justify-between m-3",
          children: [
            /* @__PURE__ */ jsx(Button, {
              className: "button !rounded-full",
              children: "Envoyer test"
            }),
            /* @__PURE__ */ jsx("a", {
              href: "",
              onClick: (e) => {
                setAnchorEl(e.currentTarget);
                e.preventDefault();
              },
              children: /* @__PURE__ */ jsxs(Button, {
                className: "button2  !rounded-full",
                children: [
                  "Changer \xE9tat ",
                  /* @__PURE__ */ jsx("i", {
                    className: "fa-solid fa-angle-down relative top-[3px]"
                  })
                ]
              })
            }),
            /* @__PURE__ */ jsx(Dropdown, {
              anchorEl,
              arrow: true,
              placement: "bottom-end",
              onClose: () => setAnchorEl(void 0),
              children: /* @__PURE__ */ jsx(Menu, {
                items: menuItems,
                onClick: (menu) => {
                  mutationState.mutate({ data: { id: parseInt(id), state: { id: menu.id } } }, {
                    onSuccess: () => {
                      invalidateQuery();
                    }
                  });
                  setCvState(menu == null ? void 0 : menu.label);
                  setAnchorEl(menu == null ? void 0 : menu.currentTarget);
                }
              })
            }),
            /* @__PURE__ */ jsx(Button, {
              className: "button2  !rounded-full",
              children: "Engager"
            })
          ]
        })
      ]
    })
  });
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
var CvDetails_default = CvDetails;

export {
  stateDict,
  ColorState,
  CvDetails_default
};
//# sourceMappingURL=chunk-W3MJLHTQ.js.map
