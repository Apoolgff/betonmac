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
        <Link key={obra.id} to={`/obra/${obra.id}`} className='portfolio-card' >
          <figure className='portfolio-card-figure'>
            <img className='portfolio-card-image' src={obra.imagenes[1]} alt={obra.nombre} />
            
            <figcaption className='portfolio-card-name'>{obra.nombre}</figcaption>
          </figure>  
        </Link>
      )) }
    </div>
  );
};

export default Portfolio;
