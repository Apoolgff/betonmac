import React from 'react'
import './Certificaciones.css'

const Certificaciones = () => {
    const moreCardsData = [
        {
          image: 'https://betonmac.com/images/Imagenes/Logo/Certificado-HARDOX.jpg',
          title: 'Hardox',
          text: 'Texto descriptivo de Hardox.',
        },
        {
          image: 'https://betonmac.com/images/Imagenes/Empresa/E-RD-01.gif',
          title: 'Politicas de calidad',
          text: 'Texto descriptivo de las politicas de calidad.',
        },
        {
          image: 'https://betonmac.com/images/Imagenes/Empresa/CertificadoISO9001-2021.jpg',
          title: 'ISO 9001: 2015',
          text: 'Texto descriptivo de iso 9001.',
        },
      ];
      
  return (
    <section className='certification-section'>
      <h2 className = 'certification-title'>Control de calidad, stock permanente y servicio técnico especializado</h2>
      <p>Un riguroso control de calidad de cada componente y del producto final, un completo stock de repuestos y un especializado servicio técnico y de asesoramiento, ha garantizado desde su orígen todos los equipos BETONMAC.
      BETONMAC S.A ha certificado Su sistema de Gestion de Calidad de todos sus procesos bajo normas ISO 9001:2015</p>
    <div className="cards-container-certification">
    {moreCardsData.map((card, index) => (
      <div key={index} className="card-certification">
        <div className="card-content-us" style={{ backgroundImage: `url(${card.image})` }}>
          <h3 >{card.title}</h3>
          <p>{card.text}</p>
        </div>
      </div>
    ))}
  </div>
  </section>
  )
}

export default Certificaciones