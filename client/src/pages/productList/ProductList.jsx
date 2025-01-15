import React from "react";
import datosPuja from "../../components/DatosPuja";
import Tarjeta from "../../components/Tarjeta";
import "./ProductList.css";  

const ProductList = () => {   
    let _id=1; 
    const tarjetas = Array.from({ length: 12 }, (_, index) => ({
        ...datosPuja,
        Nombre: `${datosPuja.Nombre} ${index + 1}`,
        _id:_id++
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
