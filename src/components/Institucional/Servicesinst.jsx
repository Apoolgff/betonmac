import React from 'react'
import './Servicesinst.css'

const Servicesinst = () => {

    const servicesData = [
        { icon: '/images/icons/calidad.png', text: 'Control de calidad' },
        { icon: '/images/icons/stock.png', text: 'Stock permanente' },
        { icon: '/images/icons/tecnico.png', text: 'Serviciotecnico especializado' },
      ];
      
  return (
    <section className='services'>
    <div >
      <img src='/images/icons/tecnico.png' alt="calidad" />
      <h4>
        control de calidad
      </h4>
    </div>
    <div>
      <img src='/images/icons/tecnico.png' alt="stock" />
      <h4>
        stock permanente
      </h4>
    </div>
    <div>
      <img src='/images/icons/tecnico.png' alt="tecnico" />
      <h4>
        servicio tecnico especializado
      </h4>
    </div>
  </section>
  )
}

export default Servicesinst