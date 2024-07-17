import React from 'react';
import './Hcards.css';

const cards = [
    { image: 'https://betonmac.com/images/Imagenes/Empresa/E-RD-01.gif', title: 'Calidad', reducedText: 'Texto previo card 1.', extendedText:'Texto extendido de la card 1 con muchas cositas que se muestran.' },
    { image: 'https://services.meteored.com/img/article/calendario-mese-febbraio-etimologia-perche-si-chiama-cosi-1675160616416_1280.jpg', title: 'Calendario', reducedText: 'Texto previo card 2.', extendedText:'Texto extendido de la card 2 con muchas cositas que se muestran..'},
    { image: 'https://betonmac.com/images/Imagenes/Logo/Certificado-HARDOX.jpg', title: 'Hardox', reducedText: 'Texto previo card 3.', extendedText:'Texto extendido de la card 3 con muchas cositas que se muestran..'},
    { image: 'https://betonmac.com/images/Imagenes/Empresa/Fabrica01.jpg', title: 'Historia', reducedText: 'Texto previo card 4.', extendedText:'Texto extendido de la card 4 con muchas cositas que se muestran..'},
]

const Hcards = () => {
  return (
<div className="cards-container">
      {cards.map((card, index) => (
        <div key={index} className="card" style={{ backgroundImage: `url(${card.image})` }}>
          
          <div className="card-content">
          <div className="card-overlay">
            <h2 className="card-title">{card.title}</h2>
            <p className="card-text">{card.reducedText}</p>
            <p className="card-text-extended">{card.extendedText}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hcards;

