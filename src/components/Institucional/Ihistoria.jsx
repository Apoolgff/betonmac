import React , { useEffect, useState }  from 'react';
import useInViewHook from '../../hooks/useInViewHook';
import './Ihistoria.css'

const Ihistoria = () => {

  const [historyInViewOnce, setHistoryInViewOnce] = useState(false);
  const {ref:historyRef, inView: historyInView} = useInViewHook(1);

  useEffect(() => {
  
      if (historyInView && !historyInViewOnce) {
          setHistoryInViewOnce(true);
      }
  }, [historyInView, historyInViewOnce]);
  

  return (
    <div className="history">
    <h2 ref={historyRef} className= {` history-title ${historyInViewOnce ? 'in-view-history' : ''} `}> Historia</h2>
    <p>En 1960, Luciano Bulgarelli, su fundador, a partir de su formación técnica y su experiencia directa en obras públicas y privadas, especialmente en hormigón, vió la necesidad de buscar algo simple y económico, que aumentara sensiblemente la productividad y asegurara la calidad del hormigón. Fué así que surgieron los primeros equipos BETONMAC.

      A 10 años de su iniciación, en 1970, BETONMAC S.A. traslada sus instalaciones a la ubicación actual, sobre un terreno de aproximadamente 35.000 m2, donde dispone de 7.500 m2 de superficie cubierta, totalmente servidos por 14 puentes grúa de diferentes capacidades y equipamiento de última generación.

      Desde entonces BETONMAC cuenta con su propio departamento de desarrollo de electrónica e informática habiendo desarrollado y aplicado con diseño propio la tecnología más moderna en automatizaciones y control de procesos industriales.
      l sector y ha logrado consolidar desde 1977 una prestigiosa trayectoria exportadora.</p>
  </div>
  )
}

export default Ihistoria