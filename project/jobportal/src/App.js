// import logo from './logo.svg';
import './App.css';
// import { Login } from './components/login';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import { route } from './routing';

function App() {
  return (

      <RouterProvider router = {createBrowserRouter(route)}></RouterProvider>

  );
}

export default App;
