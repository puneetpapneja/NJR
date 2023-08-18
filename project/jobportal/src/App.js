import { BrowserRouter as Router,Routes, Route,} from 'react-router-dom';
import RegisterPage from './pages/registerpage.js';
import LoginPage from './pages/loginpage.js';
import Dashboard from './pages/Dashboardpage.js';
import PostJob from './components/Postjob.js';
import Navbar1 from './components/Navbar.js';
import Footer from './components/Footer.js';
import Job from './components/job.js';
import React from 'react';
import Register from './components/Register.js';
import Dashboardpage from './pages/Dashboardpage.js';
function App() {
  return (  
<React.Fragment>
    
    <Router>
    <Navbar1/>
      <Routes>
        <Route exact path='/login' element={<LoginPage/>}></Route>
        <Route exact path='/register' element={<RegisterPage/>}></Route>
        <Route exact path='/dashboard' element={<Dashboardpage/>}></Route>
        <Route exact path='/postjob' element={<PostJob/>}></Route>
        <Route exact path='/appliedjob' element={<Job/>}></Route>

      </Routes>
      <Footer/>
      
    </Router>
    
    </React.Fragment>
    
  );
}
export default App;
