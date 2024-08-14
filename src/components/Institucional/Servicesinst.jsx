import React from 'react'
import './Servicesinst.css'

const Servicesinst = () => {

    const servicesData = [
        { icon: '/images/icons/tecnico.png', title: 'Control de calidad' },
        { icon: '/images/icons/tecnico.png', title: 'Stock permanente' },
        { icon: '/images/icons/tecnico.png', title: 'Servicio tecnico especializado' },
      ];
      
  return (
      <section className='services'>
        {servicesData.map((service, index) => (
                  <article key={index} className="institucional-service" >
                    <img src={service.icon} alt={`icono de ${service.title}`} />
                    <h4>{service.title}</h4>
                  </article>
        ))}
      </section>
      )
}

export default Servicesinst