import { Route, BrowserRouter as Router, Routes, } from 'react-router-dom';

import Login from './components/Login';
import Register from './components/register';

function App() {
  return (
    <Router>
      

      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/login' element={<Login />}> </Route>
        <Route path='/Register' element={<Register/>}></Route>
      </Routes>
    </Router>
    
  );
}
export default App;