import './App.css';
import Navbar from './components/Navbar.js';
import Login from "./components/login.js";
import Register from "./components/Register.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/footer';
import Cards from "./components/cards";
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

export default App;
