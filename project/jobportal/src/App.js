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





function App() {
  return (
    <div >
      <NavBar />
     {/* <Dashbody />
     <Box /> */}

     <Appliedjob />
    <Footer />
    </div>
    
  ); 
}

export default App;
