
import React from 'react';
import { Link } from 'react-router-dom';
import './Hproducts.css';

const products = [
    { image: 'https://betonmac.com/images/Imagenes/Dispositivas/principal/Represas-patagonia.jpg', 
      title: 'plantas de hormigon', 
      url: '/productos',
      class: 'home-product-plantas'},
    { image: 'https://betonmac.com/images/Imagenes/Dispositivas/principal/MTH-10-MB-SLIDE.jpg', 
      title: 'motohormigoneras', 
      url: '/productos',
      class: 'home-product-motohormigoneras'},
    { image: '/public/images/home/silos.jpg', 
      title: 'silos', 
      url: '/productos',
      class: 'home-product-silos'},
    { image: 'https://betonmac.com/images/Imagenes/Portadas-plantas/COMPLEMENTOS/Cinta-pesadora.jpg', 
      title: 'accesorios', 
      url: '/productos',
      class: 'home-product-accesorios'  },
    { image: 'https://betonmac.com/images/stories/com_form2content/p4/f16/40.jpg', 
      title: 'proyectos', 
      url: '/productos',
      class: 'home-product-proyectos'
    },
    { 
      image: 'https://betonmac.com/images/Imagenes/Empresa/display.jpg', 
      title: 'automatismos', 
      url: '/productos',
      class: 'home-product-automatismos'
    },
      
  ];

  

const Hproducts = () => {
 


  return (
    <div className='background'>
    <section className='home-container-products'>
      <h2  className='hproducts-title'>nuestros productos y servicios</h2>
      <p  className='home-products-subtitle'>Equipos confiables, que aseguran productividad y 
        calidad en el proceso de elaboración y dosificación de hormigón y productos afines con menores costos
        de producción para el cliente, logrado a partir de diseños precisos, procesos industriales eficientes
        y seguros, materias primas y componentes de calidad mundial
      </p>
      <article className='home-product-article'>
          {products.map((product, index) =>( 
          <Link className={`home-product-link ${product.class}`} to={product.url}>
          <figure className='home-product-figure'>
            <img className='home-product-image' src={product.image} alt={product.title} />
            <figcaption   className='home-product-figcaption'>{product.title}</figcaption>
          </figure>
          </Link>
          ))}
      </article>
    </section>
    </div>
  );
};

export default Hproducts;
