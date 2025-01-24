import React, { useState, useEffect } from 'react';
import ImageWithFallback from '../../components/fallback-image/ImageWithFallback';
import './AuctionCarrusel.css';

const AuctionCarrusel = ({auctions}) => {
 

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  // Añadir un efecto para actualizar itemsPerView según el ancho de la pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setItemsPerView(1); // Móvil: 1 item
      } else if (window.innerWidth <= 1024) {
        setItemsPerView(2); // Tablet: 2 items
      } else {
        setItemsPerView(4); // Desktop: 4 items
      }
    };

    // Llamar a handleResize inicialmente
    handleResize();

    // Añadir event listener para el resize
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerView >= auctions.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? auctions.length - itemsPerView : prevIndex - 1
    );
  };

  const visibleAuctions = auctions.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <div className="my-profile-carousel-container">
      <div className="my-profile-carousel-wrapper">
        <h2 className="my-profile-carousel-title">Auction History</h2>

        <div className="my-profile-carousel-content">
          <button
            onClick={prevSlide}
            className="my-profile-carousel-button my-profile-carousel-button-prev"
            aria-label="Previous slide"
          >
            &#10094;
          </button>

          <div className="my-profile-carousel-items">
            {visibleAuctions.map((auction) => (
              <div
                key={auction._id}
                className="my-profile-carousel-item"
              >
                <div className="my-profile-carousel-item-image-container">
                  <ImageWithFallback
                    src={auction.images[0]}
                    alt={auction.title}
                    fallback="/logo_bidly.png"
                    className="my-profile-carousel-item-image"

                  />

                  <div className="my-profile-carousel-item-status">
                    <span className={`status-badge ${auction.status}`}>
                      {auction.status}
                    </span>   {/*Meter otra info en vez del status, son todas finalizadas*/}
                  </div>
                </div>

                <div className="my-profile-carousel-item-content">
                  <h3 className="my-profile-carousel-item-title">{auction.title}</h3>
                  <p className="my-profile-carousel-item-description">{auction.description}</p>
                  <p className="my-profile-carousel-item-price">${auction.startingPrice}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="my-profile-carousel-button my-profile-carousel-button-next"
            aria-label="Next slide"
          >
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuctionCarrusel;