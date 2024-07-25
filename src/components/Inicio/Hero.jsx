import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <>
            <header className="hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">hormigones, <br />automatismos y<br />equipos productivos</h1>
                    <p className="hero-subtitle">Una Empresa De Ingenieria Con Experiencia Y Calidad</p>
                    <div className='button-hexagon'><div className='button-content'></div></div>

                </div>
               <img className='hero-video' src="/videos/concrete-gif-video.gif" alt="background de prueba" />
            </header>
          
        </>
    )
}

export default Hero