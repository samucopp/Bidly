import { useState, useEffect, useRef } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import "./catalogo.css";
import { Outlet } from "react-router-dom";
import AuctionList from "../../components/auction/AuctionList";
import Categorias from "../../components/categorias/CategoriasCatalogo";
import { getAllCategories } from "../../api/category";
import { getAuctions, getAuctionsByCategory, searchAuctions } from "../../api/auction";

const Catalogo = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    const [query, setQuery] = useState('');
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [showActiveBidsOnly, setShowActiveBidsOnly] = useState(false);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const timerRef = useRef(null);

    // Obtener la categoría de la URL
    useEffect(() => {
        const categoryFromUrl = searchParams.get('category');
        if (categoryFromUrl) {
            handleCategoryChange(categoryFromUrl);
        }
    }, [searchParams]);

    // Cargar categorías
    useEffect(() => {
        const fetchData = async () => {
            try {
                const categoriesData = await getAllCategories();
                setCategories(categoriesData);
            } catch (err) {
                setError(err.message);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (location.state?.hasMore !== undefined) {
            setHasMore(location.state.hasMore);
        }
        if (location.state?.query) {
            console.log("query", "|", location.state.query, "|", query);
            setQuery(location.state.query);
        }
        if (location.state?.searchResults) {
            setProducts(location.state.searchResults);
        }

    }, [location.state]);


    // Manejar el cambio de categoría
    const handleCategoryChange = async (categoryId) => {
        setSelectedCategory(categoryId);
        setQuery('');
        setCurrentPage(1);
        setHasMore(true);

        const auctionsData = categoryId
            ? await getAuctionsByCategory(categoryId, showActiveBidsOnly, 1)
            : await getAuctions(showActiveBidsOnly, 1);
        setProducts(auctionsData.auctions);

        if (auctionsData.totalPages <= 1) {
            setHasMore(false);
        }
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

        try {
            const nextPage = currentPage + 1;
            console.log("Fetching page:", nextPage);
            let auctionsData;
            if (query !== '') {
                console.log("query", query);
                auctionsData = await searchAuctions(query, showActiveBidsOnly, nextPage);
            } else if (selectedCategory) {
                console.log("selectedCategory", selectedCategory);
                auctionsData = await getAuctionsByCategory(selectedCategory, showActiveBidsOnly, nextPage);
            } else {
                console.log("else");
                auctionsData = await getAuctions(showActiveBidsOnly, nextPage);
            };
            console.log("auctionsData", auctionsData);

            if (auctionsData.auctions.length > 0) {
                setProducts((prevProducts) => [
                    ...prevProducts,
                    ...auctionsData.auctions.filter(
                        (auction) =>
                            !prevProducts.some((p) => p._id === auction._id)
                    ),
                ]);
            }
            if (nextPage >= auctionsData.totalPages) {
                setHasMore(false);
            } else {
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

            if (isBottom && hasMore && !timerRef.current) {
                console.log("Loading more auctions...");
                loadMoreAuctions();
                timerRef.current = setTimeout(() => {
                    timerRef.current = null;
                }, 1000);
            }
        };


        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [selectedCategory, showActiveBidsOnly, currentPage, hasMore, query]);

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
