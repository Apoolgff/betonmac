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

  const contact =  {
    image: '../../../public/images/icons/coronavirus_2947660.png',
    name: 'Alfonso Perez',
    company: 'Niquita SA',
    phone: '24812636',
    cellphone: '099046622',
    fax: '+456454',
    mail: 'alfonsoperez@niquita.com',
    web: 'www.niquita.com',
    address: 'Camino Casavalle 5166 124000 - Montevideo Uruguay',
    location: 'www.google.com'
}

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
          <p className="contact-main-title">local</p>
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
          <p className="contact-main-title">sudamérica</p>
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
            <section className='contact-card-list'>
                <article className='contact-card' >
                    <div  className='contact-card-top'>
                        
                            <p>{contact.name}</p>
                            <h6>{contact.company}</h6>
                            <a href={contact.web}>
                                <img src="../../../public/images/icons/web.png" alt="web" />
                                    {contact.web}
                                </a>
                            <a href={contact.location}>
                                    <img src="../../../public/images/icons/location.png" alt="location" />
                                    {contact.address}
                             </a>
                            
                        
                     </div>
                    <div className='contact-card-bottom'>
                        <div className='contact-card-bottom-left'>
                        <a href={`tel:${contact.phone}`}>
                            <img src="../../../public/images/icons/phone.png" alt="phone" />
                            {contact.phone}</a>
                        <a href={`tel:${contact.cellphone}`}>
                            <img src="../../../public/images/icons/cellphone.png" alt="mobile phone" />
                            {contact.cellphone}
                        </a>
                        
                       
                        
                        </div>
                        <div className='contact-card-bottom-right'>
                                
                       
                                
                               
                                <a href={`tel:${contact.fax}`}>
                                    <img src="../../../public/images/icons/fax.png" alt="fax" />
                                    {contact.fax}
                                </a>
                                <a href={`mailto:${contact.mail}`}>
                                    <img src="../../../public/images/icons/mail.png" alt="mail" />
                                    {contact.mail}
                        </a>
                        </div>
                       
                    </div>
                   
                </article>
            </section>
          </details>
        ))}
      </div>
    </div>
  );
};

export default Region;
