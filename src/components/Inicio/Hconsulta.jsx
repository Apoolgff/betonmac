import React from 'react'
import './Hconsulta.css'

const Hconsulta = () => {
    return (
     <section className='background'>
        <article className='home-contact'>
            <h3 className='home-contact-title'>repuestos y consultas</h3>
            <p className='home-contact-subtitle'>Soporte tecnico especializado a disposición del cliente, 
                para la atencion de sus planteos, consultas y necesidades
                in situ de nuestros equipos y como fuente de retroalimentacion de campo,
                contando además con un completo stock de repuestos que otorgue
                una rápida solución a sus demandas
            </p>
            <div className='button-hexagon-white'> 
                <div className='harallelogram-container harallelogram-button'>
                    <div className='harallelogram harallelogram-c animation-button-left'></div>
                    <div className='harallelogram harallelogram-a animation-button-left'></div>
                    <div className='harallelogram harallelogram-b animation-button-top'></div>
                    <div className='harallelogram harallelogram-d animation-button-top'></div>
                    <div className='harallelogram harallelogram-e animation-button-right'></div>
                    <div className='harallelogram harallelogram-f animation-button-right'></div> 
                    <img className='button-hexagon-full' src="/public/images/icons/button-white-hover.png" alt="" /> 
                </div>
            </div>
        </article> 
    </section>
    )
}

export default Hconsulta