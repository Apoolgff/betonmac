import React from "react";
import './ContactServices.css';


const ContactServices = () => {

    const via = [
        {title: 'ubicacion', 
          text:'Av. Circunvalación y Camino San Carlos Km 4,5.5000 Córdoba - Argentina -' , 
          image:'/images/icons/location-large.png'
        },
        {title: 'telefono', 
          text:'+54 351 569-3100' , 
          image:'/images/icons/phone-large.png'
        },
        {title: 'whatsapp', 
          text:' +54 9 351 520-4466' , 
          image:'/images/icons/whatsapp-large.png'
        },
        {title: 'mail', 
          text:'betonmac@betonmac.com.ar' , 
          image:'/images/icons/mail-large.png'
        },
        
          
      ];
return (
    <div className="contact-service-list">
        {via.map((medio, index) => (
          <div key={index} className="contact-service-card" >
           <img src={medio.image} alt={`icono de ${medio.title}`} />
            <h4>{medio.title}</h4>
            <a href="">{medio.text}</a>
          </div>
        ))}
      </div>

);
};
export default ContactServices;