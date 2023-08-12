import React from 'react';
import Memocomponent from './components/Memocomponent';
import Memopractice from './components/Memopractice';
export const routing = [
    {
        path: "/x",
        element:  <Memocomponent/>
    },
    {
        path: "/y",
        element:  <Memopractice/>
    },
   
]

export const routes = [
    {
        path: "/",
        element: <PageLayout />,
        children: routing
    }
]

