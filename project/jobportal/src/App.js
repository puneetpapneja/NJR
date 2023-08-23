import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
// import { routing } from "./routes";
import { Provider } from "react-redux";
import store from "./store/index";
import './App.css'

import { routes } from "./routing";
function App() {
  return (
    <Provider store={store}>
    <RouterProvider router={createBrowserRouter(routes)}></RouterProvider>
    </Provider>
  );
}
export default App;