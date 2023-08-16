import { Container } from "react-bootstrap";
import Content from "./components/Content";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";



    function App() {
        return (
          <Container>
            {/* <RouterProvider router={createBrowserRouter(routing)}>
       
       </RouterProvider>  */}
       <NavBar/>
       <Content/>
       <Footer/>
       </Container>
      
  );
}

export default App;