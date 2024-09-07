

import React , { useEffect, useState }  from 'react';
import useInViewHook from '../../hooks/useInViewHook';
import { Link } from 'react-router-dom';
import './Hproducts.css';

const products = [
    { image: 'https://betonmac.com/images/Imagenes/Plantas/Dosificadoras/Fotos-dosif/NM120-1.jpg', 
      title: 'plantas de hormigon', 
      url: '/productos',
      class: 'home-product-plantas'},
    { image: 'https://betonmac.com/images/Imagenes/Dispositivas/principal/MTH-10-MB-SLIDE.jpg', 
      title: 'motohormigoneras', 
      url: '/productos',
      class: 'home-product-motohormigoneras'},
    { image: 'https://betonmac.com/images/Imagenes/Portadas-plantas/SILOS/silos1.jpg', 
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
  const [titleInViewOnce, setTitleInViewOnce] = useState(false);
  const {ref:titleref, inView: titleInView} = useInViewHook(1);


  useEffect(() => {
    if (titleInView && !titleInViewOnce) {
        setTitleInViewOnce(true);
    }
}, [titleInView, titleInViewOnce]);

const [figcaptionInViewOnce, setFigcaptionInViewOnce] = useState(false);
  const {ref:figcaptionref, inView: figcaptionInView} = useInViewHook(0.1);

  useEffect(() => {
    if (figcaptionInView && !figcaptionInViewOnce) {
        setFigcaptionInViewOnce(true);
    }
}, [figcaptionInView, figcaptionInViewOnce]);

  return (
    <div className='background'>
    <section className='home-container-products'>
      <h2 ref={titleref} className= {`hproducts-title ${titleInViewOnce ? 'in-view' : ''} `} >nuestros productos y servicios</h2>
      <p  className="hproducts-subtitle">Equipos confiables, que aseguran productividad y 
        calidad en el proceso de elaboración y dosificación de hormigón y productos afines con menores costos
        de producción para el cliente, logrado a partir de diseños precisos, procesos industriales eficientes
        y seguros, materias primas y componentes de calidad mundial
      </p>
      <article className= 'home-product-article'>
          {products.map((product, index) =>( 
          <Link className={`home-product-link ${product.class}`} to={product.url} key={index}>
          <figure className='home-product-figure'>
            <img  className= 'home-product-image' src={product.image} alt={product.title} />
            <figcaption ref={figcaptionref}  className= {`home-product-figcaption ${figcaptionInViewOnce ? `in-view${product.class}` : ''} ` } >{product.title}</figcaption>
          </figure>
          </Link>
          ))}
      </article>
    </section>
    </div>
  );
};

export default Hproducts;
