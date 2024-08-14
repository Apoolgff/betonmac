import React from 'react'
import './Cardseid.css'

const Cardseid = () => {

    const cardsData = [
        {
          image: 'https://betonmac.com/images/Imagenes/Empresa/Inicios.JPG',
          title: 'Misión',
          shortText: 'Parte del texto... (hover para más)',
          fullText: 'Texto completo que se mostrará al hacer hover. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
        },
        {
          image: 'https://betonmac.com/images/Imagenes/Empresa/Belomonte-SMALL.jpg',
          title: 'Visión',
          shortText: 'Parte del texto... (hover para más)',
          fullText: 'Texto completo que se mostrará al hacer hover. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
        },
        {
          image: 'https://betonmac.com/images/Imagenes/Empresa/Plaqueta2.jpg',
          title: 'Valores',
          shortText: 'Parte del texto... (hover para más)',
          fullText: 'Texto completo que se mostrará al hacer hover. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
        },
      ];

      
    return (
        <section className="article-container">

            <article className="article card-especializacion" >
                <div className="article-content" >
                    <h3>Especializacion</h3>
                    <p className="short-text">Dirigida a la producción de hormigones y afines, desde sistemas de acopio de materiales...</p>
                    <p className="full-text">Dirigida a la producción de hormigones y afines, desde sistemas de acopio de materiales, su dosificación, mezclado, automatización de procesos.
                        PLANTAS DOSIFICADORAS Y ELABORADORAS DE HORMIGON - MOTOHORMIGONEROS -SISTEMAS DE CARGA Y ACOPIO DE ARIDOS - SILOS PARA CEMENTO
                        AUTOMATIZACIÓN DE PROCESOS</p>
                </div>
            </article>
            <article className="article  card-ingenieria">
                <div className="article-content" >
                    <h3>Ingenieria</h3>
                    <p className="short-text">Los ingenieros, técnicos y personal de Betonmac S.A tienen... </p>
                    <p className="full-text">Los ingenieros, técnicos y personal de Betonmac S.A tienen un profundo conocimiento sobre todo tipo de instalaciones y requerimientos de la especialidad, acumulado y perfeccionado por más de cincuenta años de experiencia. Esto permite realizar nuevos proyectos con gran celeridad y confiabilidad.


                        Desde 1970 en su propio departamento de electrónica e informática ha desarrollado y aplicado la tecnología más moderna en automatizaciones y control de procesos industriales.</p>
                </div>
            </article>
            <article className="article  card-diversificacion">
                <div className="article-content" >
                    <h3>Diversificacion</h3>
                    <p className="short-text">En BETONMAC S.A. se producen además equipos especiales, automatizaciones y ... </p>
                    <p className="full-text">En BETONMAC S.A. se producen además equipos especiales, automatizaciones y control de procesos industriales para:
                        Transporte neumático de materiales
                        Alimentos balanceados
                        Fertilizantes
                        Industrias de:
                        Aditivos
                        Pegamentos
                        Pilas eléctricas
                        Vidrios
                        Vinificadores</p>
                </div>
            </article>

        </section>
    )
}

export default Cardseid