import { AppRouteProps } from '@mzara/component';
import React from 'react';

const ContractDetailsContainer = React.lazy(()=>import ('./container/ContractDetailsContainer'))
export const ContractDetailsRoutes: Array<AppRouteProps> = [
    {
        path: 'contract/:id',
        title: 'Harea.Contract.details.title',
        element: <ContractDetailsContainer/>

    }
]