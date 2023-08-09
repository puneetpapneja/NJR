import logo from './logo.svg';
import './App.css';
import Item from './component/Item';
import ImageTask from './component/image_task';
import Table from './component/table';
// import ToDoList from './component/Todolist';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import { routes } from './routing';


function App() {
  
  // const car = {
  //   image:["car2.jpeg","car3.jpeg","car4.jpeg"],
  //   feature:["high speed","f2","f3"],
  //   specification:["s1","s2","s3"]
  // }
  // return (
  //   <div className="App">
  //     <Table list={car.image} />
  //     <Table list={car.feature} />
  //     <Table list={car.specification}/>
  //     hello
  //   </div>
  // );

  return (
    <div className="App">
      {/* <ToDoList/> */}
      <RouterProvider router={createBrowserRouter(routes)}>
     
      </RouterProvider>
   
   </div>
    
 );
}

export default App;
