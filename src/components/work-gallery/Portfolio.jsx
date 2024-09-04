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

    // Agrupar las obras por país
    const groupedByCountry = portfolio.reduce((acc, obra) => {
        if (!acc[obra.pais]) {
            acc[obra.pais] = [];
        }
        acc[obra.pais].push(obra);
        return acc;
    }, {});

    return (
        <div className="portfolio-container">
            {Object.entries(groupedByCountry).map(([country, obras]) => (
                <div id={country} key={country} className="country-section">
                    <h2>{country}</h2>
                    <div className="grid-container">
                        {obras.map(obra => (
                            <Link
                                key={obra.id}
                                to={`/obra/${obra.id}`}
                                className={`grid-item importance-${obra.importancia}`}
                                style={{ backgroundImage: `url(${obra.imagenes[1]})` }}
                            >
                                <figure className='portfolio-card-figure'>
                                    <figcaption className='portfolio-card-name'>{obra.nombre}</figcaption>
                                </figure>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Portfolio;
