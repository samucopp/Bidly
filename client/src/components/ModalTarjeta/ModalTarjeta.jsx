import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BASE_URL } from "../../const/api";

const Modal = ({ visible }) => {
    const { auctionId } = useParams(); // Obtén el parámetro auctionId de la ruta
    const [auction, setAuction] = useState(null); // Cambiado a null para manejar el estado inicial vacío
    const [error, setError] = useState(null); // Manejar errores

    if (!visible) return null;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const auctionResponse = await fetch(`${BASE_URL}/auction/${auctionId}`);
                if (!auctionResponse.ok) throw new Error("Error al cargar los productos.");
                const auctionData = await auctionResponse.json();
                console.log(auctionData);
                setAuction(auctionData.auction);
            } catch (err) {
                setError(err.message);
            }
        };
        fetchData();
    }, [auctionId]);

    if (error) {
        return (
            <div style={modalStyles.overlay}>
                <div style={modalStyles.modal}>
                    <h2>Error</h2>
                    <p>{error}</p>
                    <Link to="/catalog">
                        <button style={buttonStyles.close}>Cerrar</button>
                    </Link>
                </div>
            </div>
        );
    }

    if (!auction) {
        return (
            <div style={modalStyles.overlay}>
                <div style={modalStyles.modal}>
                    <h2>Cargando...</h2>
                </div>
            </div>
        );
    }

    return (
        <div style={modalStyles.overlay}>
            <div style={modalStyles.modal}>
                <h2>{auction.title}</h2>
                <p><strong>Descripción:</strong> {auction.description}</p>
                <img 
                    src={`${BASE_URL}/images/${auction.images[0]}`} 
                    alt={auction.title} 
                    style={{ maxWidth: "100%", height: "auto", marginBottom: "16px" }} 
                />
                <p><strong>Precio Inicial:</strong> {auction.startingPrice} €</p>
                <p><strong>Hora de Inicio:</strong> {new Date(auction.startTime).toLocaleString()}</p>
                <p><strong>Estado:</strong> {auction.status}</p>
                <Link to={`/auction/${auctionId}`}>
                    <button style={buttonStyles.bid}>Pujar</button>
                </Link>
                <Link to="/catalog">
                    <button style={buttonStyles.close}>Cerrar</button>
                </Link>
            </div>
        </div>
    );
};

const modalStyles = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000
    },
    modal: {
        background: "#fff",
        padding: "24px",
        borderRadius: "8px",
        maxWidth: "400px",
        width: "100%",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        textAlign: "center"
    }
};

const buttonStyles = {
    bid: {
        marginTop: "16px",
        padding: "10px 16px",
        backgroundColor: "#007BFF",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer"
    },
    close: {
        marginTop: "8px",
        padding: "10px 16px",
        backgroundColor: "#DC3545",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer"
    }
};

export default Modal;
