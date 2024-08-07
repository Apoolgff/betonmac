import React, { useState, useEffect } from 'react';
import './Region.css'

const Region = () => {
  const [selectedRegion, setSelectedRegion] = useState('local');

  const handleButtonClick = (region) => {
    setSelectedRegion(region);
  };

  const regions = {
    local: [
      { title: 'chubut, santa cruz' },
      { title: 'Pergamino y alrrededores' },
      { title: 'Misiones, Formosa, Chaco y Corrientes' },
      { title: 'Mendoza y San Juan' },
      { title: 'Salta, Jujuy, Tucumán, Santiago del Estero, Catamarca, La Rioja.' },
      { title: 'Córdoba, Santa Fe, Entre Ríos, La Pampa.' },
      { title: 'Neuquen, Rio Negro' },
      { title: 'CABA , Pcia de Buenos Aires' },
    ],
    sudamerica: [
      { title: 'brasil' },
      { title: 'bolivia' },
      { title: 'chile' },
      { title: 'ecuador' },
      { title: 'peru' },
      { title: 'uruguay' },
    ],
  };

  return (
    <div>
      <article className='contact-region'>
        <div 
          className={`harallelogram-container harallelogram-checkbox ${selectedRegion === 'local' ? 'selected' : ''}`}
          onClick={() => handleButtonClick('local')}
        >
          <div className='harallelogram harallelogram-c'></div>
          <div className='harallelogram harallelogram-a'></div>
          <div className='harallelogram harallelogram-b'></div>
          <div className='harallelogram harallelogram-d'></div>
          <div className='harallelogram harallelogram-e'></div>
          <div className='harallelogram harallelogram-f'></div>
          <h2 className="contact-main-title">local</h2>
        </div>
        <div 
          className={`harallelogram-container harallelogram-checkbox ${selectedRegion === 'sudamerica' ? 'selected' : ''}`}
          onClick={() => handleButtonClick('sudamerica')}
        >
          <div className='harallelogram harallelogram-c'></div>
          <div className='harallelogram harallelogram-a'></div>
          <div className='harallelogram harallelogram-b'></div>
          <div className='harallelogram harallelogram-d'></div>
          <div className='harallelogram harallelogram-e'></div>
          <div className='harallelogram harallelogram-f'></div>
          <h2 className="contact-main-title">sudamérica</h2>
        </div>
      </article>
      {/* Grilla de Contactos */}
      <div className="contact-list">
        {selectedRegion && regions[selectedRegion].map((ubi, index) => (
          <details key={index} className="contact-details">
            <summary className='contact-summary'>
              <h3 className='summary-title'>{ubi.title}</h3>
              <div className='summary-button'>
                <div className='button-hexagon-blue'>
                  <div className='harallelogram-container harallelogram-button'>
                    <div className='harallelogram harallelogram-c animation-button-left'></div>
                    <div className='harallelogram harallelogram-a animation-button-left'></div>
                    <div className='harallelogram harallelogram-b animation-button-top'></div>
                    <div className='harallelogram harallelogram-d animation-button-top'></div>
                    <div className='harallelogram harallelogram-e animation-button-right'></div>
                    <div className='harallelogram harallelogram-f animation-button-right'></div>
                    <img className="button-hexagon-full" src="/public/images/icons/button-blue-top-full.png" alt="" />
                  </div>
                </div>
              </div>
            </summary>
            
          </details>
        ))}
      </div>
    </div>
  );
};

export default Region;
