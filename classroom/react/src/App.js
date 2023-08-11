import './App.css';
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routing';


function App() {
  return (
    <React.Fragment>
      
      <RouterProvider router={createBrowserRouter(routes)}>
     
      </RouterProvider>
      {/* <ToDoList /> */}
      {/* <button onClick={()=> setShowHeader(!showHeader)}>unmount hooks</button>
      {showHeader ? null :<Hooks /> } */}
    {/* <Card>
      <Item list={items} heading="Cermamic Products" />    
    </Card>


 <Card>
  <Item list={items2} heading="Cars" testContent="testContent" />
 </Card> */}
 </React.Fragment>







    // {/* <Item list={items} heading="Ceramic Products" /> */}
    //     {/* <button onClick={() => setShowHeader(!showHeader)}>click </button>
    //    {showHeader ? <Hooks /> : null}  */}
    //    {/* <ToDoList /> */}
    // // showHeader ? (<div className="App">      
    // <Header /> 
    //   <Item list={items} heading="Ceramic Products" />
    //   <Item list={items2} heading="Cars" testContent="testContent" />
    // </div>): null
    // </React.Fragment> 
  );
}

export default App;
