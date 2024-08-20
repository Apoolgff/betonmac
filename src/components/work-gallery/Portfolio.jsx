import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

const Portfolio = () => {
    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        fetch('/src/Data/works.json')
          .then(response => response.json())
          .then(data => setPortfolio(data))
          .catch(error => console.error('Error fetching data:', error));
      }, []);

   

  return (
    <div className="portfolio-container"> 
      {portfolio.map(obra =>(
        <Link key={obra.id} to={`/obra/${obra.id}`} className='portfolio-card' style={{ backgroundImage: `url(${obra.imagenes[1]})` }}>
          <div className='portfolio-card-layer'>
            <p className='portfolio-card-country'>{obra.pais}</p>
            <p className='portfolio-card-name'>{obra.nombre}</p>
          </div>  
        </Link>
      )) }
    </div>
  );
};

export default Portfolio;
