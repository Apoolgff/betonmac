import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../../Data/products.json';
import './Producto.css';
import Box from '../contacto/Box';

const Producto = () => {
  const { id } = useParams();
  const product = productsData.find(product => product.id === id);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="producto">
      <div className="producto-image" style={{ backgroundImage: `url(${product.image})` }}>
        <div className="producto-text">
          <h2>{product.title}</h2>
          <h4>{product.subtitle}</h4>
        </div>
      </div>
      <hr className="producto-separator" />
      <p className="producto-description">{product.description}</p>
      <div className="producto-grid">
        {product.gridContent.map((content, index) => (
          <div key={index} className="producto-grid-cell">
            {content.type === 'image' ? (
              <img src={content.value} alt="" className="producto-grid-image" />
            ) : (
              <p>{content.value}</p>
            )}
          </div>
        ))}
      </div>
      <Box />
    </div>
  );
};

export default Producto;
