import React from 'react';
import './Obra.css';

const images = [
  {
    url: 'https://betonmac.com/images/stories/com_form2content/p4/f14/40.jpg',
    title: 'Nombre Obra',
    subtitle: 'Obra X'
  },
  {
    url: 'https://betonmac.com/images/stories/com_form2content/p4/f14/41.jpg',
    title: 'Nombre Obra',
    subtitle: 'Obra X'
  },
  {
    url: 'https://betonmac.com/images/stories/com_form2content/p4/f14/41.jpg',
    title: 'Nombre Obra',
    subtitle: 'Obra X'
  }
];

const servicesData = [
  { icon: '/images/icons/star.png', text: 'Planta' },
  { icon: '/images/icons/star.png', text: 'Automatismos' },
  { icon: '/images/icons/star.png', text: 'Equipamiento adicional' }
];

const Obra = () => {
  return (
    <div className="obra-container">
      {/*Hero con futuro carrusel*/}
      <div className="hero-carousel">
        {images.map((image, index) => (
          <div className="carousel-image" key={index} style={{ backgroundImage: `url(${image.url})` }}>
            <div className="carousel-text">
              <h1>{image.title}</h1>
              <h3>{image.subtitle}</h3>
            </div>
          </div>
        ))}
      </div>

      {/*Descripcion*/}
      <div className="descriptive-text">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel massa lacinia, facilisis eros eget, iaculis velit. Maecenas rutrum lectus pharetra risus molestie aliquam. Phasellus augue augue, mattis ac bibendum eget, scelerisque et quam. Ut sed lacinia sem. Aenean varius metus sit amet nibh pharetra, et pharetra eros porttitor. Nam eu tortor vitae nisl aliquam pretium quis a tortor.</p>
      </div>

      {/*Materiales utilizados*/}
      <div className="services-section">
        <h2>Servicios</h2>
        <div className="services-container">
          {servicesData.map((service, index) => (
            <div key={index} className="service">
              <div className="service-icon" style={{ backgroundImage: `url(${service.icon})` }}></div>
              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/*Separador Imagen*/}
      <div className="image-separator"></div>{ /*style={{ backgroundImage: 'url(https://example.com/separator.jpg)' }} */}

      {/*Descripcion de la obra/planta*/}
      <div className="centered-text-section">
        <h2>Descripcion de la Planta:</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel massa lacinia, facilisis eros eget, iaculis velit. Maecenas rutrum lectus pharetra risus molestie aliquam. Phasellus augue augue, mattis ac bibendum eget, scelerisque et quam. Ut sed lacinia sem. Aenean varius metus sit amet nibh pharetra, et pharetra eros porttitor. Nam eu tortor vitae nisl aliquam pretium quis a tortor. In efficitur, velit vitae gravida maximus, augue augue porttitor elit, nec rhoncus tellus elit a ante. Ut vitae feugiat est. In cursus mattis dolor a egestas. In consectetur maximus lectus nec posuere. Duis sollicitudin arcu et tincidunt accumsan. Suspendisse blandit consequat sagittis.</p>
      </div>
    </div>
  );
};

export default Obra;
