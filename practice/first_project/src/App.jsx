import React from "react";
import { Route,Routes } from "react-router-dom";

import { About } from "./components/pages/About.jsx"; 
import { Services } from "./components/pages/Services.jsx";
import { Contact } from "./components/pages/Contact";
import { Home } from "./components/pages/Home.jsx";

import {Navbar} from "./Navbar.jsx";



function App(){
  return (
    <div className="App">
      <Navbar/> 
      <Routes>
        <Route path="/about" element={<About/>} />
        <Route extact path="/" element={<Home/>} />
        <Route path="/Services" element={<Services/>} />
         <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;  