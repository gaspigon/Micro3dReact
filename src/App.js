
import './App.css';
import Navbar from './components/Nabvar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Itemcount from './components/ItemCount/ItemCount';
import ItemCard from './components/ItemCard/ItemCard';
import Header from './components/Header/Header';



function App() {
  return (
    <div className= "App">
        <Navbar />
        <Header  greeting="Micro 3D" parraf="Productos & Diseños"/>
        <ItemListContainer />
        <ItemCard />
      
    </div>
    
  );
}

export default App;
