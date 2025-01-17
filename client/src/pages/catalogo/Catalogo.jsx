import React, { useState } from "react";
import "./catalogo.css";  
import "../productList/ProductList";
import { Outlet } from "react-router-dom";
import ProductList from "../productList/ProductList";
import Categorias from "../../components/categorias/CategoriasCatalogo";

const Catalogo = () => {    
    

    return (
        <div className="catalogo-container">
            <h1>Catálogo de Lotes</h1>
            <p>Aquí tienes una selección de nuestros lotes en puja.</p>

            {/* Sección de Categorías */}
            <Categorias/>
            {/* Sección de Productos */}

            <ProductList/>
            <Outlet/>
        </div>
    );
};

export default Catalogo;
