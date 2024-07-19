import React from 'react';
import './Institucional.css';

const Institucional = () => {
  const cardsData = [
    {
      image: 'https://betonmac.com/images/Imagenes/Empresa/Inicios.JPG',
      title: 'Especializacion',
      shortText: 'Parte del texto... (hover para más)',
      fullText: 'Texto completo que se mostrará al hacer hover. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
    },
    {
      image: 'https://betonmac.com/images/Imagenes/Empresa/Belomonte-SMALL.jpg',
      title: 'Ingenieria',
      shortText: 'Parte del texto... (hover para más)',
      fullText: 'Texto completo que se mostrará al hacer hover. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
    },
    {
      image: 'https://betonmac.com/images/Imagenes/Empresa/Plaqueta2.jpg',
      title: 'Diversidicacion',
      shortText: 'Parte del texto... (hover para más)',
      fullText: 'Texto completo que se mostrará al hacer hover. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
    },
  ];

  const servicesData = [
    { icon: '/images/icons/calidad.png', text: 'Control de calidad' },
    { icon: '/images/icons/stock.png', text: 'Stock permanente' },
    { icon: '/images/icons/tecnico.png', text: 'Serviciotecnico especializado' },
  ];


  const moreServicesData = [
    { icon: '/images/icons/star.png', text: 'Premio al mayor volumen exportado' },
    { icon: '/images/icons/star.png', text: 'Distincion a la trayectoria exportadora' },
    { icon: '/images/icons/star.png', text: 'Premio al grado de internalizacion' },
    { icon: '/images/icons/star.png', text: 'Miembro fundador de la AAHE' },
  ];

  const moreCardsData = [
    {
      image: 'https://betonmac.com/images/Imagenes/Logo/Certificado-HARDOX.jpg',
      title: 'Hardox',
      text: 'Texto descriptivo de Hardox.',
    },
    {
      image: 'https://betonmac.com/images/Imagenes/Empresa/E-RD-01.gif',
      title: 'Politicas de calidad',
      text: 'Texto descriptivo de las politicas de calidad.',
    },
    {
      image: 'https://betonmac.com/images/Imagenes/Empresa/CertificadoISO9001-2021.jpg',
      title: 'ISO 9001: 2015',
      text: 'Texto descriptivo de iso 9001.',
    },
  ];

  return (
    <div className="institucional-container">
      {/*Hero */}
      <div className="hero-section">
        <div className="hero-image">
          <div className="hero-text">
            <h1>BETONMAC</h1>
            <h3>Sub-texto de la empresa</h3>
          </div>
        </div>
      </div>

      {/*Ttexto descriptivo */}
      <div className="separator-text">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel massa lacinia, facilisis eros eget, iaculis velit. Maecenas rutrum lectus pharetra risus molestie aliquam. Phasellus augue augue, mattis ac bibendum eget, scelerisque et quam. Ut sed lacinia sem. Aenean varius metus sit amet nibh pharetra, et pharetra eros porttitor. Nam eu tortor vitae nisl aliquam pretium quis a tortor. In efficitur, velit vitae gravida maximus, augue augue porttitor elit, nec rhoncus tellus elit a ante. Ut vitae feugiat est. In cursus mattis dolor a egestas. In consectetur maximus lectus nec posuere. Duis sollicitudin arcu et tincidunt accumsan. Suspendisse blandit consequat sagittis.</p>
      </div>

      {/*Cards*/}
      <div className="cards-container">
        {cardsData.map((card, index) => (
          <div key={index} className="card">
            <div className="card-content" style={{ backgroundImage: `url(${card.image})` }}>
              <h3>{card.title}</h3>
              <p className="short-text">{card.shortText}</p>
              <p className="full-text">{card.fullText}</p>
            </div>
          </div>
        ))}
      </div>

      {/*Seccion de Servicios*/}
      <div className="services-section">
        {servicesData.map((service, index) => (
          <div key={index} className="service">
            <div className="service-icon" style={{ backgroundImage: `url(${service.icon})` }}></div>
            <p>{service.text}</p>
          </div>
        ))}
      </div>

      {/*Separador*/}
      <div className="image-separator"></div>

      {/*Historia*/}
      <div className="centered-text-section">
        <h2>Historia</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel massa lacinia, facilisis eros eget, iaculis velit. Maecenas rutrum lectus pharetra risus molestie aliquam. Phasellus augue augue, mattis ac bibendum eget, scelerisque et quam. Ut sed lacinia sem. Aenean varius metus sit amet nibh pharetra, et pharetra eros porttitor. Nam eu tortor vitae nisl aliquam pretium quis a tortor. In efficitur, velit vitae gravida maximus, augue augue porttitor elit, nec rhoncus tellus elit a ante. Ut vitae feugiat est. In cursus mattis dolor a egestas. In consectetur maximus lectus nec posuere. Duis sollicitudin arcu et tincidunt accumsan. Suspendisse blandit consequat sagittis.

Praesent sit amet est in risus hendrerit malesuada. Ut vitae nunc aliquam, condimentum sem in, tempor augue. Sed euismod efficitur urna, id euismod nulla vulputate at. Nulla suscipit turpis odio, a placerat velit lobortis ut. Ut molestie consequat nisl, ac tristique eros ultrices nec. Integer accumsan nunc non pharetra bibendum. Vivamus sit amet arcu risus.</p>
      </div>

      {/*Seccion de Premios*/}
      <div className="services-section">
        {moreServicesData.map((service, index) => (
          <div key={index} className="service">
            <div className="service-icon" style={{ backgroundImage: `url(${service.icon})` }}></div>
            <p>{service.text}</p>
          </div>
        ))}
      </div>

      {/*Cards*/}
      <div className="cards-container">
        {moreCardsData.map((card, index) => (
          <div key={index} className="card">
            <div className="card-content-us" style={{ backgroundImage: `url(${card.image})` }}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Institucional;
