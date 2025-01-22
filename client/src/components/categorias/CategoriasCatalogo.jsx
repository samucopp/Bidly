import './CategoriasCatalogo.css';
import React, { useState } from "react";

const Categorias = ({ categoriasData, selectedCategory, onCategoryChange }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedCategoryName, setSelectedCategoryName] = useState(null);

    const handleCategoryChange = (categoryId, categoryName) => {
        onCategoryChange(categoryId); // Llamamos al método que cambia la categoría
        setSelectedCategoryName(categoryName); // Actualizamos el nombre de la categoría seleccionada
        setIsMenuOpen(false); // Cerramos el menú al seleccionar una categoría
    };

    return (
        <div className="menu-container">
            {/* Botón para móviles */}
            <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {selectedCategoryName ? selectedCategoryName : 'Categories'}
            </button>
            
            {/* Menú de categorías */}
            <div className={`categorias ${isMenuOpen ? 'open' : ''}`}>
                <h2>Categories</h2>
                <div 
                    className={`categoria ${selectedCategory === null ? 'selected' : ''}`}
                    onClick={() => handleCategoryChange(null, 'All Categories')}
                >
                    <h3>All Categories</h3>
                </div>
                
                {categoriasData.map((categoria) => (
                    <div 
                        className={`categoria ${selectedCategory === categoria._id ? 'selected' : ''}`}
                        key={categoria._id}
                        onClick={() => handleCategoryChange(categoria._id, categoria.name)}
                    >
                        <h3>{categoria.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categorias;
