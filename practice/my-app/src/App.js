import './App.css';
import React, { useState } from 'react';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Header from "./component/Header"
import  {routes}  from  "./routing";
import Memo from "./component/Memo"


function App() {
  // return (<div>
  //   <Header />
  //     <RouterProvider router={createBrowserRouter(routes)} />
  //   </div>
    /* // <div className="App">
    //   <header className="App-header">
     
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a  */
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
      
      // </header>

      
    // </div>
    // <div>
    // <Item />
    // {/* <Item />
    // <Item /> */}
    // </div>
  // );
  return (
      <>     <RouterProvider router={createBrowserRouter(routes)}> </RouterProvider>
  
</>

);
    // < Memo />
    // <Header/>
  
}

export default App;
