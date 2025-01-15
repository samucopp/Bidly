import React from "react";
import "./subasta.css";  
import "../productList/ProductList"
import { Outlet } from "react-router-dom";
import ProductList from "../productList/ProductList";

const Subasta = () => {
  return (
    <div className="subasta-page">
      {/* Encabezado */}
      <header className="header">
        <h1>Subastas</h1>
      </header>

      {/* Contenido principal */}
      <main className="main-content">
        {/* Detalles del producto */}
        <section className="product-details">
          <div className="product-image">
            {/* Imagen del producto */}
            <img src="/image/EspejoBorder" alt="Producto" />
          </div>
          <div className="product-info">
            <h2>Bidly</h2>
            <p><strong>Lote 34567:</strong> Espejo Border</p>
            <p>Descripción del producto: una pieza elegante y funcional para cualquier espacio.</p>
            <p><strong>Precio de salida:</strong> 20 €</p>
            <p><strong>Fecha inicio de la subasta:</strong> 17/01/2025</p>
            <p><strong>Fecha fin de la subasta:</strong> 18/01/2025</p>
            <button className="enter-auction">Entrar a subasta</button>
          </div>
        </section>

        {/* Puja en directo */}
        <section className="live-bid">
          <div className="bids">
            <h3>Pujas en directo</h3>
            <ul>
              <li>Maria - 16/01/2025 8:31 - 21€</li>
              <li>Juan - 16/01/2025 8:32 - 22€</li>
              <li>Sofia - 16/01/2025 8:33 - 23€</li>
            </ul>
          </div>
          <div className="my-bid">
            <h3>Mi Puja</h3>
            <input type="number" placeholder="Introduce tu puja" />
            <button>Pujar</button>
          </div>
        </section>

        {/* Temporizador */}
        <div className="timer">
          <p><strong>Tiempo restante:</strong> 1h 22m 27s</p>
        </div>

        {/* Sugerencias */}
        <section className="suggestions">
          <h3>Sugerencias</h3>
          <div className="suggestion-items">
            <div className="suggestion-item">
              <img src="/image/EspejoBorder" alt="Sugerencia 1" />
              <p>Producto 1</p>
            </div>
            <div className="suggestion-item">
              <img src="/image/EspejoBorder" alt="Sugerencia 2" />
              <p>Producto 2</p>
            </div>
            <div className="suggestion-item">
              <img src="/image/EspejoBorder" alt="Sugerencia 3" />
              <p>Producto 3</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Subasta;
