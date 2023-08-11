import React from 'react';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="App">
      <LoginPage />
    </div>
  );
}

export default App;
 
 
 
 /* import './App.css';
import Navbar from './components/Navbar.js';
import Login from "./components/LoginPage.js";
//import Register from "./components/Register.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
            
            <Navbar/>
        <div>
          <Routes>
            <Route path='/Login' element={<Login />} />
            
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

*/