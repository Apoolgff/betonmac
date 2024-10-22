import React from 'react';
import { useParams } from 'react-router-dom';
import worksData from '../../Data/works.json';
import './Obra.css';

const Obra = () => {
  const { id } = useParams();
  const obra = worksData.find(work => work.id.toString() === id);

  if (!obra) {
    return <div>Obra no encontrada.</div>;
  }

  return (
    <div className="obra-container">
      {/*Hero con imagenes*/}
      <div className="work-hero-carousel">
        {obra.imagenes.map((image, index) => (
          <div className="work-carousel-image" key={index} style={{ backgroundImage: `url(${image})` }}>
            <div className="work-carousel-text">
              <h1>{obra.nombre}</h1>
              <h3>{obra.lugar}, {obra.pais}</h3>
            </div>
          </div>
        ))}
      </div>

      {/*Descripcion*/}
      
      <div className="product-image-first" style={{ backgroundImage: `url(${obra.imagenes[0]})` }}>
        
        <div className="product-text-first">
        <p>{obra.descripcion}</p>
        </div>
      </div>
       
      {/*Materiales utilizados*/}
      <section className="work-services-section">
        <div className="work-services-layer">
        <h2>Productos utilizados</h2>
        <div className="work-services-container">
          {obra.materiales.map((material, index) => (
            <div key={index} className="work-service">
              {/*FALTA ICONO QUE DESPUES LO AGREGO AL JSON*/}
              <p>{material}</p>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/*Separador Imagen*/}
     

      {/*Descripcion de la obra/planta*/}
      <div className="product-image-second" style={{ backgroundImage: `url(${obra.imagenes[1]})` }}>
        <div className="product-text-second">
        
        <p>{obra.detalles}</p>
        </div>
      </div>
    </div>
  );
};

export default Obra;
