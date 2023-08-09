import './App.css';
import Item from './components/Item';
import Assign1 from './components/Assign1';
function App() {
const carData = {
  car1: {
    name: "Car Model 1",
    image: "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Hyundai-Grand-i10-Nios-200120231541.jpg&w=872&h=578&q=75&c=1",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    specifications: ["Spec 1: Value", "Spec 2: Value", "Spec 3: Value"],
  },
  car2: {
    name: "Car Model 2",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCya7c94Klx4C8t86wFT44YivG2otS-Ymkj2TocD_&s",
    features: ["Feature A", "Feature B", "Feature C"],
    specifications: ["Spec A: Value", "Spec B: Value", "Spec C: Value"],
  },
};
  return (
    <div className="App">
<Item></Item>
<Assign1 car={carData.car1}></Assign1>
<Assign1 car={carData.car2}></Assign1>
    </div>
  );
}

export default App;