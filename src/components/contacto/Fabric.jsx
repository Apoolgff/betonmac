import React , { useEffect, useState }  from 'react';
import useInViewHook from '../../hooks/useInViewHook';
import './Fabric.css';


const Fabric = () => {
  const [fabricInViewOnce, setFabricInViewOnce] = useState(false);
  const {ref:fabricRef, inView: fabricInView} = useInViewHook(1);

  useEffect(() => {
    
    if (fabricInView && !fabricInViewOnce) {
        setFabricInViewOnce(true);
    }
}, [fabricInView, fabricInViewOnce]);

    const fabrica = [
        {title: 'Ventas equipos', 
          phone:'(+54 - 351) 464 2107 Int 165' , 
          mail:'ventas@betonmac.com.ar',
          image:'/images/icons/sell.png',
          class:'in-view-venta'
        },
        {title: 'Ventas repuestos', 
          phone:' (54-351) 464 2107 Int:155' , 
          mail:'repuestos@betonmac.com.ar',
          image:'/images/icons/replacement.png',
          class:'in-view-repuesto'
        },
        {title: 'Soporte', 
          phone:'(54-351) 464 2107' , 
          mail:'soporte@betonmac.com.ar',
          image:'/images/icons/support.png',
          class:'in-view-soporte'
        },
        {title: 'Solicitud técnico en obra ', 
          phone:'(+54 - 351) 464 2107' , 
          mail:' solicitud.tecnico@betonmac.com.ar',
          image:'/images/icons/tecnico.png',
          class:'in-view-tecnico'
        },
        
          
      ];
return (
  <section className="section-fabric" >
    <article className="contact-fabric">
        <h2>Nuestras Oficinas</h2>
       
    <div className="fabric-list">
        {fabrica.map((oficina, index) => (
          <div key={index} ref={fabricRef} className= {`fabric-card ${fabricInViewOnce ? `${oficina.class}` : ''} `}  >
           <img className='fabric-image' src={oficina.image} alt={`icono de ${oficina.title}`} />
           <div ref={fabricRef} className= 'fabric-details' >
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