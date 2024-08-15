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
            {cardsData.map((card, index)=>(
                <article key={index}  className="article " style={{ backgroundImage: `url(${card.image})` }}>
                    <div className="article-content" >
                        <h3>{card.title}</h3>
                        <p className="short-text">{card.shortText}</p>
                        <p className="full-text">{card.fullText}</p>
                    </div>
                </article>
            ))}
        </section>
    )
}

export default Cardseid