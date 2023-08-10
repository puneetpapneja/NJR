// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import Login from "./components/login.js";
import Register from "./components/Register.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
            {/* <Route path='/' element={<Navbar/>}/> */}
            <Navbar/>
        <div>
          <Routes>
            <Route path='/Login' element={<Login />} />
            <Route path='/Register' element={<Register />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
