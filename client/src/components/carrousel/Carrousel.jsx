import { useState } from "react";
import PropTypes from "prop-types";
import "./carrousel.css";

const ImageCarousel = ({ images, initialIndex = 0, defaultImage }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(initialIndex);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  const currentImage =
    images.length > 0 ? images[currentImageIndex] : defaultImage;

  return (
    <div className="image-carousel">
      <button onClick={handlePrevious} className="carousel-button">
        &#10094;
      </button>
      <img
        src={currentImage}
        alt={`Imagen ${currentImageIndex + 1}`}
        className={`carousel-image ${images.length === 0 ? "default-image" : ""}`}
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
  defaultImage: PropTypes.string,
};

ImageCarousel.defaultProps = {
  defaultImage: "logo_bidly.png",
};

export default ImageCarousel;