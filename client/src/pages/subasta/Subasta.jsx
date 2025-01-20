import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BASE_URL } from "../../const/api";
import "./subasta.css";
import ImageCarousel from "../../components/carrousel/Carrousel";

const Subasta = () => {
  const { auctionId } = useParams(); // Obtén el parámetro auctionId de la ruta
  const [auction, setAuction] = useState(null); // Estado inicial de la subasta
  const [error, setError] = useState(null); // Estado para manejar errores

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
            {/* Imagen del producto */}
            <img
              src={`${BASE_URL}/images/${auction.images[0]}`}
              alt={auction.title}
            />
            {/* Carrusel de imágenes */}
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
            <p><strong>Precio actual:</strong> {auction.currentPrice} €</p>
            <p><strong>Fecha inicio de la subasta:</strong> {new Date(auction.startTime).toLocaleString()}</p>
            <p><strong>Fecha fin de la subasta:</strong> {new Date(auction.endTime).toLocaleString()}</p>
            <button className="enter-auction">Entrar a subasta</button>
          </div>
        </section>

        {/* Puja en directo */}
        <section className="live-bid">
          <div className="bids">
            <h3>Pujas en directo</h3>
            {auction.followers.length === 0 ? (
              <p>Aún no hay pujas.</p>
            ) : (
              <ul>
                {auction.followers.map((follower, index) => (
                  <li key={index}>
                    {follower.name} - {new Date(follower.bidTime).toLocaleString()} - {follower.bidAmount} €
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="my-bid">
            <h3>Mi Puja</h3>
            <input type="number" placeholder="Introduce tu puja" />
            <button>Pujar</button>
          </div>
        </section>

        {/* Temporizador */}
        <div className="timer">
          <p><strong>Tiempo restante:</strong> {/* Aquí podrías implementar un temporizador dinámico */}</p>
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
