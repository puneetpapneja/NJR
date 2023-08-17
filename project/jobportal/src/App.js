import './App.css';
import { BrowserRouter, Routes, Route, RouterProvider, } from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Login from './components/Login';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
    </BrowserRouter>
    // <RouterProvider router={createBrowserRouter(routing)}></RouterProvider>
  )
}

export default App
