import './App.css';
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routing';


function App() {
  return (
    <React.Fragment>
      <RouterProvider router={createBrowserRouter(routes)}>
 
 </RouterProvider> 
    </React.Fragment>

);
}

export default App;


/*import React from 'react';
//import LoginPage from './pages/LoginPage';
//import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
function App() {
  return (
    <div className="App">
      <DashboardPage />
    </div>
  );
}

export default App;*/
 
 
 
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