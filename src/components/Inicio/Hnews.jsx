import React from 'react'
import './Hnews.css'

const Hnews = () => {
  return (
    <section className="novedades">
    <h2>Novedades</h2>
    <p>Descubre nuestros últimos productos y servicios.</p>
    <div className="novedades-grid">
        <div className="novedad-item">
            <img src="/images/home/motohormigonera.png" alt="Producto 1" />
            <h3>Producto 1</h3>
            <p>Breve descripción del producto 1.</p>
            <a href="#" className="btn">Más Información</a>
        </div>
        <div className="novedad-item">
            <img src="/images/home/planta-movil.png" alt="Producto 2" />
            <h3>Producto 2</h3>
            <p>Breve descripción del producto 2.</p>
            <a href="#" className="btn">Más Información</a>
        </div>
        <div className="novedad-item">
            <img src="/images/home/silos.jpg" alt="Producto 3" />
            <h3>Producto 2</h3>
            <p>Breve descripción del producto 2.</p>
            <a href="#" className="btn">Más Información</a>
        </div>
      
    </div>
</section>

  )
}

export default Hnews