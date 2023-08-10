import React from "react";
import ReactDOM from "react-dom"; // Corrected import statement
import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

