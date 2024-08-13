import React, { useState, useEffect } from 'react';
import Tarjeta from './contacto/Tarjeta';
import Box from './contacto/Box';
import Region from './contacto/Region'
import ContactHeader from './contacto/ContactHeader';
import Fabric from './contacto/Fabric';
import ContactServices from './contacto/ContactServices';
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
    {title: 'Ventas equipos', 
      phone:'(+54 - 351) 464 2107 Int 165' , 
      mail:'ventas@betonmac.com.ar',
      image:'/images/icons/sell.png'
    },
    {title: 'Ventas repuestos', 
      phone:' (54-351) 464 2107 Int:155' , 
      mail:'repuestos@betonmac.com.ar',
      image:'/images/icons/replacement.png'
    },
    {title: 'Soporte', 
      phone:'(54-351) 464 2107' , 
      mail:'soporte@betonmac.com.ar',
      image:'/images/icons/support.png'
    },
    {title: 'Solicitud técnico en obra ', 
      phone:'(+54 - 351) 464 2107' , 
      mail:' solicitud.tecnico@betonmac.com.ar',
      image:'/images/icons/tecnico.png'
    },
    
      
  ];


  const ubication = [
   
    {title: 'uruguay', image:'/images/paises/uruguay.jpg'},
    {title: 'brasil', image:'/images/paises/brasil.jpg'},
    {title: 'ecuador', image:'/images/paises/ecuador.jpg'},
    {title: 'chile', image:'/images/paises/chile.jpg'},
    {title: 'bolivia', image:'/images/paises/bolivia.jpg'},
    {title: 'peru', image:'/images/paises/peru.jpg'},
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
       <ContactHeader />
       <div className='contact-container-form'>
       <Box />  
       </div>  
        <Fabric />
      {/*Titulo*/}
      <Region />
      
      {/*Grilla de Contactos*/}
      <div className="contact-list">
        {ubication.map((ubi, index) => (
          <div key={index} className="contact-details" >

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
                <p>{/*mensaje para mostrar si no hay contacto si se quiere*/}</p>
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
