import 'react'
import {
  __spreadProps,
  __spreadValues
} from "./chunk-MT53WDPF.js";

// src/views/organisation/hooks/useUserOrganisationEditForm.ts
import { useTranslations } from "@mzara/component";
import { useMemo } from "react";

// src/views/organisation/hooks/useUserOrganisationOwnerQuery.ts
import { useGraphqlQuery } from "@mzara/component";

// src/views/organisation/queries/UserOrganisationOwnerQuery.ts
var UserOrganisationOwnerQuery = class {
  constructor() {
    this.queryKey = "App.Bo.UserOrganisationOwnerQuery.Details";
    this.gql = `
        query UserOrganisationOwnerQuery {
            userOrganisation (filter: { data: {organisationKey: "ISA_SOLUTIONS"} }) {
                id
                roles { id descriptorKey translationKey }
            }
        }
    `;
  }
  mapFn(data) {
    return data.userOrganisation;
  }
};

// src/views/organisation/hooks/useUserOrganisationOwnerQuery.ts
var useUserOrganisationOwnerQuery = (suspense) => {
  return useGraphqlQuery(new UserOrganisationOwnerQuery(), { suspense });
};

// src/views/organisation/hooks/useUserOrganisationEditForm.ts
var useUserOrganisationEditForm = () => {
  const { data } = useUserOrganisationOwnerQuery(true);
  const [
    METADATA_TITLE,
    METADATA_DESCRIPTION,
    METADATA_KEY_LABEL,
    METADATA_DESIGNATION_LABEL,
    METADATA_COMMENTS_LABEL,
    ROLES_TITLE,
    ROLES_DESCIPTION
  ] = useTranslations(i18n);
  const metadataForm = useMemo(() => {
    return {
      data: {
        forms: [
          {
            type: "hidden",
            name: "id"
          },
          {
            type: "text",
            name: "organisationKey",
            className: "",
            label: METADATA_KEY_LABEL
          },
          {
            type: "text",
            name: "designation",
            className: "",
            label: METADATA_DESIGNATION_LABEL
          },
          {
            type: "text",
            name: "comment",
            className: "",
            label: METADATA_COMMENTS_LABEL
          }
        ],
        graphQL: {
          entity: "userOrganisation"
        }
      }
    };
  }, []);
  const rolesForm = useMemo(() => {
    const categories = data.roles.reduce((all, item) => {
      if (!all.some((item1) => item1 === item.descriptorKey)) {
        all.push(item.descriptorKey);
      }
      return all;
    }, []);
    return {
      data: {
        forms: [
          {
            type: "hidden",
            name: "id"
          },
          ...categories.reduce((all, category) => {
            const roles = data.roles.filter((item) => item.descriptorKey === category);
            all = [
              ...all,
              {
                type: "checkbox",
                name: `roles-${category}`,
                group: "roles",
                label: `Generic.de.${category}`,
                multiple: true,
                options: roles.map((item) => ({
                  label: item.translationKey,
                  value: item.id
                }))
              }
            ];
            return all;
          }, [])
        ],
        graphQL: {}
      },
      onBeforeSaving: (value) => {
        return __spreadProps(__spreadValues(__spreadValues({}, value), Object.keys(value).reduce((all, key) => {
          if (/^roles/.test(key)) {
            all[key] = void 0;
          }
          return all;
        }, {})), {
          roles: Object.keys(value).reduce((all, key) => {
            if (/^roles/.test(key)) {
              all = all.concat(
                value[key].map((item) => ({ id: item }))
              );
            }
            return all;
          }, [])
        });
      }
    };
  }, [data]);
  return useMemo(() => [
    metadataForm,
    rolesForm
  ], [metadataForm, rolesForm]);
};
var i18n = [
  "Generic.UserOrganisation.form.Metadata.title",
  "Generic.UserOrganisation.form.Metadata.description",
  "Generic.UserOrganisation.form.Metadata.Key.label",
  "Generic.UserOrganisation.form.Metadata.Designation.label",
  "Generic.UserOrganisation.form.Metadata.Comments.label",
  "Generic.UserOrganisation.form.Roles.title",
  "Generic.UserOrganisation.form.Roles.desciption"
];

export {
  useUserOrganisationEditForm
};
//# sourceMappingURL=chunk-RDLPIISI.js.map
