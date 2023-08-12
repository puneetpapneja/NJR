import './App.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Registration from './components/Registration';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Todolist from './components/Todolist';
import Memo from './components/Memo1';
import PageLayout from './components/PageLayout';
import { routes } from './routing';
function App() {
  return (
    <RouterProvider router={createBrowserRouter(routes)}>
    </RouterProvider>
  );
}

export default App;