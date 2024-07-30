import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <>
            <header className="hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">hormigones, <br />automatismos y<br />equipos productivos</h1>
                    <p className="hero-subtitle">Una Empresa De Ingenieria Con Experiencia Y Calidad</p>
                    <div className='button-hexagon-white'>
                    <div className='harallelogram-container harallelogram-button'>
                    <div className='harallelogram harallelogram-c'></div>
                    <div className='harallelogram harallelogram-a'></div>
                    <div className='harallelogram harallelogram-b'></div>
                    <div className='harallelogram harallelogram-d'></div>
                    <div className='harallelogram harallelogram-e'></div>
                    <div className='harallelogram harallelogram-f'></div>
                    <img className="button-hexagon-full"src="/public/images/icons/button-white-hover.png" alt="" />  
                    </div>
                    </div>

                </div>
               <img className='hero-video' src="https://betonmac.com/images/Imagenes/Portadas-plantas/Portada-Interior-Mina.jpg" alt="background de prueba" />
            </header>
          
        </>
    )
}

export default Hero