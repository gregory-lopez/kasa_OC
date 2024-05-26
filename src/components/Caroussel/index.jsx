import React, { useState } from 'react';
import prevIcon from '../../assets/prev-icon.png';
import nextIcon from '../../assets/next-icon.png';
import '../../styles/caroussel.css';

function Carousel({ images, title }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const handleNext = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
  
    const handlePrev = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const imageCounter = `${currentImageIndex + 1} / ${images.length}`;
  
    return (
      <div className="carousel">
        <img
          src={images[currentImageIndex]}
          alt={`Vue ${currentImageIndex + 1} sur ${images.length} - ${title}`}
        />
        {images.length > 1 && <p className="image-counter">{imageCounter}</p>}
        {images.length > 1 && (
          <div className="carousel-button-container">
            <button className="carousel-button" onClick={handlePrev}>
              <img src={prevIcon} alt="Previous" />
            </button>
            <button className="carousel-button" onClick={handleNext}>
              <img src={nextIcon} alt="Next" />
            </button>
          </div>
        )}
      </div>
    );
  }
  
export default Carousel;
