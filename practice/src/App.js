import './App.css';
import Item from './components/Item';

function App() {
  
 const objects = [
      {"name": "Alice", "clr": 'blue'},
      {"name": "Bob", "clr": 'yellow'},
      {"name": "Charlie", "clr": 'cyan'}
  ]
  
  return (
    <>
    <div className='arun'>
      <Item x='sattle' clr='lightred'/>
      <Item x='cello' clr='lightgreen'/>
      <Item x='115' clr='lightpurple'/>
      {objects.map(e=>{
       return <Item key={e.name} x={e.name} clr={e.clr}/>
      })}
    </div>
     <div id="img2">
    <img  id="image" src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"  alt='afd' />
    </div>
    </>
  );
}

export default App;