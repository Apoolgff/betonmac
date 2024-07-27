import React from 'react';
import './Hcards.css';

const cards = [
    { image: '/public/images/home/bureau-veritas.gif', title: 'Calidad', reducedText: 'Texto previo card 1.', extendedText:'Texto extendido de la card 1 con muchas cositas que se muestran.' },
    { image: '/images/home/calendar.gif', title: 'Calendario', reducedText: 'Texto previo card 2.', extendedText:'Texto extendido de la card 2 con muchas cositas que se muestran..'},
    { image: '/images/home/hardox.gif', title: 'Hardox', reducedText: 'Texto previo card 3.', extendedText:'Texto extendido de la card 3 con muchas cositas que se muestran..'},
    { image: 'https://betonmac.com/images/Imagenes/Empresa/Fabrica01.jpg', title: 'Historia', reducedText: 'Texto previo card 4.', extendedText:'Texto extendido de la card 4 con muchas cositas que se muestran..'},
]

const Hcards = () => {
  return (
<div className="cards-container">
      {cards.map((card, index) => (
        <div key={index} className="card" style={{ backgroundImage: `url(${card.image})` }}>
          
          <div className="card-content">
          <div className="card-overlay">
          <div className='button-hexagon-white'></div>
          
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hcards;

