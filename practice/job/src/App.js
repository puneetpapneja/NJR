import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar.js';
import Register from "./components/Register.js";
import Cards from "./components/cards";
import Footer from './components/footer';
import Login from "./components/login.js";
import PostJob from './components/postjob';

function App() {
  return (
   <><BrowserRouter>
   <Navbar />
   <div>
     <Routes>
       <Route path='/Home' element={<Cards/>} />
       <Route path='/Login' element={<Login />} />
       <Route path='/Register' element={<Register />} />
       <Route exact path='/postjob' element={<PostJob/>}></Route>
     </Routes>
   </div>
   <Footer />
 </BrowserRouter>
   </>
  );
}

export default App;