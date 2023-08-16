import './App.css';
// import Button from 'react-bootstrap/esm/Button';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routing';



function App() {
  return (
    <div className="App">
     {/* <Button variant="secondary">Secondary</Button>{' '} */}
     <RouterProvider router={createBrowserRouter(routes)}></RouterProvider>
    </div>
  );
}

export default App;
