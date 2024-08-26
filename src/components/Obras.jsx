import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Obras.css';
import Portfolio from './work-gallery/Portfolio';
import Mapa from './Mapa'
import Counters from './Inicio/Counters';

const Obras = () => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    fetch('/src/Data/works.json')
      .then(response => response.json())
      .then(data => setWorks(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const countries = [
    'Argentina',
    'Brasil',
    'Chile',
    'Peru',
    'Uruguay',
    'Paraguay',
    'Bolivia',
    'Colombia',
    'Ecuador',
    'Venezuela'
  ];

  const groupedWorks = works.reduce((acc, work) => {
    if (!acc[work.pais]) {
      acc[work.pais] = [];
    }
    acc[work.pais].push(work);
    return acc;
  }, {});

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
