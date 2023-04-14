import { AppRouteProps } from '@mzara/component';
import React from 'react';

const ContractListContainer = React.lazy(()=>import('./container/ContractListContainer'))
export const ContractRoutes: Array<AppRouteProps> = [
    {
        path: 'contract',
        title: 'Harea.Contract.list.title',
        element: <ContractListContainer/>

    }
]