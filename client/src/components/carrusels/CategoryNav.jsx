import React, { useState } from 'react';
import './CategoryNav.css';

const CategoryNav = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = [
    {
      id: 1,
      name: 'Muebles',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="category-icon">
          <path d="M7 3h10" />
          <path d="M8 3v8" />
          <path d="M16 3v8" />
          <path d="M8 6h8" />
          <rect x="5" y="11" width="14" height="3" />
          <path d="M7 14c0 0 -1 1 -1 3s0 3 0 3" />
          <path d="M17 14c0 0 1 1 1 3s0 3 0 3" />
        </svg>
      )
    },
    {
      id: 2,
      name: 'Vajilla y menaje',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="category-icon">
          <path d="M4 4h12v13c0 2.5-12 2.5-12 0V4z" />
          <path d="M16 6c3 0 5 2 5 5s-2 5-5 5" />
        </svg>
      )
    },
    {
      id: 3,
      name: 'Alfombras y textiles',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="category-icon">
          <rect x="2" y="2" width="20" height="20" rx="2" />
          <path d="M2 8h20" />
          <path d="M2 16h20" />
          <path d="M8 2v20" />
          <path d="M16 2v20" />
        </svg>
      )
    },
    {
      id: 4,
      name: 'Joyas y relojes',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="category-icon">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 6v6l4 2" />
        </svg>
      )
    },
    {
      id: 5,
      name: 'Oriental',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="category-icon">
          <circle cx="12" cy="12" r="2" />
          <path d="M12 6c2 2 6 2 8 0c-2 4-2 8 0 12c-2-2-6-2-8 0c-2-2-6-2-8 0c2-4 2-8 0-12c2 2 6 2 8 0z" />
          <path d="M12 4c3 2 9 2 11-1c-2 5-2 11 1 15c-3-2-9-2-12 0c-3-2-9-2-11 1c2-5 2-11-1-15c3 2 9 2 12 0z" />
        </svg>
      )
    },
    {
      id: 6,
      name: 'Plata y metal',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="category-icon">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      )
    },
    {
      id: 7,
      name: 'Moda vintage y accesorios',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="category-icon">
          <path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
        </svg>
      )
    },
    {
      id: 8,
      name: 'Juguetes',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="category-icon">
          <path d="M4 6
                 h6
                 c2 0 2 4 4 4
                 c2 0 2 -4 4 -4
                 h2
                 v12
                 h-6
                 c-2 0 -2 4 -4 4
                 c-2 0 -2 -4 -4 -4
                 h-2
                 z" />
        </svg>
      )
    },
    {
      id: 9,
      name: 'Armas y militaria',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="category-icon">
          <path d="M18 4l2 2-2 2" />
          <path d="M4 20l2-2-2-2" />
          <path d="M20 6L4 18" />
        </svg>
      )
    },

    {
      id: 10,
      name: 'Otros',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="category-icon">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v8" />
          <path d="M8 12h8" />
        </svg>
      )
    }
  ];

  const itemsPerView = window.innerWidth <= 768 ? 4 : 8;
  const itemWidth = 120; // Ajusta este valor según el diseño

  const nextSlide = () => {
    if (currentIndex + itemsPerView < categories.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleCategoryClick = (index) => {
    setActiveCategory(index);
  };

  return (
    <div className="category-nav">
      <div className="category-nav-container">
        <div className="category-nav-wrapper">
          {/* Flecha izquierda */}
          <button
            onClick={prevSlide}
            className={`nav-button ${currentIndex === 0 ? 'disabled' : ''}`}
            disabled={currentIndex === 0}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="nav-icon">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="carousel-container">
            <div
              className="carousel-content"
              style={{
                transform: `translateX(-${currentIndex * itemWidth}px)`,
              }}
            >
              {categories.map((category, index) => (
                <div key={category.id} className="category-item">
                  <button
                    className={`category-button ${activeCategory === index ? 'active' : ''}`}
                    onClick={() => handleCategoryClick(index)}
                  >
                    <div className="icon-wrapper">
                      {category.icon}
                    </div>
                    <span className="category-name">{category.name}</span>
                  </button>
                </div>
              ))}
              <div></div>
            </div>
          </div>

          {/* Flecha derecha */}
          <button
            onClick={nextSlide}
            className={`nav-button ${currentIndex + itemsPerView >= categories.length ? 'disabled' : ''}`}
            disabled={currentIndex + itemsPerView >= categories.length}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="nav-icon">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;