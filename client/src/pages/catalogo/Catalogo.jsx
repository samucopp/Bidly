import React from "react";
import Home from "../home/Home";
import Tarjeta from "../../components/Tarjeta";
import datosPuja from "../../components/DatosPuja";


const Catalogo = () => {
    return (
        <div>
            <h1>Catálogo de Lotes</h1>
            <p>Aquí tienes una selección de nuestros lotes en puja:</p>
            <Tarjeta datosPuja={datosPuja} />
        </div>
    );
};


export default Catalogo;