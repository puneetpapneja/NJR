
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./componet/Home"

import Navbar from './componet/Navbar';
import Dashbord from './adminComponets/Dashbord';


function App() {
  


  return (
   <>
   <Router>

   
    
    <Routes>
      
      <Route path='/' element={<Home/>}></Route>
      
      <Route path='/admin' element={<Dashbord/>}></Route>
    
     





    </Routes>
   
   </Router>
   </>
  );
}

export default App;
