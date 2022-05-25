
import './App.css';
import Navbar from './components/Nabvar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Header from './components/Header/Header';




function App() {
  return (
    <div className= "App">
        <Navbar />
        <Header  greeting="Micro 3D" parraf="Productos & Diseños"/>
        <ItemListContainer />
     

      
    </div>
    
  );
}

export default App;
