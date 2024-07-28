import React from 'react';
import './Hcards.css';

const cards = [
    
    { image: '/images/home/calendar.gif', title: 'Permanente formación de los recursos humanos para acompañar a las necesidades del negocio', reducedText: 'Texto previo card 2.', extendedText:'Texto extendido de la card 2 con muchas cositas que se muestran..'},
    { image: '/public/images/home/bureau-veritas.gif', title: 'Comprometidos de cumplir con los requisitos aplicables y la mejora continua de nuestro sistema de gestion de calidad', reducedText: 'Texto previo card 1.', extendedText:'Texto extendido de la card 1 con muchas cositas que se muestran.' },
    { image: '/images/home/hardox.gif', title: 'Maximizamos la performance de los equipos, desarrollando proveedores que aseguren la cadena de abastecimiento enfocada en las necesidades del cliente y del mercado', reducedText: 'Texto previo card 3.', extendedText:'Texto extendido de la card 3 con muchas cositas que se muestran..'},
    { image: '/public/images/home/historia.gif', title: 'Soluciones integrales para el acopio de materiales, dosificación, elaboracion y transporte de hormigón y productos afines, disponiendo hacia el cliente experiencia y especialización técnica en el rubro a través de un equipo multidisciplinario en los distintos campos de la ingeniería', reducedText: 'Texto previo card 4.', extendedText:'Texto extendido de la card 4 con muchas cositas que se muestran..'},
]

const Hcards = () => {
  return (
<div className="cards-container">
      {cards.map((card, index) => (
        <div key={index} className="card" style={{ backgroundImage: `url(${card.image})` }}>
          
          <div className="card-content">
          <div className="card-overlay">
          
          <h4 className='card-title'>{card.title}</h4>
          
         
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hcards;

