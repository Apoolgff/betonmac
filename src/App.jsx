import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer';
import Inicio from './components/Inicio';
import Productos from './components/Productos'
import Institucional from './components/Institucional';
import Obras from "./components/Obras";
import Obra from "./components/obras/Obra"
import Contacto from './components/Contacto';
import Calendario from "./components/Calendario";
import Producto from './components/Productos/Producto'
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/producto/:id" element={<Producto />} />
        <Route path="/institucional" element={<Institucional />} />
        <Route path="/obra" element={<Obra />} />
        <Route path="/obra/:id" element={<Obra />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/calendario" element={<Calendario />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
