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
    'Fabrica',
    'Argentina',
    'Brasil',
    'Ecuador',
    'Peru',
    'Uruguay',
    'Paraguay',
    'Chile',
    'Bolivia'
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
      <div className="contact-grid">
        {ubication.map((ubi, index) => (
          <div key={index} className="contact-card">
            <h3>{ubi}</h3>
            <div className="contact-details">
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
          </div>
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
