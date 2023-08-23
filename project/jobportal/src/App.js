import { BrowserRouter , Routes,Route } from 'react-router-dom';
import { React } from 'react';
import './App.css';
import Login from './components/Login';
import Resgister from './components/Register';
import Dashboard from './components/Dashboard';
import AppliedJob from './components/AppliedJob';
import Register from './components/Register';
import NavBarcomponent from './components/NavBarcomponent';
import Footer from './components/Footer';
import PostJob from './components/PostJob';
import Posted_a_job from './components/Posted_a_job';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<NavBarcomponent />} >
      <Route index element={<Login/>}/>
      <Route path='/login' element={<Login/>} />
      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Dashboard' element={<Dashboard/>} />
      <Route path='/appliedjob' element={<AppliedJob/>}/>
      <Route path='/postjob' element={<PostJob/>}/>
      <Route path='/postedjob' element={<posted_a_job/>} />
      </Route>
    </Routes>
    </BrowserRouter>
    <Footer />
    </>
  );
}

export default App;
