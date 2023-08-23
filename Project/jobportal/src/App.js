import logo from "./logo.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./Routing.js";
import "./components/SignUp.css";
import React from "react";

function App() {
  return (
    <React.Fragment className="app">
      <RouterProvider router={createBrowserRouter(routes)}></RouterProvider>
    </React.Fragment>
  );
}

export default App;