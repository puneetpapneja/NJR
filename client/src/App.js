
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import Home from "./componet/Home"
import Register from './componet/Register';
import Login from './componet/Login';
import Navbar from './componet/Navbar';
import Homeitem from './componet/Homeitem';
import {Logincontext} from './Logincontext'
import { useState } from 'react';

function App() {
  const [userName,setUsername] =useState(localStorage.getItem('username'))


  return (
   <>
   <Router>

    <Logincontext.Provider value={{userName,setUsername}}>
    <Navbar/>
    <Routes>
      
      {/* <Route path='/home' element={<Home/>}></Route> */}
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/' element={<Login/>}></Route>

      
      <Route path='/home' element={<Homeitem/>} ></Route>






    </Routes>
    </Logincontext.Provider>
   </Router>
   </>
  );
}

export default App;
