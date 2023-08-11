import React, { useState } from "react";

const UseState = () => {
  const handleClick = () => {
    data = [];
    setmyarr([]);
    console.log(setmyarr);
  };
  var data = [
    { id: 0, myname: "sahil", age: 20 },
    { id: 1, myname: "Rahul", age: 10 },
    { id: 2, myname: "sam", age: 15 },
    { id: 3, myname: "Shanky", age: 21 },
  ];
  var [myarr, setmyarr] = useState(data);
  console.log(data);
  return (
    <React.Fragment>
      {myarr.map((ELM) => {
        return (
          <h1>
            name:{ELM.myname},age:{ELM.age}
          </h1>
        );
      })}
      <button onClick={handleClick}>Clear</button>
    </React.Fragment>
  );
};

export default UseState;
