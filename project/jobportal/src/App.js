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
import { Provider } from "react-redux";
import store from "./store/index"
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
    <Provider store={store}>
    <RouterProvider router={createBrowserRouter(routing)}></RouterProvider>
    </Provider>
  );
}
export default App;
