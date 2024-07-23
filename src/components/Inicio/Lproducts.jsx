import React from 'react';
import './Lproducts.css';

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
    <section className='products-section'>
      <article className="products-grid">
      <div className='garallelogram-container'>
                        <div className='garallelogram garallelogram-c'></div>
                        <div className='garallelogram garallelogram-a'></div>
                        <div className='garallelogram garallelogram-b'></div>
                        <div className='garallelogram garallelogram-d'></div>
                        <div className='garallelogram garallelogram-e'></div>
                        <div className='garallelogram garallelogram-f'></div>  
                </div>
      </article>
    </section>
  );
};

export default Hproducts;
