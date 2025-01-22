import './CategoriasCatalogo.css';
import React, { useState } from "react";

const Categorias = ({ categoriasData, selectedCategory, onCategoryChange }) => {
    // Estado para controlar si el menú está abierto o cerrado
    const [menuOpen, setMenuOpen] = useState(false);

    // Función para alternar el estado del menú
    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <div className="menu-container">
            {/* Botón para móviles */}
            <button className="menu-toggle" onClick={toggleMenu}>
                Categories
            </button>
            
            {/* Menú de categorías */}
            <div className={`categorias ${menuOpen ? 'open' : ''}`}>
                <h2>Categories</h2>
                <div 
                    className={`categoria ${selectedCategory === null ? 'selected' : ''}`}
                    onClick={() => onCategoryChange(null)}
                >
                    <h3>All Categories</h3>
                </div>
                
                {categoriasData.map((categoria) => (
                    <div 
                        className={`categoria ${selectedCategory === categoria._id ? 'selected' : ''}`}
                        key={categoria._id}
                        onClick={() => onCategoryChange(categoria._id)}
                    >
                        <h3>{categoria.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categorias;
