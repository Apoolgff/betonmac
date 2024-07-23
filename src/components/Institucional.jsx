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
    <section className="institucional-container">
      {/*Hero */}
      <header className="hero-section">
        <div className="hero-image">
          <div className="institucional-hero-text">
            <h1>empresa</h1>
            <h3>sub-texto de la empresa</h3>
          </div>
        </div>
      </header>

      {/*Ttexto descriptivo */}
      <div className="institucional-description">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel massa lacinia, facilisis eros eget, iaculis velit. Maecenas rutrum lectus pharetra risus molestie aliquam. Phasellus augue augue, mattis ac bibendum eget, scelerisque et quam. Ut sed lacinia sem. Aenean varius metus sit amet nibh pharetra, et pharetra eros porttitor. Nam eu tortor vitae nisl aliquam pretium quis a tortor. In efficitur, velit vitae gravida maximus, augue augue porttitor elit, nec rhoncus tellus elit a ante. Ut vitae feugiat est. In cursus mattis dolor a egestas. In consectetur maximus lectus nec posuere. Duis sollicitudin arcu et tincidunt accumsan. Suspendisse blandit consequat sagittis.</p>
      </div>

      {/*Cards*/}

     
      <section className="article-container">
        
          <article  className="article card-especializacion" >
            <div className="article-content" >
              <h3>Especializacion</h3>
              <p className="short-text">Parte del texto... (hover para más)</p>
              <p className="full-text">Texto completo que se mostrará al hacer hover. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
            </div>
          </article>
          <article  className="article  card-ingenieria">
            <div className="article-content" >
              <h3>Ingenieria</h3>
              <p className="short-text">Parte del texto... (hover para más)</p>
              <p className="full-text">Texto completo que se mostrará al hacer hover. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
            </div>
          </article>
          <article  className="article  card-diversificacion">
            <div className="article-content" >
              <h3>Diversificacion</h3>
              <p className="short-text">Parte del texto... (hover para más)</p>
              <p className="full-text">Texto completo que se mostrará al hacer hover. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
            </div>
          </article>
         
      </section>

      {/*Seccion de Servicios*/}
      <section className='services'>
        <figure >
          <img src='/images/icons/calidad.png' alt="calidad" />
          <figcaption>
            control de calidad
          </figcaption>
        </figure>
        <figure>
          <img src='/images/icons/stock.png' alt="stock" />
          <figcaption>
            stock permanente
          </figcaption>
        </figure>
        <figure>
          <img src='/images/icons/tecnico.png' alt="tecnico" />
          <figcaption>
            servicio tecnico especializado
          </figcaption>
        </figure>
      </section>

      {/*Separador*/}
      <div className="institucional-separator"></div>

      {/*Historia*/}
      <div className="history">
        <h2>Historia</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel massa lacinia, facilisis eros eget, iaculis velit. Maecenas rutrum lectus pharetra risus molestie aliquam. Phasellus augue augue, mattis ac bibendum eget, scelerisque et quam. Ut sed lacinia sem. Aenean varius metus sit amet nibh pharetra, et pharetra eros porttitor. Nam eu tortor vitae nisl aliquam pretium quis a tortor. In efficitur, velit vitae gravida maximus, augue augue porttitor elit, nec rhoncus tellus elit a ante. Ut vitae feugiat est. In cursus mattis dolor a egestas. In consectetur maximus lectus nec posuere. Duis sollicitudin arcu et tincidunt accumsan. Suspendisse blandit consequat sagittis.

Praesent sit amet est in risus hendrerit malesuada. Ut vitae nunc aliquam, condimentum sem in, tempor augue. Sed euismod efficitur urna, id euismod nulla vulputate at. Nulla suscipit turpis odio, a placerat velit lobortis ut. Ut molestie consequat nisl, ac tristique eros ultrices nec. Integer accumsan nunc non pharetra bibendum. Vivamus sit amet arcu risus.</p>
      </div>

      {/*Seccion de Premios*/}
      <section className='services'>
        <figure>
          <img src='/images/icons/star.png' alt="calidad" />
          <figcaption>
          Premio al mayor volumen exportado
          </figcaption>
        </figure>
        <figure>
          <img src='/images/icons/star.png' alt="stock" />
          <figcaption>
          Distincion a la trayectoria exportadora
          </figcaption>
        </figure>
        <figure>
          <img src='/images/icons/star.png' alt="tecnico" />
          <figcaption>
          Premio al grado de internalizacion
          </figcaption>
        </figure>
        <figure>
          <img src='/images/icons/star.png' alt="tecnico" />
          <figcaption>
          Miembro fundador de la AAHE
          </figcaption>
        </figure>
      </section>

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
    </section>
  );
};

export default Institucional;
