import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "./catalogo.css";
import { Outlet } from "react-router-dom";
import AuctionList from "../auction/AuctionList";
import Categorias from "../../components/categorias/CategoriasCatalogo";
import { BASE_URL } from "../../const/api";

const Catalogo = () => {
    const [searchParams] = useSearchParams();
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [error, setError] = useState(null);

    // Obtener la categoría de la URL
    useEffect(() => {
        const categoryFromUrl = searchParams.get('category');
        if (categoryFromUrl) {
            setSelectedCategory(categoryFromUrl);
        }
    }, [searchParams]);
    // Cargar categorías y productos iniciales
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Cargar categorías
                const categoriesResponse = await fetch(`${BASE_URL}/category/all`);
                if (!categoriesResponse.ok) throw new Error("Error al cargar las categorías.");
                const categoriesData = await categoriesResponse.json();
                setCategories(categoriesData);

                // Cargar todos los productos inicialmente
                const productsResponse = await fetch(`${BASE_URL}/auction`);
                if (!productsResponse.ok) throw new Error("Error al cargar los productos.");
                const productsData = await productsResponse.json();
                setProducts(productsData.auctions);
            } catch (err) {
                setError(err.message);
            }
        };
        fetchData();
    }, []);

    // Manejar el cambio de categoría
    const handleCategoryChange = (categoryId) => {
        setSelectedCategory(categoryId);
        // Actualizar URL
        const newSearchParams = new URLSearchParams(window.location.search);
        if (categoryId) {
            newSearchParams.set('category', categoryId);
        } else {
            newSearchParams.delete('category');
        }
        window.history.pushState({}, '', `${window.location.pathname}?${newSearchParams}`);
    };

    // Filtrar productos según la categoría seleccionada
    const filteredProducts = selectedCategory
        ? products.filter(product => product.category._id === selectedCategory)
        : products;

        return (
            <div className="catalog-page">
                {/* Sidebar de Categorías */}
                <aside className="categories-sidebar">
                    <Categorias
                        categoriasData={categories}
                        selectedCategory={selectedCategory}
                        onCategoryChange={handleCategoryChange}
                    />
                </aside>
    
                {/* Contenido Principal */}
                <main className="main-content">
                    <p>Aquí tienes una selección de nuestros lotes en puja.</p>
                    {error ? (
                        <div className="error">{error}</div>
                    ) : (
                        <AuctionList auctions={filteredProducts} />
                    )}
                    <Outlet />
                </main>
            </div>
        );
    };
    
    export default Catalogo;