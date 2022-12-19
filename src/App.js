
import { Route,Routes } from 'react-router-dom';
import { Homepage,Watches,About ,New_Arrival} from './pages';
import './stylesheets/App.css';


function App() {
  return (
    <Routes>
        <Route  path='/' element={< Homepage />} />
        <Route  path='/watches' element={< Watches />} />
        <Route  path='/About' element={< About />} />
        <Route  path='/New_Arrival' element={< New_Arrival />} />
      
            
        
    </Routes>
    // <div className="App">
    // <Homepage/>

    // </div>
  );
}

export default App;
