import "./App.css";
import React, { useState } from "react";
const App = () => {
  const [val, setVal] = useState("sahil app");
  const changeName = () => {
    // val = "sahil app changed";
    // console.log(val);
    setVal("sahil app changed");
  };

  return (
    <div className="App">
      <h1>{val}</h1>
      <button className="btn" onClick={changeName}>
        click me
      </button>
    </div>
  );
};

export default App;
