import React from "react";
import Home from "../home/Home";
import datosPuja from "../../assets/components/DatosPuja";


const Tarjeta = ({datosPuja}) => {
};


const Catalogo = () => {
    return (
        <>
            <div>
                <h1>Catálogo de Lotes</h1>
                <p> Aquí tienes una selección de nuestros lotes en puja </p>

            </div>
            <Tarjeta
            datosPuja={datosPuja}
            ></Tarjeta>

        </>
    );


};



export default Catalogo;