import React from "react";
import './Fabric.css';


const Fabric = () => {

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
return (
  <section className="section-fabric" >
    <article className="contact-fabric">
        <h2>Nuestras Oficinas</h2>
       
    <div className="fabric-list">
        {fabrica.map((oficina, index) => (
          <div key={index} className="fabric-card" >
           <img src={oficina.image} alt={`icono de ${oficina.title}`} />
           <div className="fabric-details" >
            <h4 >{oficina.title}</h4>
             <a href="">{oficina.phone}</a>
             <a href="">{oficina.mail}</a>
             </div>
          </div>
        ))}
      </div>
      </article>
  </section>
);
};
export default Fabric;