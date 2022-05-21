
import './App.css';
import Navbar from './components/Nabvar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Itemcount from './components/ItemCount/ItemCount';
import ItemCard from './components/ItemCard/ItemCard';



function App() {
  return (
    <div className= "App">
        <Navbar />
        <ItemListContainer  greeting="Micro 3D" parraf="Productos & Diseños"/>
        <ItemCard />
      
    </div>
    
  );
}

export default App;
