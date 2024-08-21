import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useInViewHook from '../../hooks/useInViewHook';
import './Counters.css';

const Counters = () => {
    const { ref: obrasRef, inView: obrasInView } = useInViewHook(0.5);
    const { ref: paisesRef, inView: paisesInView } = useInViewHook(0.5);
    
    const [obrasCount, setObrasCount] = useState(0);
    const [paisesCount, setPaisesCount] = useState(0);
    const [hasCountedObras, setHasCountedObras] = useState(false);
    const [hasCountedPaises, setHasCountedPaises] = useState(false);

    useEffect(() => {
        if (obrasInView && !hasCountedObras) {
            let start = 0;
            const end = 150;
            const duration = 2000; 
            const incrementTime = (duration / end) * 1;

            const counter = setInterval(() => {
                start += 1;
                setObrasCount(start);
                if (start === end) {
                    clearInterval(counter);
                    setHasCountedObras(true);
                }
            }, incrementTime);
        }
    }, [obrasInView, hasCountedObras]);

    useEffect(() => {
        if (paisesInView && !hasCountedPaises) {
            let start = 0;
            const end = 14;
            const duration = 2000;
            const incrementTime = (duration / end) * 1;

            const counter = setInterval(() => {
                start += 1;
                setPaisesCount(start);
                if (start === end) {
                    clearInterval(counter);
                    setHasCountedPaises(true);
                }
            }, incrementTime);
        }
    }, [paisesInView, hasCountedPaises]);

    return (
        <section className='hero-count'>
            <Link to="/obras" className='hero-count-item' ref={obrasRef}>
                <img className='paises-moto' src="/images/icons/silo.png" alt="motohormigonera de obras" />
                <div>
                    <h4>{obrasCount} proyectos</h4>
                    <p>cuentan con nuestros servicios</p>
                </div>
            </Link>
            <Link to="/contacto" className='hero-count-item' ref={paisesRef}>
                <img className='paises-location' src="/images/icons/mixer.png" alt="mundo de paises" />
                <div>
                    <h4>{paisesCount} países</h4>
                    <p>donde estamos presentes</p>
                </div>
            </Link>
        </section>
    );
};

export default Counters;
