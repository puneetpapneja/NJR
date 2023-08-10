import logo from './logo.svg';
import './App.css';
import { Loginpage } from './pages/Loginpage';
import{RouterProvider,createBrowserRouter}from "react-router-dom"
import Routes from './routing';



function App() {
  return (
    <RouterProvider router={createBrowserRouter(Routes)}>
    </RouterProvider>
  );
}

export default App;
