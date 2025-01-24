import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getAuctionById } from "../../api/auction.js";
import "./ModalTarjeta.css";

const Modal = ({ visible }) => {
    const { auctionId } = useParams(); // Obtén el parámetro auctionId de la ruta
    const [auction, setAuction] = useState(null); // Cambiado a null para manejar el estado inicial vacío
    const [error, setError] = useState(null); // Manejar errores

    if (!visible) return null;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const auctionData = await getAuctionById(auctionId);
                setAuction(auctionData.auction);
            } catch (err) {
                setError(err.message);
            }
        };
        fetchData();
    }, [auctionId]);

    if (error) {
        return (
            <div className="overlay">
                <div className="modal">
                    <h2>Error</h2>
                    <p>{error}</p>
                    <Link to="/catalog">
                        <button className="button-close">Cerrar</button>
                    </Link>
                </div>
            </div>
        );
    }

    if (!auction) {
        return (
            <div className="overlay">
                <div className="modal">
                    <h2>Cargando...</h2>
                </div>
            </div>
        );
    }

    return (
        <div className="overlay">

            <div className="modal">
                <p>
                    <strong>Precio Inicial:</strong> {auction.startingPrice} €
                </p>
                <p>
                    <strong>Hora de Inicio:</strong>{" "}
                    {new Date(auction.startTime).toLocaleString()}
                </p>
                <p>
                    <strong>Estado:</strong> {auction.status}
                </p>
                <Link to={`/auction/${auctionId}`}>
                    <button className="button-bid">Pujar</button>
                </Link>
                <Link to="/catalog">
                    <button className="button-close">Cerrar</button>
                </Link>
            </div>
        </div>
    );
};

export default Modal;
