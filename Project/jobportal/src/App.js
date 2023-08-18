import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import NavBar from "./components/NavBar";
import PostAJob from "./components/postjob";
import Dashbody from "./components/dashbody";
import Box from "./components/box";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./routing";
import AppliedJob from "./components/AppliedJob";
import Footer from "./components/footer";

function App() {
  return <RouterProvider router={createBrowserRouter(routes)}></RouterProvider>;
}

export default App;
