import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import CountClass from './components/CountClass/CountClass';
import CountFunction from './components/CountFunction/CountFunction';

function App() {
  return (
    <div className = "App">
      <Navbar />
      <CountFunction color= "blue"/>
    </div>
  );
}

export default App;
