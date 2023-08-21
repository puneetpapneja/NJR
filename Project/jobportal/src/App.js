import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { routing} from "./routes";


function App() {
  return (
    
    <RouterProvider router={createBrowserRouter(routing)}></RouterProvider>
  );
}
export default App;