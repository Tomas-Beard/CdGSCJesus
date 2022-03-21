import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import CompleteBar from './components/completebar';
import Cuerpom from "./pages/cuerpom"
import Serviciom from "./pages/serviciomed"
import Prep from "./pages/preps"
import Obrass from "./pages/obrass"
import Turnos from "./pages/turnos"
import Imagens from "./pages/imagenes"


const App =()=> {
  return (<div class="App">
    
    <BrowserRouter>
    <CompleteBar/>
    <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route exact path="/cuerpom" element={<Cuerpom></Cuerpom>} />
    <Route exact path="/servicioM" element={<Serviciom></Serviciom>} />
    <Route exact path="/preparaciones" element={<Prep></Prep>} />
    <Route exact path="/turnos" element={<Turnos></Turnos>} />
    <Route exact path="/obrasS" element={<Obrass></Obrass>} />
    <Route exact path="/imagenes" element={<Imagens></Imagens>} />
    
      
    </Routes>
    </BrowserRouter>
    
    </div>);
}

export default App;
