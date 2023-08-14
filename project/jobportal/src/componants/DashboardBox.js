import React from "react";
import { Container } from "react-bootstrap";
import "../App.css";

const DashboardBox = (props) => {
  return (
    <div className="dasboardBox">
      <h1>{props.title}</h1>

      <h3>{props.desc}</h3>
    </div>
  );
};

export default DashboardBox;
