import React, { useState, useEffect } from 'react';
import Tarjeta from './contacto/Tarjeta';
import Box from './contacto/Box';
import './Contacto.css';

const Contacto = () => {
  const [contact, setContact] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    fetch('/src/Data/contact.json')
      .then(response => response.json())
      .then(data => setContact(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const ubication = [
    {title: 'argentina', image:'/public/images/paises/argentina.jpg'},
    {title: 'uruguay', image:'/public/images/paises/uruguay.jpg'},
    {title: 'brasil', image:'/public/images/paises/brasil.jpg'},
    {title: 'ecuador', image:'/public/images/paises/ecuador.jpg'},
    {title: 'chile', image:'/public/images/paises/chile.jpg'},
    {title: 'bolivia', image:'/public/images/paises/bolivia.jpg'},
    {title: 'peru', image:'/public/images/paises/peru.jpg'},
    
    
    
    
  ];

  const groupedContact = contact.reduce((acc, cont) => {
    if (!acc[cont.pais]) {
      acc[cont.pais] = [];
    }
    acc[cont.pais].push(cont);
    return acc;
  }, {});

  return (
    <section className='contact-container'>
      <h1 className='contact-title'>Box de consultas</h1>
      <Box />
      {/*Titulo*/}
      <h2 className="contact-main-title">Contactos</h2>

      {/*Grilla de Contactos*/}
      <div className="contact-list">
        {ubication.map((ubi, index) => (
          <details key={index} className="contact-details" >
            <summary className='contact-summary'>
              <h3 className='summary-title'>{ubi.title}</h3>
              <div className='summary-button'>
              <div className='button-hexagon-white'>
                        <div className='harallelogram-container harallelogram-button'>
                            <div className='harallelogram harallelogram-c animation-button-left'></div>
                            <div className='harallelogram harallelogram-a animation-button-left'></div>
                            <div className='harallelogram harallelogram-b animation-button-top'></div>
                            <div className='harallelogram harallelogram-d animation-button-top'></div>
                            <div className='harallelogram harallelogram-e animation-button-right'></div>
                            <div className='harallelogram harallelogram-f animation-button-right'></div>
                            <img className="button-hexagon-full"src="/public/images/icons/button-white-hover.png" alt="" />  
                        </div>
                    </div>
                    </div>
              <div className="contact-individual">
              {groupedContact[ubi] ? (
                groupedContact[ubi].map(contact => (
                  <button 
                    key={contact.id} 
                    className="contact-link"
                    onClick={() => setSelectedContact(contact)}
                  >
                    {contact.contacto}
                  </button>
                ))
              ) : (
                <p>No hay contactos en este país.</p>
              )}
            </div>
            </summary>
          </details>
        ))}
      </div>

      {selectedContact && (
        <div className="modal" onClick={() => setSelectedContact(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={() => setSelectedContact(null)}>&times;</span>
            <Tarjeta contacto={selectedContact} />
          </div>
        </div>
      )}
    </section>
  );
}

export default Contacto;
