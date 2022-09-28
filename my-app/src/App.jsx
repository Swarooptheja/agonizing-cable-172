import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Makeup from './components/makeup';
import Allroutes from './components/Allroutes';
// import Navbar2 from './components/Navbar2';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Allroutes/>
     {/* <Makeup/> */}
    </div>
  );
}

export default App;
