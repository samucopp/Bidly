import React from "react";
import datosPuja from "../../components/DatosPuja";
import Tarjeta from "../../components/Tarjeta";
import "./ProductList.css";  

const ProductList = () => {    
    const tarjetas = Array.from({ length: 12 }, (_, index) => ({
        ...datosPuja,
        Nombre: `${datosPuja.Nombre} ${index + 1}`,
    }));

    return (
        
            <div className="tarjetas-container">  
                {tarjetas.map((tarjeta, index) => (
                    <Tarjeta key={index} datosPuja={tarjeta} />
                ))}
            </div>
    );
};


export default ProductList;
