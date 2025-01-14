import React from "react";
import datosPuja from "../../components/DatosPuja";
import Tarjeta from "../../components/Tarjeta";
import "./catalogo.css";  

const Catalogo = () => {    
    const tarjetas = Array.from({ length: 12 }, (_, index) => ({
        ...datosPuja,
        Nombre: `${datosPuja.Nombre} ${index + 1}`,
    }));

    return (
        <div className="catalogo-container">
            <h1>Catálogo de Lotes</h1>
            <p>Aquí tienes una selección de nuestros lotes en puja.</p>
            <div className="tarjetas-container">  
                {tarjetas.map((tarjeta, index) => (
                    <Tarjeta key={index} datosPuja={tarjeta} />
                ))}
            </div>
        </div>
    );
};


export default Catalogo;
