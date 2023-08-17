import './App.css';
import {routes} from './routing';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {
  return (
    
 <>
     <RouterProvider router={createBrowserRouter(routes)}>
    </RouterProvider> 
    
 </>

  );
}

export default App;
