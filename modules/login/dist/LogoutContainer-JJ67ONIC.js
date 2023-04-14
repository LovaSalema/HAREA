import 'react'
import "./chunk-EMZHQZBF.js";

// src/views/logout/containers/LogoutContainer.tsx
import { useTranslations } from "@mzara/component";
import { useEffect } from "react";

// src/views/logout/hooks/useLoginMutation.ts
import { useGraphqlMutation } from "@mzara/component";
var useLogoutMutation = () => {
  return useGraphqlMutation(LOGOUT);
};
var LOGOUT = `
    mutation {
        logout
    }
`;

// src/views/logout/containers/LogoutContainer.tsx
import { jsxs } from "react/jsx-runtime";
var LogoutContainer = () => {
  const [
    LOADING,
    SUCCESS,
    ERROR
  ] = useTranslations(i18n);
  const logoutMutation = useLogoutMutation();
  useEffect(() => {
    logoutMutation.mutate({}, {
      onSuccess: () => {
        window.location.href = "/";
      }
    });
  }, []);
  return /* @__PURE__ */ jsxs("h4", {
    children: [
      logoutMutation.isLoading && LOADING,
      logoutMutation.isSuccess && SUCCESS,
      logoutMutation.isError && ERROR
    ]
  });
};
var LogoutContainer_default = LogoutContainer;
var i18n = [
  "Generic.Auth.Logout.Loading.label",
  "Generic.Auth.Logout.Success.label",
  "Generic.Auth.Logout.Error.label"
];
export {
  LogoutContainer_default as default
};
//# sourceMappingURL=LogoutContainer-JJ67ONIC.js.map
