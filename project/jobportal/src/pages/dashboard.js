import React from "react";
// import "./dashboard.css";
import Navigation from "../components/navbar";
import Footer from "../components/footer";
import Content from "../components/content";

export default function Dashboard() {
  return (
    <>
      <Navigation />
      <Content />
      <Footer />
    </>
  );
}