import "./App.css";
import Login from "./componants/Login";
import Register from "./componants/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./componants/Menu";
import PostAJob from "./componants/PostAJob";
import DashboardScreen from "./pages/DashboardScreen";
import AppliedJob from "./componants/AppliedJob";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route index element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/postajob" element={<PostAJob />} />
          <Route path="/dashboard" element={<DashboardScreen />} />
          <Route path="/appliedjob" element={<AppliedJob />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
