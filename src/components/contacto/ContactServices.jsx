import React from "react";
import './ContactServices.css';


const ContactServices = () => {

    const via = [
        {title: 'Ubicacion', 
          text:'Av. Circunvalación y Camino San Carlos Km 4,5.5000 Córdoba - Argentina -' , 
          image:'/public/images/icons/location-large.png'
        },
        {title: 'Telefono', 
          text:'+54 351 569-3100' , 
          image:'/public/images/icons/phone-large.png'
        },
        {title: 'Whatsapp', 
          text:' +54 9 351 520-4466' , 
          image:'/public/images/icons/whatsapp-large.png'
        },
        {title: 'Mail', 
          text:'betonmac@betonmac.com.ar' , 
          image:'/public/images/icons/mail-large.png'
        },
        
          
      ];
return (
    <div className="contact-service-list">
        {via.map((medio, index) => (
          <div key={index} className="contact-service-card" >
           <img src={medio.image} alt={`icono de ${medio.title}`} />
            <h4 >{medio.title}</h4>
            <a href="">{medio.text}</a>
          </div>
        ))}
      </div>

);
};
export default ContactServices;