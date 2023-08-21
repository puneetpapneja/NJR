// import RegisterPage from './pages/registerpage.js';
// import LoginPage from './pages/loginpage.js';
// import Content from './components/Content.js';
// import Footer from './components/Footer.js';
// import Navigationbar from "./components/Navigationbar";
// import JobDescStruct from "./components/JobDescriptionStructure";
// import Jobs from "./components/Jobs";
// import PostedJobs from "./pages/Postedpage";
// import Appliedjobs from "./components/Appliedjobs";

import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { routing } from "./routes";

function App() {
  return (
    // <LoginPage/>
    // <RegisterPage />
    // <Content/>
    // <Footer />
    // <Navigationbar />
    // <Jobs/>
    // <PostedJobs />
    // <Appliedjobs/>
    <RouterProvider router={createBrowserRouter(routing)}></RouterProvider>
  );
}
export default App;
