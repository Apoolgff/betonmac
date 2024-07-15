import React from 'react';
import './Hproducts.css';

const products = [
    { image: 'https://betonmac.com/images/Imagenes/Portadas-plantas/Portada-dosif.jpg', title: 'Plantas de hormigon' },
    { image: 'https://betonmac.com/images/Imagenes/PortadasMTH/Portada-MTH-SEMI.jpg', title: 'Motohormigoneras' },
    { image: 'https://betonmac.com/images/Imagenes/Portadas-plantas/SILOS/silos1.jpg', title: 'Silos' },
    { image: 'https://betonmac.com/images/Imagenes/Portadas-plantas/COMPLEMENTOS/Micro.jpg', title: 'Accesorios' },
    { image: 'https://betonmac.com/images/Imagenes/Portadas-plantas/Portada-Interior-Mina.jpg', title: 'Proyectos' },
    { image: 'https://betonmac.com/images/Imagenes/automatismos/betonmatic/betonmatic-ini.png', title: 'Automatismos' },
  ];

const Hproducts = () => {
  return (
    <div className="products-grid">
      {products.map((product, index) => (
        <div 
          key={index} 
          className="product-cell" 
          style={{ backgroundImage: `url(${product.image})` }}
        >
          <div className="product-overlay"></div>
          <h2 className="product-title">{product.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Hproducts;
