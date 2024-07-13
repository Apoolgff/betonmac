import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import Inicio from './components/Inicio';
import Productos from './components/Productos'
import Institucional from './components/Institucional';
import Obras from "./components/Obras";
import Contacto from './components/Contacto';
import Calendario from "./components/Calendario";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/institucional" element={<Institucional />} />
        <Route path="/obras" element={<Obras />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/calendario" element={<Calendario />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
