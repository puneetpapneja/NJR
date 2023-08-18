import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <React.Fragment className="app">
      <RouterProvider router={createBrowserRouter(routes)}></RouterProvider>
    </React.Fragment>
  );
}

export default App;
