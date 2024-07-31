import React from 'react'
import { Link } from 'react-router-dom';


import './Counters.css'

const Counters = () => {
    return (
        <>
            <section className='hero-count'>
                <Link to="/obras" className='hero-count-item'>
                     <p>150 Obras</p>
                </Link>
                <Link to="/contacto" className='hero-count-item'>
                <p>8 Paises</p>
                </Link>

            </section>
        </>
    )
}

export default Counters