import {Route, Routes} from 'react-router-dom'
import './App.css';
import Styles from "./Components/Styles";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Styles/>}/>
      </Routes>
    
  );
}

export default App;
