import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { getRoutes } from "./routing";
import { useSelector } from "react-redux";

function App() {
  const hasRecruiter = useSelector((state) => state?.user?.hasRecruiter);
  return (
    <RouterProvider
      router={createBrowserRouter(getRoutes(hasRecruiter))}
    ></RouterProvider>
  );
}
export default App;
    