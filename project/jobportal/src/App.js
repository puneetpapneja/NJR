import './App.css';
import {routes} from './routing';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
function App() {
  const hasRecruiter =useSelector((state)=>state?.user?.hasRecruiter); 
  // console.log(hasRecruiter);
  return (

 <>
     <RouterProvider router={createBrowserRouter (routes(hasRecruiter) )}>
    </RouterProvider> 
    
 </>

  );
}

export default App;
