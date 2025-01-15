// ImageCarousel.js
import React, { useState } from "react";
import PropTypes from "prop-types";
import "./carrousel.css"; // Puedes agregar estilos específicos para el carrusel aquí

const ImageCarousel = ({ images, initialIndex = 0 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(initialIndex);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="image-carousel">
      <button onClick={handlePrevious} className="carousel-button">
        &#10094;
      </button>
      <img
        src={images[currentImageIndex]}
        alt={`Imagen ${currentImageIndex + 1}`}
        className="carousel-image"
      />
      <button onClick={handleNext} className="carousel-button">
        &#10095;
      </button>
    </div>
  );
};

ImageCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  initialIndex: PropTypes.number,
};

export default ImageCarousel;
