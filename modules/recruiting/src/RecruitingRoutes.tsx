import { AppRouteProps } from "@mzara/component";
import React from "react";
import { PublicationRoutes } from "./views/publication/PublicationRoutes";
import { CvtRoutes } from "views/CV/CvRoutes";
import { ContractRoutes } from "views/Contract/ContractRoutes";
import { PublicationDetailsRoutes } from "views/publication-details/PublicationDetailsRoutes";
import { TemplateRoutes } from "views/template/TemplateRoutes";
import { TemplateDetailsRoutes } from "views/template-details/TemplateDetailsRoutes";
import { CvDetailsRoutes } from "views/CV-details/CvDetailsRoutes";
import { ContractDetailsRoutes } from "views/Contract-details/ContractDetailsRoutes";
const AuthContainer = React.lazy(() => import("./containers/AuthContainer"));

export const RecruitingRoutes: Array<AppRouteProps> = [
    {
        path: "recruiting",
        title: "Harea.Recruiting.Publication",
        element: <AuthContainer />,
        children: [
            ...PublicationRoutes, 
            ...PublicationDetailsRoutes, 
            ...CvtRoutes, 
            ...ContractRoutes, 
            ...TemplateRoutes, 
            ...TemplateDetailsRoutes,
            ...ContractDetailsRoutes
        , ...CvDetailsRoutes],
    },
];
