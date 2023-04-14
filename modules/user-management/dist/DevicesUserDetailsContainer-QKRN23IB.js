import 'react'
import {
  useUserDetailsQuery
} from "./chunk-7APDHI4A.js";
import "./chunk-MT53WDPF.js";

// src/views/user-details/views/devices/containers/DevicesUserDetailsContainer.tsx
import { Box, Button, Chip, useGraphqlMutation } from "@mzara/component";
import _ from "lodash";
import { useParams } from "react-router-dom";

// src/views/user-details/views/devices/hooks/useGqlMutationLogoutDevice.ts
var useGqlMutationLogoutDevice = () => {
  return `
        mutation($data: LogoutInput!){
            logoutDevice(data: $data)
        }
    `;
};

// src/views/user-details/views/devices/containers/DevicesUserDetailsContainer.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var DevicesUserDetailsContainer = () => {
  var _a;
  const { id } = useParams();
  const { data, invalidateQuery } = useUserDetailsQuery(parseInt(id), true);
  const gqlLogoutDevice = useGqlMutationLogoutDevice();
  const mutation = useGraphqlMutation(gqlLogoutDevice);
  return /* @__PURE__ */ jsx(Box, {
    title: "Liste des appareils",
    children: /* @__PURE__ */ jsx("div", {
      className: "flex flex-col gap-2",
      children: (_a = data == null ? void 0 : data.sessionUsers) == null ? void 0 : _a.map((sessionUser) => {
        var _a2, _b, _c, _d, _e;
        return /* @__PURE__ */ jsxs("div", {
          className: "flex items-center justify-between py-3 pb-5 border-b",
          children: [
            /* @__PURE__ */ jsxs("div", {
              className: "flex items-center gap-8",
              children: [
                /* @__PURE__ */ jsx("i", {
                  className: `fa-brands fa-${_.lowerCase(
                    _.replace(
                      (_a2 = sessionUser == null ? void 0 : sessionUser.session) == null ? void 0 : _a2.plateform,
                      "ios",
                      "apple"
                    )
                  )} text-5xl`
                }),
                /* @__PURE__ */ jsxs("div", {
                  className: "flex flex-col gap-1",
                  children: [
                    /* @__PURE__ */ jsxs("div", {
                      className: "flex items-center gap-4",
                      children: [
                        /* @__PURE__ */ jsx("span", {
                          children: (_b = sessionUser == null ? void 0 : sessionUser.session) == null ? void 0 : _b.plateform
                        }),
                        (sessionUser == null ? void 0 : sessionUser.active) && /* @__PURE__ */ jsx(Chip, {
                          label: "Actif",
                          color: "#00BB29",
                          className: "rounded-full px-3 text-xs [&>a]:text-white"
                        })
                      ]
                    }),
                    /* @__PURE__ */ jsxs("div", {
                      className: "flex items-center gap-5",
                      children: [
                        /* @__PURE__ */ jsxs("div", {
                          className: "flex items-center gap-2",
                          children: [
                            /* @__PURE__ */ jsx("i", {
                              className: `fa-brands fa-${_.lowerCase(
                                (_c = sessionUser == null ? void 0 : sessionUser.session) == null ? void 0 : _c.browser
                              )}`
                            }),
                            /* @__PURE__ */ jsx("span", {
                              children: (_d = sessionUser == null ? void 0 : sessionUser.session) == null ? void 0 : _d.browser
                            })
                          ]
                        }),
                        /* @__PURE__ */ jsxs("span", {
                          className: "text-sm",
                          children: [
                            /* @__PURE__ */ jsx("strong", {
                              children: "version: "
                            }),
                            (_e = sessionUser == null ? void 0 : sessionUser.session) == null ? void 0 : _e.browserVersion
                          ]
                        })
                      ]
                    })
                  ]
                })
              ]
            }),
            (sessionUser == null ? void 0 : sessionUser.active) && /* @__PURE__ */ jsx(Button, {
              label: "D\xE9connecter",
              className: "!rounded-full !bg-primary text-white",
              onClick: () => {
                var _a3;
                mutation.mutate({
                  data: { id: (_a3 = sessionUser == null ? void 0 : sessionUser.session) == null ? void 0 : _a3.id }
                }, { onSuccess: () => {
                  invalidateQuery();
                } });
              }
            })
          ]
        });
      })
    })
  });
};
var DevicesUserDetailsContainer_default = DevicesUserDetailsContainer;
export {
  DevicesUserDetailsContainer_default as default
};
//# sourceMappingURL=DevicesUserDetailsContainer-QKRN23IB.js.map
