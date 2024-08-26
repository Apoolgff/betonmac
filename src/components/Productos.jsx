import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Productos.css';

const Productos = () => {
  const [products, setProducts] = useState([]);
  const [hovered, setHovered] = useState(false);
  const [selectedType, setSelectedType] = useState('');
  const [selectedSubType, setSelectedSubType] = useState('');

  useEffect(() => {
    fetch('/src/Data/products.json')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const productTypes = [
    'plantas de hormigon',
    'hormigoneras',
    'silos',
    'accesorios',
    'proyectos',
    'automatismos',
  ];

  const submenuOptions = {
    'plantas de hormigon': [
      'plantas dosificadoras',
      'plantas elaboradoras',
      'plantas para grandes obras',
      'torres de mezclado / mezcladoras',
      'sistemas de alimentacion de aridos',
      'sistemas de transporte de hormigon',
    ],
  };

  // Filtra productos por el tipo seleccionado
  const filteredProducts = selectedType
    ? products.filter(product => product.Type.toLowerCase() === selectedType.toLowerCase())
    : products;

  // Filtra productos por el subtipo seleccionado
  const filteredSubProducts = selectedSubType
    ? filteredProducts.filter(product => product.SubType && product.SubType.toLowerCase() === selectedSubType.toLowerCase())
    : filteredProducts;

  return (
    <div className="productos-container">
      <div className="top-bar">
        {productTypes.map(type => (
          <div
            key={type}
            className="top-bar-item"
            onMouseEnter={() => type === 'plantas de hormigon' && setHovered(true)}
            onMouseLeave={() => type === 'plantas de hormigon' && setHovered(false)}
            onClick={() => {
              setSelectedType(type);
              setSelectedSubType('');
            }} // Filtra productos por tipo al hacer clic
          >
            {type}
            {type === 'plantas de hormigon' && hovered && (
              <div className="submenu">
                {submenuOptions[type].map(option => (
                  <div
                    key={option}
                    className="submenu-item"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedSubType(option);
                    }} // Filtrar productos por subtipo al hacer clic
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
        <div
          className="top-bar-item"
          onClick={() => {
            setSelectedType('');
            setSelectedSubType('');
          }} // Muestra todos los productos al hacer clic en "Todos"
        >
          Todos
        </div>
      </div>
      <div className="product-grid">
        {filteredSubProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} className="product-card-image" />
            <h3>{product.title}</h3>
            <p>{product.subtitle}</p>
            <Link to={`/producto/${product.id}`} className="product-card-button">
              Ver Producto
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
