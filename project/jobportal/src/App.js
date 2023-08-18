import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Register from './components/Register';
import NavScrollExample from './components/NavBar';
import NavBar from './components/NavBar';
import PostAJob from './components/Postajob';
import Dashbody from './components/Dashboard';
import Box from './components/box';
import Footer from './components/footer';
import Appliedjob from './components/AppliedJob';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import Dashboard from './components/Dashboard';





function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<NavBar/>} >
      <Route index element={<Login/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Postajob' element={<PostAJob/>}/>
      <Route path='/Dashboard' element={<Dashboard/>} />
      <Route path='/AppliedJob' element={<Appliedjob/>}/>
        </Route>

    </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  ); 
}

export default App;
