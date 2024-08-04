import React from 'react';
import './Institucional.css';
import './utils/Button.css';

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
        <p>BETONMAC S.A. una empresa de Ingeniería con experiencia y creatividad, comprometida con la continua renovación e innovación. Equipos productivos y auxiliares de última generación han acompañado el constante desarrollo y creación de nuevos productos y soluciones impulsados por un plantel altamente calificado.</p>
      </div>

      {/*Cards*/}

     
      <section className="article-container">
        
          <article  className="article card-especializacion" >
            <div className="article-content" >
              <h3>Especializacion</h3>
              <p className="short-text">Dirigida a la producción de hormigones y afines, desde sistemas de acopio de materiales...</p>
              <p className="full-text">Dirigida a la producción de hormigones y afines, desde sistemas de acopio de materiales, su dosificación, mezclado, automatización de procesos.
PLANTAS DOSIFICADORAS Y ELABORADORAS DE HORMIGON - MOTOHORMIGONEROS -SISTEMAS DE CARGA Y ACOPIO DE ARIDOS - SILOS PARA CEMENTO
AUTOMATIZACIÓN DE PROCESOS</p>
            </div>
          </article>
          <article  className="article  card-ingenieria">
            <div className="article-content" >
              <h3>Ingenieria</h3>
              <p className="short-text">Los ingenieros, técnicos y personal de Betonmac S.A tienen... </p>
              <p className="full-text">Los ingenieros, técnicos y personal de Betonmac S.A tienen un profundo conocimiento sobre todo tipo de instalaciones y requerimientos de la especialidad, acumulado y perfeccionado por más de cincuenta años de experiencia. Esto permite realizar nuevos proyectos con gran celeridad y confiabilidad.


Desde 1970 en su propio departamento de electrónica e informática ha desarrollado y aplicado la tecnología más moderna en automatizaciones y control de procesos industriales.</p>
            </div>
          </article>
          <article  className="article  card-diversificacion">
            <div className="article-content" >
              <h3>Diversificacion</h3>
              <p className="short-text">En BETONMAC S.A. se producen además equipos especiales, automatizaciones y ... </p>
              <p className="full-text">En BETONMAC S.A. se producen además equipos especiales, automatizaciones y control de procesos industriales para:
Transporte neumático de materiales
Alimentos balanceados
Fertilizantes
Industrias de:
Aditivos
Pegamentos
Pilas eléctricas
Vidrios
Vinificadores</p>
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
      <div className="institucional-separator">
      <h2 className='institucional-history'> Historia</h2>
      </div>

      {/*Historia*/}
      <div className="history">
        
        <p>En 1960, Luciano Bulgarelli, su fundador, a partir de su formación técnica y su experiencia directa en obras públicas y privadas, especialmente en hormigón, vió la necesidad de buscar algo simple y económico, que aumentara sensiblemente la productividad y asegurara la calidad del hormigón. Fué así que surgieron los primeros equipos BETONMAC.

A 10 años de su iniciación, en 1970, BETONMAC S.A. traslada sus instalaciones a la ubicación actual, sobre un terreno de aproximadamente 35.000 m2, donde dispone de 7.500 m2 de superficie cubierta, totalmente servidos por 14 puentes grúa de diferentes capacidades y equipamiento de última generación.

Desde entonces BETONMAC cuenta con su propio departamento de desarrollo de electrónica e informática habiendo desarrollado y aplicado con diseño propio la tecnología más moderna en automatizaciones y control de procesos industriales.
Sus más de 50 modelos de plantas dosificadoras y elaboradoras, junto a sus soluciones en automatización y control de procesos, cubren las más variadas necesidades de producción de hormigón desde 10 hasta 400 m3/hora.
Esto le permite ofrecer al mundo, productos de alta confiabilidad y calidad, ubicándose en una posición de primer nivel en los mercados internacionales. Los equipos BETONMAC están presentes en las obras de ingeniería civil más grandes de Sudamérica y Centroamérica, dado que reconocidas empresas constructoras del mundo confían en la calidad de sus productos y su soporte post venta. Sus equipos llegan a Brasil, Bolivia, Chile, Colombia, Costa Rica, Ecuador, Paraguay, Perú, Santo Domingo, El Salvador, Uruguay y Venezuela, entre otros mercados.
Hoy, con mas de 50 años de sólida actividad, se posiciona cómo líder y referente del sector y ha logrado consolidar desde 1977 una prestigiosa trayectoria exportadora.</p>
      </div>

      {/*Seccion de Premios*/}
      <section className='services'>
        <figure>
          <div className='service-image'>
            <div className='harallelogram-container'>
                      <div className='harallelogram harallelogram-c harallelogram-service'></div>
                      <div className='harallelogram harallelogram-a harallelogram-service'></div>
                      <div className='harallelogram harallelogram-b harallelogram-service'></div>
                      <div className='harallelogram harallelogram-d harallelogram-service'></div>
                      <div className='harallelogram harallelogram-e harallelogram-service'></div>
                      <div className='harallelogram harallelogram-f harallelogram-service'></div>          
            </div>
          </div>
          <figcaption>
          Premio al mayor volumen exportado
          </figcaption>
        </figure>
        <figure>
        <div className='service-image'>
            <div className='harallelogram-container'>
                      <div className='harallelogram harallelogram-c harallelogram-service'></div>
                      <div className='harallelogram harallelogram-a harallelogram-service'></div>
                      <div className='harallelogram harallelogram-b harallelogram-service'></div>
                      <div className='harallelogram harallelogram-d harallelogram-service'></div>
                      <div className='harallelogram harallelogram-e harallelogram-service'></div>
                      <div className='harallelogram harallelogram-f harallelogram-service'></div>          
            </div>
          </div>
          <figcaption>
          Distincion a la trayectoria exportadora
          </figcaption>
        </figure>
        <figure>
        <div className='service-image'>
            <div className='harallelogram-container'>
                      <div className='harallelogram harallelogram-c harallelogram-service'></div>
                      <div className='harallelogram harallelogram-a harallelogram-service'></div>
                      <div className='harallelogram harallelogram-b harallelogram-service'></div>
                      <div className='harallelogram harallelogram-d harallelogram-service'></div>
                      <div className='harallelogram harallelogram-e harallelogram-service'></div>
                      <div className='harallelogram harallelogram-f harallelogram-service'></div>          
            </div>
          </div>
          <figcaption>
          Premio al grado de internalizacion
          </figcaption>
        </figure>
        <figure>
        <div className='service-image'>
            <div className='harallelogram-container'>
                      <div className='harallelogram harallelogram-c harallelogram-service'></div>
                      <div className='harallelogram harallelogram-a harallelogram-service'></div>
                      <div className='harallelogram harallelogram-b harallelogram-service'></div>
                      <div className='harallelogram harallelogram-d harallelogram-service'></div>
                      <div className='harallelogram harallelogram-e harallelogram-service'></div>
                      <div className='harallelogram harallelogram-f harallelogram-service'></div>          
            </div>
          </div>
          <figcaption>
          Miembro fundador de la AAHE
          </figcaption>
        </figure>
      </section>

      {/*Cards*/}
      <div className="cards-container-certification">
        {moreCardsData.map((card, index) => (
          <div key={index} className="card-certification">
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
