import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavbarComp from './components/NavbarComp'





// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'


// import Login from './components/Login'
// import SignUp from './components/SignUp'

function App() {
  return (
    // <Router>
    //   {/* <div className="App">
    //     <nav className="navbar navbar-expand-lg navbar-light fixed-top">
    //       <div className="container">
    //         <Link className="navbar-brand" to={'/sign-in'}>
             
    //         </Link>
    //         <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    //           <ul className="navbar-nav ml-auto">
    //             <li className="nav-item">
                 
    //             </li>
    //             <li className="nav-item">
                 
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </nav> */}
    //     <div className="App">
    //     <div className="auth-wrapper">
    //       <div className="auth-inner">
    //         <Routes>
    //           <Route exact path="/" element={<Login />} />
    //           <Route path="/sign-in" element={<Login />} />
    //           <Route path="/sign-up" element={<SignUp />} />
    //         </Routes>
    //       </div>
    //     </div>
    //   </div>
    // </Router>
    <>
     <NavbarComp/>
    
 
    
    </>
    
  )
}

export default App
