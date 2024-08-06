import React, { useState, useEffect } from 'react';
import Tarjeta from './contacto/Tarjeta';
import Box from './contacto/Box';
import './Contacto.css';
import './utils/Button.css'

const Contacto = () => {
  const [contact, setContact] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    fetch('/src/Data/contact.json')
      .then(response => response.json())
      .then(data => setContact(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);


  const fabrica = [
    {title: 'Ventas repuestos', phone:' (54-351) 464 2107 Int:155' , mail:'repuestos@betonmac.com.ar'},
    {title: 'Soporte', phone:'(54-351) 464 2107' , mail:'soporte@betonmac.com.ar'},
    {title: 'Solicitud técnico en obra ', phone:'(+54 - 351) 464 2107' , mail:' solicitud.tecnico@betonmac.com.ar'},
    {title: 'Ventas equipos', phone:'(+54 - 351) 464 2107 Int 165' , mail:'ventas@betonmac.com.ar'},
   
  ];


  const ubication = [
   
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
      <article className='contact-fabric'>
      <div className="fabric-list">
        {fabrica.map((oficina, index) => (
          <div key={index} className="fabric-details" >
           
            <h4 >{oficina.title}</h4>
             <a href="">{oficina.phone}</a>
             <a href="">{oficina.mail}</a>
          </div>
        ))}
      </div>
    
      
      <Box />
      </article>
      {/*Titulo*/}
      <article className='contact-region'>
                        <div className='harallelogram-container harallelogram-checkbox'>
                            <div className='harallelogram harallelogram-c '></div>
                            <div className='harallelogram harallelogram-a '></div>
                            <div className='harallelogram harallelogram-b '></div>
                            <div className='harallelogram harallelogram-d '></div>
                            <div className='harallelogram harallelogram-e '></div>
                            <div className='harallelogram harallelogram-f '></div>
                          
                            
                            <h2 className="contact-main-title">local</h2>
                            
                        </div>
                        <div className='harallelogram-container harallelogram-checkbox '>
                            <div className='harallelogram harallelogram-c '></div>
                            <div className='harallelogram harallelogram-a '></div>
                            <div className='harallelogram harallelogram-b '></div>
                            <div className='harallelogram harallelogram-d '></div>
                            <div className='harallelogram harallelogram-e'></div>
                            <div className='harallelogram harallelogram-f'></div>
                            
                            <h2 className="contact-main-title">sudamérica</h2>
                            
                        </div>
      </article>
      {/*Grilla de Contactos*/}
      <div className="contact-list">
        {ubication.map((ubi, index) => (
          <details key={index} className="contact-details" >
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
                            <img className="button-hexagon-full"src="/public/images/icons/button-blue-top-full.png" alt="" />  
                        </div>
                    </div>
                    </div>
              </summary>
              <div>
              <article>

              </article>
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
