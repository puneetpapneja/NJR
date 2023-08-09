import React from 'react';

export const routing = [
    {
        path: "/",
        element:  <Home />
    }
]

export const routes = [
    {
        path: "/",
        element: <PageLayout />,
        children: routing
    }
]

