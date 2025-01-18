import React, { useState, useEffect } from "react";
import "./catalogo.css";
import "../productList/ProductList";
import { Outlet } from "react-router-dom";
import ProductList from "../productList/ProductList";
import Categorias from "../../components/categorias/CategoriasCatalogo";
import { BASE_URL } from "../../const/api";

const Catalogo = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch(`${BASE_URL}/category/all`);
                if (!response.ok) throw new Error("Error al cargar los detalles de la subasta.");
                const data = await response.json();
                setCategories(data);
            } catch (err) {
                setError(err.message);
            }
        };
        // Fetch inicial para cargar los detalles de la subasta
        fetchCategories();
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${BASE_URL}/auction`);
                if (!response.ok) throw new Error("Error al cargar los detalles de la subasta.");
                const data = await response.json();
                console.log(data);
                setProducts(data.auctions);
                
            } catch (err) {
                setError(err.message);
            }
        };
        // Fetch inicial para cargar los detalles de la subasta
        fetchProducts();

    }, []);
    return (
        <div className="catalogo-container">
            <h1>Catálogo de Lotes</h1>
            <p>Aquí tienes una selección de nuestros lotes en puja.</p>

            {/* Sección de Categorías */}
            <Categorias categoriasData={categories} />
            {/* Sección de Productos */}

            <ProductList auctions={products} />
            <Outlet />
        </div>
    );
};

export default Catalogo;
