import React from 'react'
import './Hconsulta.css'

const Hconsulta = () => {
    return (
        <section className='home-contact'>
            
            <h3 className='home-contact-title'>repuestos y consultas</h3>
            <p className='home-contact-subtitle'>Soporte tecnico especializado a disposición del cliente, 
                para la atencion de sus planteos, consultas y necesidades
                in situ de nuestros equipos y como fuente de retroalimentacion de campo,
                contando además con un completo stock de repuestos que otorgue
                una rápida solución a sus demandas
            </p>
            <div>
                <div className='button-hexagon-consulta'> 
                    <div className='carallelogram-container carallelogram-button'>
                        <div className='carallelogram carallelogram-c'></div>
                        <div className='carallelogram carallelogram-a'></div>
                        <div className='carallelogram carallelogram-b'></div>
                        <div className='carallelogram carallelogram-d'></div>
                        <div className='carallelogram carallelogram-e'></div>
                        <div className='carallelogram carallelogram-f'></div> 
                        <img className='button-hexagon-full' src="/public/images/icons/button-white-hover.png" alt="" /> 
                    </div>
                </div>
            </div>
          
        </section>
    )
}

export default Hconsulta