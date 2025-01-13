import React from "react";


const datosPuja ={
    Nombre: "Ejemplo",
    Imagen: "https://Ejemplo.com", // Imagen de ejemplo
    PrecioEstimado: 3000, // Precio estimado en euros
    PreciodeSalida: 500 // Precio de salida en euros
}
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

const Tarjeta = ({datosPuja}) => {



};

export default Catalogo;