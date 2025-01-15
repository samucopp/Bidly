import React, { useState } from "react";
import "./catalogo.css";  
import "../productList/ProductList";
import { Outlet } from "react-router-dom";
import ProductList from "../productList/ProductList";

const Catalogo = () => {    
    const [openCategories, setOpenCategories] = useState([]);

    const toggleCategory = (category) => {
        if (openCategories.includes(category)) {
            setOpenCategories(openCategories.filter((cat) => cat !== category));
        } else {
            setOpenCategories([...openCategories, category]);
        }
    };

    return (
        <div className="catalogo-container">
            <h1>Catálogo de Lotes</h1>
            <p>Aquí tienes una selección de nuestros lotes en puja.</p>

            {/* Sección de Categorías */}
            <div className="categorias">
                <h2>Categorías</h2>
                <div className="categoria">
                    <h3 onClick={() => toggleCategory('muebles')}>Muebles</h3>
                    {openCategories.includes('muebles') && (
                        <ul>
                            <li>Espejos</li>
                            <li>Mesas</li>
                            <li>Sillones</li>
                        </ul>
                    )}
                </div>
                <div className="categoria">
                    <h3 onClick={() => toggleCategory('arte')}>Arte</h3>
                    {openCategories.includes('arte') && (
                        <ul>
                            <li>Jarrones</li>
                            <li>Cuadros</li>
                            <li>Escultura</li>
                            <li>Vinilos</li>
                        </ul>
                    )}
                </div>
                <div className="categoria">
                    <h3 onClick={() => toggleCategory('motor')}>Motor</h3>
                    {openCategories.includes('motor') && (
                        <ul>
                            <li>Coches</li>
                            <li>Motos</li>
                            <li>Barcos</li>
                            <li>Drones</li>
                        </ul>
                    )}
                </div>
            </div>

            <ProductList/>
            <Outlet/>
        </div>
    );
};

export default Catalogo;
