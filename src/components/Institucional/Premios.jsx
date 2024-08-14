import React , { useEffect, useState }  from 'react';
import useInViewHook from '../../hooks/useInViewHook';
import './Premios.css'

const Premios = () => {
    const [hoveredText, setHoveredText] = useState('');
    const [hoveredClass, setHoveredClass] = useState('');
    const [awardsInViewOnce, setAwardsInViewOnce] = useState(false);
    const {ref:awardsRef, inView: awardsInView} = useInViewHook(1);

    useEffect(() => {
    
        if (awardsInView && !awardsInViewOnce) {
            setAwardsInViewOnce(true);
        }
    }, [awardsInView, awardsInViewOnce]);
    

    const moreServicesData = [
        {
            text: 'Premio al mayor volumen exportado', 
            description: 'otorgado por el Gobierno de la Provincia de Córdoba y la Cámara de Comercio Exterior de Córdoba.' ,
            class: 'in-view-volumen',
        },
        {
            text: 'Distincion a la trayectoria exportadora', 
            description: 'Otorgado por el Gobierno de la Provincia de Córdoba',
            class: 'in-view-trayectoria', 
        },
        { 
            text: 'Premio al grado de internalizacion', 
            description: 'otorgado por la Cámara de Comercio Exterior de Córdoba y la Agencia Pro Córdoba.', 
            class: 'in-view-internalizacion',
        },
        { 
            text: 'Miembro fundador de la AAHE', 
            description: '(Asociación Argentina del Hormigón Elaborado) y acompaña desde sus orígenes el desarrollo de la actividad.', 
            class: 'in-view-fundador',
        },
            
        ];

    return (
        <section className='awards'>
            <div className='awards-layer'>
                <h2 className='awards-title'>premios y distinciones</h2>
                <div className='awards-prize'>
                    {moreServicesData.map((award, index) => (
                        <div 
                            key={index} 
                            className='award-container'
                            onMouseEnter={() =>{ setHoveredText(award.description)
                                setHoveredClass('enter-right');
                            }}
                            onMouseLeave={ () => {
                                setHoveredText(award.description);
                                setHoveredClass('exit-left');
                            }}
                        >
                            <div ref={awardsRef} className= {`award-image ${awardsInViewOnce ? `${award.class}` : ''} `}>
                                <div className='harallelogram-container'>
                                    <div className='harallelogram harallelogram-c harallelogram-service'></div>
                                    <div className='harallelogram harallelogram-a harallelogram-service'></div>
                                    <div className='harallelogram harallelogram-b harallelogram-service'></div>
                                    <div className='harallelogram harallelogram-d harallelogram-service'></div>
                                    <div className='harallelogram harallelogram-e harallelogram-service'></div>
                                    <div className='harallelogram harallelogram-f harallelogram-service'></div>
                                </div>
                            </div>
                            <h4>{award.text}</h4>
                        </div>
                    ))}
                </div>
                <div className={`award-text ${hoveredClass}`}>
                    <p>{hoveredText}</p>
                </div>
            </div>
        </section>
    )
}

export default Premios
