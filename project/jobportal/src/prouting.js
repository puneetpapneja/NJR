import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Pagelayout from "./components/pagelayout";
import Dashboard from "./components/Dashboard";
import Yash from "./components/yash";

const prouting = [
  {
    path: "/log",
    element: <Login />,
  },
  {
    path: "/reg",
    element: <Register />,
  },
  {
    path: "/dash",
    element: <Yash />,
  },
];

export const routes = [
  {
    path: "/",
    element: <Pagelayout />,
    children: prouting,
  },
];
