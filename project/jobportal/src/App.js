import logo from './logo.svg';
import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import './App.css';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/loginPage';
import Dashboard from './pages/Dashboardpage.js';
import PostJob from './components/Postjob.js';
import Navbar1 from './components/Navbar.js';
import Footer from './components/Footer.js';
import React from 'react';
import Register from './components/Register.js';
import Dashboardpage from './pages/Dashboardpage.js';


function App() {
  return (
  <React.Fragment>
    <Router>
      <Routes>
      <Route exact path="/" element={<LoginPage />}></Route>
        <Route exact path="/login" element={<LoginPage />}></Route>
        <Route exact path="/register" element={<RegisterPage />}></Route>
        <Route exact path='/dashboard' element={<Dashboardpage/>}></Route>
        <Route exact path='/postjob' element={<PostJob/>}></Route>
      </Routes>
    </Router>
  </React.Fragment>
  );
}

export default App;
