import React , { useEffect, useState }  from 'react';
import useInViewHook from '../../hooks/useInViewHook';
import { Link } from 'react-router-dom';
import './Hconsulta.css'

const Hconsulta = () => {
    const [bannerInViewOnce, setBannerInViewOnce] = useState(false);
    const {ref:bannerRef, inView: bannerInView} = useInViewHook(1);


  useEffect(() => {
    
    if (bannerInView && !bannerInViewOnce) {
        setBannerInViewOnce(true);
    }
}, [bannerInView, bannerInViewOnce]);


    return (
     <section className='background'>
        <article className='home-contact'>
            <h3  ref={bannerRef} className= {`home-contact-title ${bannerInViewOnce ? 'in-view-banner' : ''} `}>repuestos y consultas</h3>
            <p className='home-contact-subtitle'>Soporte tecnico especializado a disposición del cliente, 
                para la atencion de sus planteos, consultas y necesidades
                in situ de nuestros equipos y como fuente de retroalimentacion de campo,
                contando además con un completo stock de repuestos que otorgue
                una rápida solución a sus demandas
            </p>
            <Link className='hconsulta-button' to= '/contacto'>
                <div className='button-hexagon-white'> 
                    <div className='harallelogram-container harallelogram-button'>
                        <div className='harallelogram harallelogram-c animation-button-left'></div>
                        <div className='harallelogram harallelogram-a animation-button-left'></div>
                        <div className='harallelogram harallelogram-b animation-button-top'></div>
                        <div className='harallelogram harallelogram-d animation-button-top'></div>
                        <div className='harallelogram harallelogram-e animation-button-right'></div>
                        <div className='harallelogram harallelogram-f animation-button-right'></div> 
                        <img className='button-hexagon-full' src="/images/icons/button-white-hover.png" alt="" /> 
                    </div>
                </div>
            </Link>
        </article> 
    </section>
    )
}

export default Hconsulta