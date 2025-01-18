import './CategoriasCatalogo.css';
import React from "react";

const Categorias = ({ categoriasData, selectedCategory, onCategoryChange }) => {
    return (
        <div className="categorias">
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
    );
};

export default Categorias;