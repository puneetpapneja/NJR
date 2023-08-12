import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routes';

function App() {
  return (
    <RouterProvider router ={createBrowserRouter(routes)}></RouterProvider>
  );
}

export default App;
