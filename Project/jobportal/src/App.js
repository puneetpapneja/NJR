import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";

import { routing } from './routing';


import Login from './components/Login';
import Register from './components/Register';


function App() {
  return (
    <>
    {/* <RouterProvider router={createBrowserRouter([{path: "/", element:<Login/>}])}></RouterProvider> */}
    <RouterProvider router={createBrowserRouter(routing)}></RouterProvider>
    </>
  );
}


export default App;