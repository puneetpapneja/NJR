import React from "react";
import "../CSS/item.css";
import Features from "./features";

const Section1 = () => {
  return (
    <div>
      <img
        src="https://images.unsplash.com/photo-1603553329474-99f95f35394f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80"
        alt=""
        className="image"
      />
    <Features></Features>
    </div>
  );
};

export default Section1;
