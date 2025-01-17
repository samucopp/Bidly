import React, { useEffect, useState } from "react";
import "./subasta.css";
import "../productList/ProductList";
import ImageCarousel from "../../components/carrousel/Carrousel"; // Importa el nuevo componente

const BASE_URL= import.meta.env.VITE_BASE_URL
const Subasta = () => {
  const [auction, setAuction] = useState(null); // Datos de la subasta
  const [bids, setBids] = useState([]); // Lista de pujas en directo
  const [myBid, setMyBid] = useState(""); // Valor de mi puja
  const [error, setError] = useState(null); // Errores de la API
  const auctionId = "34567"; // ID de la subasta (puedes obtenerlo dinámicamente si es necesario)

  // Fetch inicial para cargar los detalles de la subasta
  useEffect(() => {
    const fetchAuctionDetails = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/auctions/${auctionId}`);
        if (!response.ok) throw new Error("Error al cargar los detalles de la subasta.");
        const data = await response.json();
        setAuction(data);
      } catch (err) {
        setError(err.message);
      }
    };

    const fetchLiveBids = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/auctions/${auctionId}/bids`);
        if (!response.ok) throw new Error("Error al cargar las pujas en directo.");
        const data = await response.json();
        setBids(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchAuctionDetails();
    fetchLiveBids();
  }, [auctionId]);

  // Enviar una nueva puja
  const handleBid = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/auctions/${auctionId}/bid`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: myBid }),
      });

      if (!response.ok) throw new Error("Error al realizar la puja.");
      const newBid = await response.json();
      setBids((prevBids) => [...prevBids, newBid]); // Agregar la nueva puja a la lista
      setMyBid(""); // Limpiar el campo de entrada
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="subasta-page">
      <header className="header">
        <h1>Subastas</h1>
      </header>

      <main className="main-content">
        {error && <p className="error">{error}</p>}

        {auction ? (
          <>
            <section className="product-details">
              <div className="product-image">
                <img src={auction.image || "/image/default.jpg"} alt={auction.name || "Producto"} />
                <ImageCarousel images={auction.images || []} initialIndex={0} />
              </div>

              <div className="product-info">
                <h2>{auction.name}</h2>
                <p><strong>Lote {auction.id}:</strong> {auction.description}</p>
                <p><strong>Precio de salida:</strong> {auction.startingPrice} €</p>
                <p><strong>Fecha inicio de la subasta:</strong> {auction.startDate}</p>
                <p><strong>Fecha fin de la subasta:</strong> {auction.endDate}</p>
                <button className="enter-auction">Entrar a subasta</button>
              </div>
            </section>

            <section className="live-bid">
              <div className="bids">
                <h3>Pujas en directo</h3>
                <ul>
                  {bids.map((bid, index) => (
                    <li key={index}>
                      {bid.user} - {bid.date} - {bid.amount}€
                    </li>
                  ))}
                </ul>
              </div>

              <div className="my-bid">
                <h3>Mi Puja</h3>
                <input
                  type="number"
                  value={myBid}
                  onChange={(e) => setMyBid(e.target.value)}
                  placeholder="Introduce tu puja"
                />
                <button onClick={handleBid}>Pujar</button>
              </div>
            </section>

            <div className="timer">
              <p><strong>Tiempo restante:</strong> {auction.remainingTime}</p>
            </div>
          </>
        ) : (
          <p>Cargando detalles de la subasta...</p>
        )}
      </main>
    </div>
  );
};

export default Subasta;
