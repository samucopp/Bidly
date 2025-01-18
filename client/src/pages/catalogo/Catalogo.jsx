import { Outlet } from "react-router-dom";
import ProductList from "../productList/ProductList";
import Categorias from "../../components/categorias/CategoriasCatalogo";

const Catalogo = () => {
    return (
        <div className="catalog-page">
            {/* Categories Sidebar */}
            <aside className="categories-sidebar">
                <Categorias />
            </aside>

            {/* Main Content */}
            <main className="main-content">
                <p>Aquí tienes una selección de nuestros lotes de productos en puja.</p>
                <ProductList />
                <Outlet />
            </main>
        </div>
    );
};

export default Catalogo;