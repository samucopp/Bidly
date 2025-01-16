import React, { useState, useEffect, useRef } from 'react';
import './FrontPageCarrusel.css';


const FrontPageCarrusel = ({ images, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  // Cambiar automáticamente de imagen cada 'interval' milisegundos
  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextImage();
    }, interval);
    return () => clearInterval(autoSlide);
  }, [currentIndex]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const updateCarouselPosition = () => {
    const carousel = carouselRef.current;
    if (carousel) {
      const imageWidth = carousel.offsetWidth;
      carousel.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    }
  };

  useEffect(() => {
    updateCarouselPosition();
  }, [currentIndex]);

  return (
    <div className="carousel">
      <div className="carousel-images" ref={carouselRef}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index + 1}`} />
        ))}
      </div>
      <div className="carousel-controls">
        <button className="prev-img" onClick={prevImage}>
          &lt;
        </button>
        <button className="next-img" onClick={nextImage}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default FrontPageCarrusel;
