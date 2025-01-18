import './CategoriasCatalogo.css';
import React from "react";

const Categorias = ({ categoriasData }) => {

    return (
        <div className="categorias">
            <h2>Categorías</h2>
            {categoriasData.map((categoria) => (
                <div className="categoria" key={categoria._id}>
                    <h3>
                        {categoria.name}
                    </h3>
                </div>
            ))}
        </div>
    );
};

export default Categorias;
