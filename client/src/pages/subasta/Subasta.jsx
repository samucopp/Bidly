import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BASE_URL } from "../../const/api";
import "./subasta.css";
import ImageCarousel from "../../components/carrousel/Carrousel";
import ActiveBids from "../../components/activeBids/ActiveBids";

const Subasta = () => {
  const { auctionId } = useParams();
  const [auction, setAuction] = useState(null);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Simula si el usuario está logueado
  const [currentUserId, setCurrentUserId] = useState("678e32ba9e321d7fda566083"); // Simula el ID del usuario logueado

  useEffect(() => {
    const fetchData = async () => {
      try {
        const auctionResponse = await fetch(`${BASE_URL}/auction/${auctionId}`);
        if (!auctionResponse.ok) throw new Error("Error al cargar la subasta.");
        const auctionData = await auctionResponse.json();
        setAuction(auctionData.auction);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, [auctionId]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!auction) {
    return <p>Cargando...</p>;
  }

  const isSeller = auction.sellerId._id === currentUserId; // Verifica si el usuario es el vendedor

  return (
    <div className="subasta-page">
      {/* Encabezado */}
      <header className="header">
        <h1>Subasta: {auction.title}</h1>
      </header>

      {/* Contenido principal */}
      <main className="main-content">
        {/* Detalles del producto */}
        <section className="product-details">
          <div className="product-image">
            <img
              src={`${BASE_URL}/images/${auction.images[0]}`}
              alt={auction.title}
            />
            <ImageCarousel
              images={auction.images.map(
                (image) => `${BASE_URL}/images/${image}`
              )}
              initialIndex={0}
            />
          </div>

          <div className="product-info">
            <h2>{auction.title}</h2>
            <p><strong>Categoría:</strong> {auction.category.name}</p>
            <p><strong>Descripción:</strong> {auction.description}</p>
            <p><strong>Precio de salida:</strong> {auction.startingPrice} €</p>
            <p><strong>Fecha inicio de la subasta:</strong> {new Date(auction.startTime).toLocaleString()}</p>
            <p><strong>Fecha fin de la subasta:</strong> {new Date(auction.endTime).toLocaleString()}</p>

            {/* Botón condicional para loguearse */}
            {!isLoggedIn && auction.status === "active" && (
              <div className="login-prompt">
                <p>Tienes que estar logueado para poder pujar</p>
                <Link to="/login">
                  <button className="login-button">Ir a Login</button>
                </Link>
              </div>
            )}

            {/* Mensaje para el vendedor */}
            {isSeller && (
              <p className="seller-message">
                No puedes pujar en tu propia subasta.
              </p>
            )}

            {/* Botón para entrar a subasta */}
            {!isSeller && isLoggedIn && (
              <button className="enter-auction">Entrar a subasta</button>
            )}
          </div>
        </section>

        {/* Puja en directo */}
        {isLoggedIn && !isSeller && <ActiveBids followers={auction.followers} />}

        {/* Temporizador */}
        <div className="timer">
          <p>
            <strong>Tiempo restante:</strong> {/* Aquí podrías implementar un temporizador dinámico */}
          </p>
        </div>

        {/* Sugerencias */}
        <section className="suggestions">
          <h3>Sugerencias</h3>
          <div className="suggestion-items">
            {/* Aquí podrías incluir productos sugeridos */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Subasta;
