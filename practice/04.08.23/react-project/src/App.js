import logo from './logo.svg';

import './App.css';
import Item from './components/Item';

const objects = [
  {"name": "Alice", "clr": 'blue'},
  {"name": "Bob", "clr": 'yellow'},
  {"name": "Charlie", "clr": 'cyan'}
]
function App() {
  return (
    <div className='AL'>
      <Item x='sattle' clr='red'/>
      <Item x='cello' clr='black'/>
      <Item x='115' clr='white'/>
      {objects.map(e=>{
       return <Item key={e.name} x={e.name} clr={e.clr}/>
      })}
    </div>

  );
}

export default App;


  
