import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Obras.css';
import Map from "./Mapa"

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
    <div className="obras-container">
      {/*Hero*/}
      <div className="hero-work-image">
        {/*<h1>Mapa de latinoamerica</h1>*/}
        <Map />
      </div>

      {/*Titulo*/}
      <h2 className="main-title">Obras Realizadas</h2>

      {/*Grilla de Obras*/}
      <div className="works-grid">
        {countries.map((country, index) => (
          <div key={index} className="country-card">
            <h3>{country}</h3>
            {groupedWorks[country] ? (
              groupedWorks[country].map(obra => (
                <Link key={obra.id} to={`/obra/${obra.id}`} className="work-link">
                  {obra.nombre}
                </Link>
              ))
            ) : (
              <p>No hay obras en este país.</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Obras;
