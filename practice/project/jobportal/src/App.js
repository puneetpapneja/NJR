// import logo from './logo.svg';
import "./App.css";
import Login from "./components/Login.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Job from "./components/job";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div>
          <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/job" element={<Job />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
