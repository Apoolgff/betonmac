import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Latam.css';


const Latam = () => {

    const countries = [
        'map-argentina',
        'map-brasil',
        'map-chile',
        'map-peru',
        'map-uruguay',
        'map-paraguay',
        'map-bolivia',
        'map-colombia',
        'map-ecuador',
        'map-venezuela'
      ];

  return (
    <>
    
     <div className="work-map">
     {countries.map((country, index) => (
          <div key={index} className={country}>
            <div className='harallelogram-container'>
                    <div className='harallelogram harallelogram-c harallelogram-service'></div>
                    <div className='harallelogram harallelogram-a harallelogram-service'></div>
                    <div className='harallelogram harallelogram-b harallelogram-service'></div>
                    <div className='harallelogram harallelogram-d harallelogram-service'></div>
                    <div className='harallelogram harallelogram-e harallelogram-service'></div>
                    <div className='harallelogram harallelogram-f harallelogram-service'></div>
            </div>
          </div>
        ))}
     </div>
    </>
  );
};

export default Latam;
