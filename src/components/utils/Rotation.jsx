import React, { useState, useEffect } from 'react';

const Rotation = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="rotation">
      <button onClick={prevSlide}>&#10094;</button>
      <div className="rotation-slide">
       
         <img src={slides[currentIndex].image} alt={`slide-${currentIndex}`} />
      
        
        <div className="rotation-content">
          
          <h3>{slides[currentIndex].title}</h3>
          <p>{slides[currentIndex].text}</p>
        </div>
        
      </div>
      <button onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default Rotation;
