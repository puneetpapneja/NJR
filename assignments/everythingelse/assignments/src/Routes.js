import React from "react";
import PageLayout from "./components/PageLayout";
export const routing =[
    {
        path:"/",
        element:<Home />
    }
]

export const routes = [
    {
        path:"/",
        element:<PageLayout />,
        children: routing
    }
]