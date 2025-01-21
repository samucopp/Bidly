import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../const/api";
import "./subasta.css";
import ImageCarousel from "../../components/carrousel/Carrousel";
import ActiveBids from "../../components/activeBids/ActiveBids";

const Subasta = () => {
  const { auctionId } = useParams();
  const [auction, setAuction] = useState(null);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Simula el estado de login

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
      <header className="header">
        <h1>Subasta: {auction.title}</h1>
      </header>
      <main className="main-content">
        <section className="product-details">
          <div className="product-image">
            <img src={`${BASE_URL}/images/${auction.images[0]}`} alt={auction.title} />
            <ImageCarousel images={auction.images.map((image) => `${BASE_URL}/images/${image}`)} initialIndex={0} />
          </div>
          <div className="product-info">
            <h2>{auction.title}</h2>
            <p><strong>Categoría:</strong> {auction.category.name}</p>
            <p><strong>Descripción:</strong> {auction.description}</p>
            <p><strong>Precio de salida:</strong> {auction.startingPrice} €</p>
            <p><strong>Fecha inicio de la subasta:</strong> {new Date(auction.startTime).toLocaleString()}</p>
            <p><strong>Fecha fin de la subasta:</strong> {new Date(auction.endTime).toLocaleString()}</p>
          </div>
        </section>

        {isLoggedIn && <ActiveBids followers={auction.followers} />} {/* Muestra LiveBids si está logeado */}

        <div className="timer">
          <p><strong>Tiempo restante:</strong> {/* Temporizador dinámico aquí */}</p>
        </div>
      </main>
    </div>
  );
};

export default Subasta;
