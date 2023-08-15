import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./prouting";

function App() {
  return (
  <RouterProvider router={createBrowserRouter(routes)}></RouterProvider>
  );
}

export default App;
