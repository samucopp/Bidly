import './CategoriasCatalogo.css';
import React, { useState } from "react";

const categoriasData = [
    {
        nombre: 'Muebles',
        subcategorias: ['Espejos', 'Mesas', 'Sillones']
    },
    {
        nombre: 'Arte',
        subcategorias: ['Jarrones', 'Cuadros', 'Escultura', 'Vinilos']
    },
    {
        nombre: 'Motor',
        subcategorias: ['Coches', 'Motos', 'Barcos', 'Drones']
    }
];

const Categorias = () => {
    const [openCategories, setOpenCategories] = useState([]);

    const toggleCategory = (category) => {
        if (openCategories.includes(category)) {
            setOpenCategories(openCategories.filter((cat) => cat !== category));
        } else {
            setOpenCategories([...openCategories, category]);
        }
    };

    return (
        <div className="categorias">
            <h2>Categorías</h2>
            {categoriasData.map((categoria) => (
                <div className="categoria" key={categoria.nombre}>
                    <h3 onClick={() => toggleCategory(categoria.nombre)}>
                        {categoria.nombre}
                    </h3>
                    {openCategories.includes(categoria.nombre) && (
                        <ul>
                            {categoria.subcategorias.map((subcategoria) => (
                                <li key={subcategoria}>{subcategoria}</li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Categorias;
