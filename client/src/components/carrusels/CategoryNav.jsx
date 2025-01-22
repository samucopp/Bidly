import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CategoryNav.css';
import { getAllCategories } from '../../api/category';


const CATEGORY_ICONS = {
  Furniture: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="category-icon">
      <path d="M7 3h10" />
      <path d="M8 3v8" />
      <path d="M16 3v8" />
      <path d="M8 6h8" />
      <rect x="5" y="11" width="14" height="3" />
      <path d="M7 14c0 0 -1 1 -1 3s0 3 0 3" />
      <path d="M17 14c0 0 1 1 1 3s0 3 0 3" />
    </svg>
  ),
  Antiquities: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="category-icon">
      <path d="M4 6 h6 c2 0 2 4 4 4 c2 0 2 -4 4 -4 h2 v12 h-6 c-2 0 -2 4 -4 4 c-2 0 -2 -4 -4 -4 h-2 z" />
    </svg>
  ),
 
  Art: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="category-icon">
      <rect x="2" y="2" width="20" height="20" rx="2" />
      <path d="M2 8h20" />
      <path d="M2 16h20" />
      <path d="M8 2v20" />
      <path d="M16 2v20" />
    </svg>
  ),
  Jewelry: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="category-icon">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 6v6l4 2" />
    </svg>
  ),
  Games: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="category-icon">
      <circle cx="12" cy="12" r="2" />
      <path d="M12 6c2 2 6 2 8 0c-2 4-2 8 0 12c-2-2-6-2-8 0c-2-2-6-2-8 0c2-4 2-8 0-12c2 2 6 2 8 0z" />
      <path d="M12 4c3 2 9 2 11-1c-2 5-2 11 1 15c-3-2-9-2-12 0c-3-2-9-2-11 1c2-5 2-11-1-15c3 2 9 2 12 0z" />
    </svg>
  ),
  Music: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className='category-icon'>
      <path d="M14 3v14"
       strokeLinecap="round" />
      <path d="M14 17c0 2-1.8 3.5-4 3.5s-4-1.5-4-3.5 1.8-3.5 4-3.5 4 1.5 4 3.5z" />
      <path d="M14 3c-4 0-7 2-7 5"
        fill="none"
       strokeLinecap="round" />
      <path d="M14 6c-3 0-5 1.5-5 4"
        fill="none"
       strokeLinecap="round" />
    </svg>
  ),
  Clothing: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="category-icon">
      <path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
    </svg>
  ),
  Toys: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className='category-icon'>

      <circle cx="12" cy="12" r="8" />


      <path d="M12 4 C14 8, 18 10, 20 12" />
      <path d="M4 12 C6 14, 8 18, 12 20" />


      <path d="M7 7 C10 10, 14 14, 17 17"
       strokeLinecap="round" />
    </svg>
  ),

  Electronics:
    (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className='category-icon'>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <line x1="6" y1="8" x2="18" y2="8"strokeLinecap="round" />
        <line x1="6" y1="12" x2="14" y2="12"strokeLinecap="round" />
      </svg>
    ),
  Movies: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="category-icon">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 8h20" />
      <path d="M6 4l2 4" />
      <path d="M12 4l2 4" />
      <path d="M18 4l2 4" />
      <path d="M2 12h20" />
    </svg>
  ),
  Books: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className='category-icon'>
      <path d="M4 4v16a2 2 0 0 0 2 2h14"strokeLinecap="round" />
      <path d="M4 19h14" />
      <path d="M4 4h14" />
      <path d="M18 4v17" />
      <path d="M8 8h6"strokeLinecap="round" />
      <path d="M8 12h6"strokeLinecap="round" />
      <path d="M8 16h6"strokeLinecap="round" />
    </svg>
  )
};

const CategoryNav = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getAllCategories(); 
        
        // metemos un map para poder combinar la categoria con el icono
        const categoriesWithIcons = data.map(category => ({
          ...category,
          icon: CATEGORY_ICONS[category.name] || CATEGORY_ICONS.default
        }));
        
        setCategories(categoriesWithIcons);
      } catch (err) {
        setError(err.message);
        console.error("Error cargando categorías:", err);
      }
    };
  
    fetchCategories();
  }, []);

  const itemsPerView = window.innerWidth <= 768 ? 4 : 8;
  const itemWidth = 120;

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

  const handleCategoryClick = (index, categoryId) => {
    setActiveCategory(index);
    if (categoryId) {
      navigate(`/catalog?category=${categoryId}`); 
  };
  };
  return (
    <div className="category-nav">
      <div className="category-nav-container">
        <div className="category-nav-wrapper">
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
                <div key={category._id} className="category-item">
                  <button
                    className={`category-button ${activeCategory === index ? 'active' : ''}`}
                    onClick={() => handleCategoryClick(index, category._id)}
                  >
                    <div className="icon-wrapper">
                      {category.icon}
                    </div>
                    <span className="category-name">{category.name}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

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