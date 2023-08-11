import "./App.css";
import React from "react";
import Memo from "./componants/Memo";
const App = () => {
  return (
    <div class="container d-flex justify-content-center align-items-center">
      <div className="col-md-6">
        <Memo />
      </div>
    </div>
  );
};

export default App;
