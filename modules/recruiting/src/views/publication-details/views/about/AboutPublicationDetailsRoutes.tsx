import { AppRouteProps } from "@mzara/component";
import React from "react";

const AboutRecruitingAdvert = React.lazy(()=>import ('./containers/AboutRecruitingAdvert'))
export const AboutPublicationDetailsRoutes: Array<AppRouteProps> = [
    {
        path:'about',
        title: 'Harea.Recruiting.Publicattion.details',
        element : <AboutRecruitingAdvert/>
    }
]