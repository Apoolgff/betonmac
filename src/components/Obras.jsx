import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Obras.css';
import Portfolio from './work-gallery/Portfolio';
import Mapa from './Mapa'
import Counters from './Inicio/Counters';

const Obras = () => {
 

  return (
    <>
      {/*Hero*/}
      <header className="hero-work-image">
        <div className="hero-work-layer">
          <div className="hero-work-text">
            <h1>obras</h1>
            <h3>proyectos en latinoamerica</h3>

          </div>
        </div>
        <Mapa />
      </header>
      <div>
        <Counters />
        <Portfolio />
      </div>

    </>
  );
};

export default Obras;
