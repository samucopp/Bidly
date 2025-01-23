import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "./catalogo.css";
import { Outlet } from "react-router-dom";
import AuctionList from "../../components/auction/AuctionList";
import Categorias from "../../components/categorias/CategoriasCatalogo";
import { getAllCategories } from "../../api/category";
import { getAuctions, getAuctionsByCategory } from "../../api/auction";

const Catalogo = () => {
    const [searchParams] = useSearchParams();
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [showActiveBidsOnly, setShowActiveBidsOnly] = useState(false);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    // Obtener la categoría de la URL
    useEffect(() => {
        const categoryFromUrl = searchParams.get("category");
        if (categoryFromUrl) {
            setSelectedCategory(categoryFromUrl);
        }
    }, [searchParams]);

    // Cargar categorías y productos iniciales
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Cargar categorías
                const categoriesData = await getAllCategories();
                setCategories(categoriesData);

                // Cargar todos los productos inicialmente
                const auctionsData = await getAuctions();
                console.log("auctionsData", auctionsData);
                setProducts(auctionsData.auctions);
            } catch (err) {
                setError(err.message);
            }
        };
        fetchData();
    }, []);

    // Manejar el cambio de categoría
    const handleCategoryChange = async (categoryId) => {
        setSelectedCategory(categoryId);
        setCurrentPage(1);
        setHasMore(true);
        const auctionsData = categoryId
            ? await getAuctionsByCategory(categoryId, showActiveBidsOnly, 1)
            : await getAuctions(showActiveBidsOnly, 1);
        setProducts(auctionsData.auctions);
    };

    // Manejar el cambio del checkbox de subastas activas
    const handleActiveBidsToggle = async () => {
        const newActiveState = !showActiveBidsOnly;
        let auctionsData;
        if (!selectedCategory) {
            auctionsData = await getAuctions(newActiveState);
        } else {
            auctionsData = await getAuctionsByCategory(
                selectedCategory,
                newActiveState
            );
        }
        setProducts(auctionsData.auctions);
        setShowActiveBidsOnly(newActiveState);
    };

    const loadMoreAuctions = async () => {
        if (!hasMore) {
            console.log("No more auctions to load.");
            return;
        }

        const nextPage = currentPage + 1; // Calcula la próxima página explícitamente
        console.log("Fetching page:", nextPage);

        try {
            const nextPage = currentPage + 1;
            const auctionsData = selectedCategory
                ? await getAuctionsByCategory(
                      selectedCategory,
                      showActiveBidsOnly,
                      nextPage
                  )
                : await getAuctions(showActiveBidsOnly, nextPage);

            if (
                auctionsData.auctions.length === 0 ||
                nextPage > auctionsData.totalPages
            ) {
                setHasMore(false);
            } else {
                setProducts((prevProducts) => [
                    ...prevProducts,
                    ...auctionsData.auctions.filter(
                        (auction) =>
                            !prevProducts.some((p) => p._id === auction._id)
                    ),
                ]);
                setCurrentPage(nextPage);
            }
        } catch (err) {
            console.error("Error al cargar más subastas:", err);
            setError(err.message);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const isBottom =
                window.innerHeight + document.documentElement.scrollTop >=
                document.documentElement.offsetHeight - 100;

            if (isBottom && hasMore) {
                console.log("Loading more auctions...");
                loadMoreAuctions();
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [selectedCategory, showActiveBidsOnly, currentPage, hasMore]);

    return (
        <div className="catalog-page">
            <aside className="categories-sidebar">
                {categories.length > 0 && (
                    <Categorias
                        categoriasData={categories}
                        selectedCategory={selectedCategory}
                        onCategoryChange={handleCategoryChange}
                    />
                )}
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
                    <AuctionList auctions={products} />
                )}
                <Outlet />
            </main>
        </div>
    );
};

export default Catalogo;
