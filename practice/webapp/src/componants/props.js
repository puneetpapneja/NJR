import React from "react";

const Props = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.fname}</h1>
    </div>
  );
};

export default Props;
