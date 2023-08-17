import { Routes,Route, RouterProvider, createBrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Resgister from './components/Register';
import Dashboard from './components/Dashboard';
import AppliedJob from './components/AppliedJob';
// import PostJob from './components/PostJob';


function App() {
  return (
    <Dashboard />
  );
}

export default App;
