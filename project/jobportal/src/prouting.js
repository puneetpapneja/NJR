import React, { Children } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Pagelayout from "./components/pagelayout";

export const prouting = [
  {
    path: "/log",
    element: <Login />,
  },
  {
    path: "/reg",
    element: <Register />,
  },
];

export const routes = [
  {
    path: "/",
    element: <Pagelayout />,
    Children: prouting,
  },
];
