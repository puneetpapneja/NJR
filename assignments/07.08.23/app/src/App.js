// import logo from './logo.svg';
import './App.css';
import Cars from './components/Cars';
const cars=[
  {
    name:"lamborgini",
    img:"https://images.pexels.com/photos/6462662/pexels-photo-6462662.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    features:[
      "automatic climate control" ,  
          "premium leather materials",
          "power seating",
        "air filtration"
      ],
    specifications:{
      EngineDisplacement:	6498 ,
      No_of_cylinder:	12,
      Max_Power 	:"759.01bhp@8500rpm",
      Max_Torque :	"720Nm@6750rpm"
    }
  },
  {
    name:"BMW",
    img:"https://www.livemint.com/lm-img/img/2023/03/28/600x338/2-0-1272577671-The-BMW-7-Series--1--0_1679601246762_1679987537331_1679987537331.jpg",
    features:[
      "automatic climate control" ,  
          "premium leather materials",
          "power seating",
        "air filtration"
      ],
    specifications:{
      EngineDisplacement:	6498 ,
      No_of_cylinder:	12,
      Max_Power 	:"759.01bhp@8500rpm",
      Max_Torque :	"720Nm@6750rpm"
    }
  }
]

function App() {
  return (
   <div>
    <Cars list ={cars} name="lamborgini"/>
    <br/>
    <Cars list ={cars} name="BMW"/>
   </div>
  );
}

export default App;
