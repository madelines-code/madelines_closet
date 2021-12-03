import {Route, Routes} from 'react-router-dom'
import './App.css';
import Cloth from './Components/Cloth';
import Cloths from './Components/Cloths';
import Navbar from './Components/Navbar';
import Style from './Components/Style';
import StyleForm from './Components/StyleForm';
import Styles from "./Components/Styles";
import StyleShow from './Components/StyleShow';

function App() {
  return (
      <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Styles/>}/>
        <Route path="/styles/:id" element={<StyleShow/>} />
        <Route path="/styles/:id/cloths" element={<Cloths/>}/>
        <Route path="/styles/:id/cloth/:id" element={<Cloth/>}/>
        <Route path="/styles/new" element={<StyleForm/>}/>
        <Route path="/styles/:id/edit" element={<StyleForm/>}/>
      </Routes>
      </>
  );
}

export default App;
