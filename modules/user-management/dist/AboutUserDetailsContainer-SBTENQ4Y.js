import 'react'
import {
  useUserDetailsQuery
} from "./chunk-7APDHI4A.js";
import "./chunk-MT53WDPF.js";

// src/views/user-details/views/about/containers/AboutUserDetailsContainer.tsx
import { Box, Chip, useFileUrl } from "@mzara/component";
import { AvatarComponent } from "avatar-initials";
import { useParams } from "react-router-dom";
import { jsx, jsxs } from "react/jsx-runtime";
var AboutUserDetailsContainer = () => {
  var _a, _b, _c, _d;
  const { id } = useParams();
  const { data } = useUserDetailsQuery(parseInt(id), true);
  const fileUrl = useFileUrl();
  return /* @__PURE__ */ jsx("div", {
    className: "py-5",
    children: /* @__PURE__ */ jsxs(Box, {
      className: "!rounded-2xl w-max flex flex-col gap-5 p-10 pr-20",
      children: [
        /* @__PURE__ */ jsxs("div", {
          className: "flex items-center gap-8",
          children: [
            /* @__PURE__ */ jsx("div", {
              className: "w-24 h-24 p-[2px] object-cover object-center rounded-full overflow-hidden bg-primary",
              children: /* @__PURE__ */ jsx(AvatarComponent, {
                primarySource: ((_a = data == null ? void 0 : data.profilePicture) == null ? void 0 : _a.id) && fileUrl((_b = data == null ? void 0 : data.profilePicture) == null ? void 0 : _b.id),
                initials: (data == null ? void 0 : data.firstName) && (data == null ? void 0 : data.lastName) ? `${((_c = data == null ? void 0 : data.firstName) == null ? void 0 : _c.split(""))[0]}${((_d = data == null ? void 0 : data.lastName) == null ? void 0 : _d.split(""))[0]}` : "NN",
                useGravatar: false,
                classes: "rounded-full w-full"
              })
            }),
            /* @__PURE__ */ jsxs("div", {
              className: "flex flex-col gap-1",
              children: [
                /* @__PURE__ */ jsx("h5", {
                  className: "font-semibold mb-0",
                  children: data.fullName
                }),
                /* @__PURE__ */ jsx("span", {
                  className: "text-sm",
                  children: data.email
                }),
                /* @__PURE__ */ jsxs("span", {
                  className: "flex items-center gap-3",
                  children: [
                    /* @__PURE__ */ jsx("strong", {
                      children: "Etat :"
                    }),
                    !data.isDisabled ? /* @__PURE__ */ jsx(Chip, {
                      label: "Actif",
                      color: "#00BB29",
                      className: "inline-block rounded-full px-3 text-xs [&>a]:text-white"
                    }) : /* @__PURE__ */ jsx(Chip, {
                      label: "Bloqu\xE9",
                      color: "#ABABAC",
                      className: "inline-block rounded-full px-3 text-xs [&>a]:text-white"
                    })
                  ]
                })
              ]
            })
          ]
        }),
        /* @__PURE__ */ jsxs("div", {
          className: "flex flex-col gap-1",
          children: [
            /* @__PURE__ */ jsxs("span", {
              children: [
                /* @__PURE__ */ jsx("i", {
                  className: "fa-solid fa-phone text-lg"
                }),
                data.phone
              ]
            }),
            /* @__PURE__ */ jsxs("span", {
              children: [
                /* @__PURE__ */ jsx("i", {
                  className: "fa-brands fa-skype text-xl"
                }),
                data.skype
              ]
            }),
            /* @__PURE__ */ jsxs("span", {
              children: [
                /* @__PURE__ */ jsx("i", {
                  className: "fa-solid fa-file-signature"
                }),
                data.recruitingContracts.map((contract) => contract.designation).join(", ")
              ]
            })
          ]
        })
      ]
    })
  });
};
var AboutUserDetailsContainer_default = AboutUserDetailsContainer;
export {
  AboutUserDetailsContainer_default as default
};
//# sourceMappingURL=AboutUserDetailsContainer-SBTENQ4Y.js.map
