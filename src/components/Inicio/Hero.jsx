import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <>
            <header className="hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">BETONMAC</h1>
                    <p className="hero-subtitle">Sub titulo de la empresa</p>
                    <button className="hero-button">&#x2B22;</button>
                </div>
            </header>
            <section className='hero-count'>
                <div className='hero-count-item'>
                    <img src='/images/icons/architect_2942441.png' />
                    <p>150</p>
                    <p>Obras</p>
                </div>
                <div className='hero-count-item'>
                    <img src='/images/icons/coronavirus_2947660.png' />
                    <p>7</p>
                    <p>Paises</p>
                </div>

            </section>
        </>
    )
}

export default Hero