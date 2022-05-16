
import './App.css';
import Navbar from './components/Nabvar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className= "App">
        <Navbar />
        <ItemListContainer  greeting="Bienvenidos a Micro3d" />
    </div>
    
  );
}

export default App;
