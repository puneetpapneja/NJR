import React from 'react';
import Loginpage from './components/loginpage';
import Registerpage from './components/registerpage';
import Dashboard from './components/dashboardpage';
import './App.css';

function App() {
  return (
   <>
   <Loginpage/>
   <Registerpage/>
   <Dashboard />

   </>
  );
}

export default App;
