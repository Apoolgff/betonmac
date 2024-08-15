import React from 'react'
import './Servicesinst.css'

const Servicesinst = () => {

    const servicesData = [
        { icon: '/images/icons/tecnico.png', 
          title: 'ESPECIALIZACION', 
          text: 'Dirigida a la producción de hormigones y afines' 
        },
        { icon: '/images/icons/tecnico.png',
           title: 'INGENIERIA',
           text: 'Tecnología más moderna en automatizaciones y control de procesos industriales'  
          },
        { icon: '/images/icons/tecnico.png',
           title: 'DIVERSIFICACION',
           text: 'Transporte neumático de materiales, Alimentos balanceados, Fertilizantes'  
          },
      ];
      
  return (
      <section className='services'>
        {servicesData.map((service, index) => (
                  <article key={index} className="institucional-service" >
                    <img src={service.icon} alt={`icono de ${service.title}`} />
                    <h4>{service.title}</h4>
                    <p>{service.text}</p>
                  </article>
        ))}
      </section>
      )
}

export default Servicesinst