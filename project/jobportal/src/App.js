
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routing';
import Dashboard from './Page/DashBoardPage';



function App() {
  return (
  //  <RouterProvider router={createBrowserRouter(routes)}>
  //  </RouterProvider>
  <Dashboard/>
   )
}

export default App;