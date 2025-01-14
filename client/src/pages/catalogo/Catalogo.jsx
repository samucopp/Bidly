import React from "react";
import "./catalogo.css";  
import "../productList/ProductList"
import { Outlet } from "react-router-dom";

const Catalogo = () => {    
    
    return (
        <div className="catalogo-container">
            <h1>Catálogo de Lotes</h1>
            <p>Aquí tienes una selección de nuestros lotes en puja.</p>
            <Outlet/>
        </div>
    );
};


export default Catalogo;
