import React from 'react';
import { Link } from 'react-router-dom';
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
    <section className='home-container-products'>
      
      <div className='home-product-container-title'>
      <h2 className='home-products-title'>productos y servicios</h2>
      <p className='home-products-subtitle'>Proporcionamos equipos confiables en el tiempo, que aseguran productividad y 
        calidad en el proceso de elaboración y dosificación de hormigón y productos afines con menores costos
        de producción para el cliente, logrado a partir de diseños precisos, procesos industriales eficientes
        y seguros, y materias primas y componentes de calidad mundial</p>
      </div>
      <div className='home-products'>
      <article className="home-products-cards">
        <div className='home-product-content'>
          <h2 className='home-product-title'>plantas de hormigon</h2>
          <Link className='home-product-link' to="/">
            ver mas
          </Link>
        </div>
        <img className='home-product-image ' src="/images/home/planta-movil.png" alt="" />
      </article>
      <article className="home-products-cards">
        <div className='home-product-content'>
          <h2 className='home-product-title'>motohormigoneras</h2>
          <Link className='home-product-link' to="/">
            ver mas
          </Link>
        </div>
        <img className='home-product-image home-product-image-2' src="/public/images/home/motohormigonera.png" alt="" />
      </article>
      <article className="home-products-cards">
        <div className='home-product-content'>
          <h2 className='home-product-title'>silos</h2>
          <Link className='home-product-link' to="/">
            ver mas
          </Link>
        </div>
        <img className='home-product-image'  src="/images/home/planta-movil.png" alt="" />
      </article>
      <article className="home-products-cards">
        <div className='home-product-content'>
          <h2 className='home-product-title'>accesorios</h2>
          <Link className='home-product-link' to="/">
            ver mas
          </Link>
        </div>
        <img className='home-product-image' src="/images/home/cinta.png" alt="" />
      </article>
      <article className="home-products-cards">
        <div className='home-product-content'>
          <h2 className='home-product-title'>proyectos</h2>
          <Link className='home-product-link' to="/">
            ver mas
          </Link>
        </div>
        <img className='home-product-image' src="/images/home/proyecto.png" alt="" />
      </article>
      <article className="home-products-cards">
        <div className='home-product-content'>
          <h2 className='home-product-title'>automatismos</h2>
          <Link className='home-product-link' to="/">
            ver mas
          </Link>
        </div>
        <img className='home-product-image home-product-image-6' src='https://betonmac.com/images/Imagenes/automatismos/betonmatic/betonmatic-ini.png' alt="" />
      </article>
      </div>
    </section>
  );
};

export default Hproducts;
