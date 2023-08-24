import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./routing";
import store from './store/index'

function App() {

  return (<Provider store={store}>
    <RouterProvider router={createBrowserRouter(routes)}></RouterProvider>;
  </Provider>)
}

export default App;