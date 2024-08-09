import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useInViewHook from '../../hooks/useInViewHook';
import './Counters.css';

const Counters = () => {
    const { ref: obrasRef, inView: obrasInView } = useInViewHook(0.5);
    const { ref: paisesRef, inView: paisesInView } = useInViewHook(0.5);
    
    const [obrasCount, setObrasCount] = useState(0);
    const [paisesCount, setPaisesCount] = useState(0);

    useEffect(() => {
        if (obrasInView) {
            let start = 0;
            const end = 150;
            const duration = 2000; 
            const incrementTime = (duration / end) * 1;

            const counter = setInterval(() => {
                start += 1;
                setObrasCount(start);
                if (start === end) clearInterval(counter);
            }, incrementTime);
        }
    }, [obrasInView]);

    useEffect(() => {
        if (paisesInView) {
            let start = 0;
            const end = 14;
            const duration = 2000;
            const incrementTime = (duration / end) * 1;

            const counter = setInterval(() => {
                start += 1;
                setPaisesCount(start);
                if (start === end) clearInterval(counter);
            }, incrementTime);
        }
    }, [paisesInView]);

    return (
        <>
            <section className='hero-count'>
                <Link to="/obras" className='hero-count-item' ref={obrasRef}>
                    <img className='paises-moto' src="../../../public/images/icons/obra.png" alt="motohormigonera de obras" />
                   <div>
                        <h4>{obrasCount} proyectos</h4>
                        <p>cuentan con nuestros servicios</p>
                    </div>
                </Link>
                <Link to="/contacto" className='hero-count-item' ref={paisesRef}>
                    <img className='paises-location' src="../../../public/images/icons/paises.png" alt="mundo de paises" />
                    <div>
                        <h4>{paisesCount} Países</h4>
                        <p>donde estamos presentes</p>
                    </div>
                </Link>
            </section>
        </>
    );
};

export default Counters;
