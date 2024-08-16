import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../../Data/products.json';
import './Producto.css';
import Box from '../contacto/Box';
import Carrusel from '../utils/Carrusel'

const Producto = () => {
  const { id } = useParams();
  const product = productsData.find(product => product.id === id);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <section className="product">
      <div className="product-image" style={{ backgroundImage: `url(${product.image})` }}>
        <div className="product-text">
          
          <h1>{product.title}</h1>
          
        </div>
      </div>
      <div className="product-image-first" style={{ backgroundImage: `url(${product.image})` }}>
        <div className="product-text-first">
          <h2>{product.title}</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Expedita adipisci velit aut quisquam inventore harum sapiente amet nam. 
            Architecto eum, consectetur adipisci voluptatibus ratione officiis sint 
            voluptatum at porro distinctio! Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Excepturi odit molestias consectetur consequatur nesciunt a fugiat blanditiis quos? 
            Praesentium est possimus nisi impedit quibusdam.
             Quo vel cupiditate similique laborum neque.</p>
        </div>
      </div>
      <div className="product-carousel">
      <Carrusel title={product.title} images={product.images.map(img => img.value)} />

        {/*product.images.map((content, index) => (

          
          <div key={index} className="producto-grid-cell">
            {content.type === 'image' ? (
              <img src={content.value} alt="" className="producto-grid-image" />
            ) : (
              <p>{content.value}</p>
            )}
          </div>
        ))*/}
      </div>
      <div className="product-image-second" style={{ backgroundImage: `url(${product.image})` }}>
        <div className="product-text-second">
          <div>
            <h2>{product.title}</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Expedita adipisci velit aut quisquam inventore harum sapiente amet nam. 
              Architecto eum, consectetur adipisci voluptatibus ratione officiis sint 
              voluptatum at porro distinctio! Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Excepturi odit molestias consectetur consequatur nesciunt a fugiat blanditiis quos? 
              Praesentium est possimus nisi impedit quibusdam.
             Quo vel cupiditate similique laborum neque.</p>
             </div>
        </div>
      </div>
      <Box />
    </section>
  );
};

export default Producto;
