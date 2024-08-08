import React , { useEffect, useState }  from 'react';
import useInViewHook from '../../hooks/useInViewHook';
import { Link } from 'react-router-dom';
import './Hcards.css';

const cards = [
    
    { image: '/images/home/calendar.gif', 
      title: 'Permanente formación de los recursos humanos para acompañar a las necesidades del negocio', 
      link: '/calendario' 
    },
    { image: '/images/home/bureau-veritas.gif', 
      title: 'Comprometidos de cumplir con los requisitos aplicables y la mejora continua de nuestro sistema de gestion de calidad', 
      link: '/institiucional' 
      },
    { image: '/images/home/hardox.gif', 
      title: 'Maximizamos la performance de los equipos, desarrollando proveedores que aseguren la cadena de abastecimiento enfocada en las necesidades del cliente y del mercado', 
      link: '/institucional'  
      },
    { image: '/images/home/historia.gif', 
      title: 'Soluciones integrales para el acopio de materiales, dosificación, elaboracion y transporte de hormigón y productos afines, disponiendo hacia el cliente experiencia y especialización técnica en el rubro a través de un equipo multidisciplinario en los distintos campos de la ingeniería', 
      link: '/institiucional', 
      },
]

const Hcards = () => {
  const [bannerInViewOnce, setBannerInViewOnce] = useState(false);
  const {ref:bannerRef, inView: bannerInView} = useInViewHook(1);


useEffect(() => {
  
  if (bannerInView && !bannerInViewOnce) {
      setBannerInViewOnce(true);
  }
}, [bannerInView, bannerInViewOnce]);

  return (
<section className="hcards-section">
  <h2 ref={bannerRef} className= {`hcards-title ${bannerInViewOnce ? 'in-view-banner' : ''} `}>64 años de experiencia</h2>
  <p className='hcards-subtitle'>Acompañando las crecientes necesidades del mercado, asegurando la continua innovación de nuestros equipos
    con foco en la investigacion y desarrollo de automatismos, tecnología avanzada y soluciones informáticas que
    optimice el menor costo, mayor calidad y productividad de hormigón elaborado 
  </p>
  <div className="cards-container">
      {cards.map((card, index) => (
        
        <article key={index} className="card" style={{ backgroundImage: `url(${card.image})` }}>
         
          <div className="card-content">
          <div className="card-overlay">
          <Link className='hcards-link' to= {card.link}>
          <h4 className='card-title'>{card.title}</h4>
         
          </Link>
            </div>
          </div>
          
        </article>
       
      ))}
      </div>
    </section>
  );
};

export default Hcards;

