//always write inside functional componant or in function
//first letter shuold be capital
import React, { useState } from "react";

const Ruleshooks = () => {
  const [myname, setMyname] = useState("sahil");
  return (
    <div>
      <h1>{myname}</h1>
    </div>
  );
};

export default Ruleshooks;
