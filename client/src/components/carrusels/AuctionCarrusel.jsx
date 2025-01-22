import React, { useState, useEffect } from 'react';
import ImageWithFallback from '../../components/fallback-image/ImageWithFallback';
import './AuctionCarrusel.css';

const AuctionCarrusel = () => {
  const auctions = [
    {
      _id: "678fd5c621f2309c37fe4951",
      title: "Apple iPhone 14",
      description: "Latest model of the Apple iPhone with 128GB storage.",
      startingPrice: 1000,
      status: "active",
      images: ['https://images.unsplash.com/photo-1531297482000-800dd1fa2d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 'https://images.unsplash.com/photo-1531297482000-800dd1fa2d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 'https://images.unsplash.com/photo-1531297482000-800dd1fa2d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 'https://images.unsplash.com/photo-1531297482000-800dd1fa2d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80']
    },
    {
      _id: "678fd5c621f2309c37fe4952",
      title: "Apple iPhone 14 Max",
      description: "Latest model of the Apple iPhone with 128GB storage.",
      startingPrice: 1000,
      status: "closed",
      images: ['https://images.unsplash.com/photo-1531297482000-800dd1fa2d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 'https://images.unsplash.com/photo-1531297482000-800dd1fa2d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 'https://images.unsplash.com/photo-1531297482000-800dd1fa2d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 'https://images.unsplash.com/photo-1531297482000-800dd1fa2d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80']
     
    },
    {
      _id: "678fd5c621f2309c37fe4953",
      title: "Samsung Galaxy S23",
      description: "High-performance smartphone with 256GB storage.",
      startingPrice: 900,
      status: "active",
      images: ['https://images.unsplash.com/photo-1531297482000-800dd1fa2d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 'https://images.unsplash.com/photo-1531297482000-800dd1fa2d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 'https://images.unsplash.com/photo-1531297482000-800dd1fa2d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 'https://images.unsplash.com/photo-1531297482000-800dd1fa2d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80']
    },
    {
      _id: "678fd5c621f2309c37fe4954",
      title: "Sony WH-1000XM5",
      description: "Premium noise-canceling wireless headphones.",
      startingPrice: 400,
      status: "active",
      images: ['https://images.unsplash.com/photo-1531297482000-800dd1fa2d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 'https://images.unsplash.com/photo-1531297482000-800dd1fa2d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 'https://images.unsplash.com/photo-1531297482000-800dd1fa2d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 'https://images.unsplash.com/photo-1531297482000-800dd1fa2d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80']
    },
    {
      _id: "678fd5c621f2309c37fe4955",
      title: "Dell XPS 13",
      description: "Ultra-slim laptop with Intel i7 processor.",
      startingPrice: 1200,
      status: "active",
      images: ['https://images.unsplash.com/photo-1531297482000-800dd1fa2d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 'https://images.unsplash.com/photo-1531297482000-800dd1fa2d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 'https://images.unsplash.com/photo-1531297482000-800dd1fa2d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 'https://images.unsplash.com/photo-1531297482000-800dd1fa2d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80']
    }
  ];

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