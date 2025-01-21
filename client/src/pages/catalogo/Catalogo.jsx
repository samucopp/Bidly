import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "./catalogo.css";
import { Outlet } from "react-router-dom";
import AuctionList from "../../components/auction/AuctionList";
import Categorias from "../../components/categorias/CategoriasCatalogo";
import { BASE_URL } from "../../const/api";

const Catalogo = () => {
    const [searchParams] = useSearchParams();
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [showActiveBidsOnly, setShowActiveBidsOnly] = useState(false);
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

    // Manejar el cambio del checkbox de subastas activas
    const handleActiveBidsToggle = () => {
        setShowActiveBidsOnly(!showActiveBidsOnly);
    };

    // Filtrar productos según la categoría seleccionada y el estado del checkbox
    const filteredProducts = products
        .filter(product => !selectedCategory || product.category._id === selectedCategory)
        .filter(product => !showActiveBidsOnly || product.status === "active");

    return (
        <div className="catalog-page">
            <aside className="categories-sidebar">
                <Categorias
                    categoriasData={categories}
                    selectedCategory={selectedCategory}
                    onCategoryChange={handleCategoryChange}
                />
            </aside>

            <main className="main-content">
                <div className="catalog-header">
                    <p>Here is a selection of our lots up for auction.</p>
                    <div className="active-bids-filter">
                        <label className="checkbox-container">
                            <input
                                type="checkbox"
                                checked={showActiveBidsOnly}
                                onChange={handleActiveBidsToggle}
                            />
                            <span className="checkmark"></span>
                            Show Active Bids
                        </label>
                    </div>
                </div>
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