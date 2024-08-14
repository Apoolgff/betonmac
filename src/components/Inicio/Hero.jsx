import React from 'react'
import './Hero.css'
import '../utils/Button.css'

const Hero = () => {
    return (
        <>
            <header className="hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">hormigones, <br />automatismos y<br />equipos productivos</h1>
                    <h3 className="hero-subtitle">Una Empresa De Ingenieria Con Experiencia Y Calidad</h3>
                    <div className='button-hexagon-white hero-button'>
                        <div className='harallelogram-container harallelogram-button'>
                            <div className='harallelogram harallelogram-c animation-button-left'></div>
                            <div className='harallelogram harallelogram-a animation-button-left'></div>
                            <div className='harallelogram harallelogram-b animation-button-top'></div>
                            <div className='harallelogram harallelogram-d animation-button-top'></div>
                            <div className='harallelogram harallelogram-e animation-button-right'></div>
                            <div className='harallelogram harallelogram-f animation-button-right'></div>
                            <img className="button-hexagon-full"src="/images/icons/button-yellow-full.png" alt="" />  
                        </div>
                    </div>

                </div>
               <img className='hero-video' src="https://betonmac.com/images/Imagenes/Portadas-plantas/Portada-Interior-Mina.jpg" alt="background de prueba" />
            </header>
          
        </>
    )
}

export default Hero