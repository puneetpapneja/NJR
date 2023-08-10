import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loginpage from "./components/loginpage";
import Registerpage from "./components/registerpage";

export const routing = [
  {
      path: "/",
      element:  <Loginpage />
  },
  {
      path: "/about",
      element:  <Registerpage />
  },
]
