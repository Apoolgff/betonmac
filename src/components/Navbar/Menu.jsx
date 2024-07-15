import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <nav className="nav-links">
            <Link to="/" className="nav-item">Inicio</Link>
            <Link to="/productos" className="nav-item">Productos</Link>
            <Link to="/institucional" className="nav-item">Institucional</Link>
            <Link to="/obras" className="nav-item">Obras</Link>
            <Link to="/contacto" className="nav-item">Contacto</Link>
            <Link to="/calendario" className="nav-item">Calendario</Link>
        </nav>
    );
};

export default Menu;