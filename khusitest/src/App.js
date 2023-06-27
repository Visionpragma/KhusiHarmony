import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Tenant from './components/Tenant';
import { Router, Routes ,Route} from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Add the following line to initialize the library
library.add(faHouse);
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Tenant" element={<Tenant/>}/>
      </Routes>
      
      <Navbar/>
     
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello All KhusiHarmonite.Stay Tuned For a Brand New App!
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>
        <a
          
  >
          {/* Learn React */}
          KhusiHarmony-Where Life is in Harmony!
        </a>
      </header>
    </div>
  );
}

export default App;
