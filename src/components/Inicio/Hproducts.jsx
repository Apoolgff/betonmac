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
    <section className='home-products'>
      <article className="home-products-cards">
        <div className='home-product-content'>
          <h2 className='home-product-title'>plantas de hormigon</h2>
          <Link className='home-product-link' to="/">
            ver mas
          </Link>
        </div>
        <img className='home-product-image' src="/images/home/planta-movil.png" alt="" />
      </article>
      <article className="home-products-cards">
        <div className='home-product-content'>
          <h2 className='home-product-title'>motohormigoneras</h2>
          <Link className='home-product-link' to="/">
            ver mas
          </Link>
        </div>
        <img className='home-product-image' src="/public/images/home/motohormigonera.png" alt="" />
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
        <img className='home-product-image' src="" alt="" />
      </article>
      <article className="home-products-cards">
        <div className='home-product-content'>
          <h2 className='home-product-title'>automatismos</h2>
          <Link className='home-product-link' to="/">
            ver mas
          </Link>
        </div>
        <img className='home-product-image' src="/images/home/proyecto.png" alt="" />
      </article>
    </section>
  );
};

export default Hproducts;
