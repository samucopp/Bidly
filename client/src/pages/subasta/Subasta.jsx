import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAuctionById } from "../../api/auction.js";
import { getBidsByAuction } from "../../api/bid.js";
import ImageCarousel from "../../components/carrousel/Carrousel";
import ActiveBids from "../../components/activeBids/ActiveBids";
import LiveBidding from "../../components/liveBidding/LiveBidding";
import LoginModal from "../../components/modals/LoginModal"; // Importa el modal de login
import Cookies from "js-cookie";
import "./subasta.css";
import socket from "../../socket";

const Subasta = () => {
    const { auctionId } = useParams();
    const [auction, setAuction] = useState(null);
    const [bidsData, setBids] = useState([]); // Estado para almacenar las pujas dinámicas
    const [error, setError] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Simula si el usuario está logueado
    const [currentUserId, setCurrentUserId] = useState(null); // Simula el ID del usuario logueado
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // Estado para el modal de login
    const fetchAuction = async () => {
        try {
            const auctionData = await getAuctionById(auctionId);
            setAuction(auctionData.auction);
        } catch (err) {
            setError(err.message);
        }
    };
    // Fetch para obtener la subasta
    useEffect(() => {
        fetchAuction();
    }, [auctionId]);

    // Fetch para obtener las pujas relacionadas
    useEffect(() => {
        const fetchBids = async () => {
            try {
                const bidsData = await getBidsByAuction(auctionId);
                const newBidsArray = bidsData.bids.map((bid) => ({
                    _id: bid._id,
                    name: bid.userId.name,
                    amount: bid.amount,
                    time: bid.createdAt,
                }));

                setBids({
                    bids: newBidsArray,
                    minAllowed: bidsData.minAllowed,
                }); // Suponiendo que los datos de pujas vienen en la clave `bids`
            } catch (err) {
                setError(err.message);
            }
        };
        const userId = Cookies.get("userId");
        if (userId) {
            fetchBids();
            setIsLoggedIn(true);
            setCurrentUserId(userId);
        } else {
            setIsLoggedIn(false);
        }
    }, [auctionId]);

    useEffect(() => {
        // Registrar al usuario en la sala al cargar la página
        if (auctionId && currentUserId != null) {
            socket.emit("join-auction", auctionId);
            console.log(
                `Usuario ${currentUserId} registrado en la sala ${auctionId}`
            );
        }

        // Limpiar al desmontar el componente
        return () => {
            if (auctionId) {
                socket.emit("leave-auction", auctionId);
                console.log(
                    `Usuario ${currentUserId} salió de la sala ${auctionId}`
                );
            }
        };
    }, [auctionId, currentUserId]);

    useEffect(() => {
        socket.on("new-bid", (bid) => {
            console.log("Nueva puja recibida:", bid);
            setBids((prevBids) => ({
                ...prevBids, // Copia el estado actual
                bids: [
                    {
                        _id: bid.bidId,
                        name: bid.userName,
                        amount: bid.bidAmount,
                        time: new Date(), // Asume que quieres usar la fecha actual para el tiempo
                    },
                    ...prevBids.bids,
                ],
                minAllowed: bid.minAllowed, // Añade la nueva puja al array bids
            }));
        });

        socket.on("start-auction", (data) => {
            console.log(`Subasta iniciada: ${data.auctionId}`);
            fetchAuction();
        });
        socket.on("end-auction", (data) => {
            console.log(`Subasta terminada: ${data.auctionId}`);
            fetchAuction();
        });
        return () => {
            socket.off("new-bid");
            socket.off("start-auction");
            socket.off("end-auction");
        };
    }, []);

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!auction) {
        return <p>Cargando...</p>;
    }

    const isSeller = auction.sellerId._id === currentUserId; // Verifica si el usuario es el vendedor
    const formatDate = (date) => {
        const options = { weekday: "long" };
        const weekday = new Intl.DateTimeFormat("en-US", options).format(date);
    
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear().toString().slice(-2);
    
        const hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");
    
        return `${weekday}, ${month}/${day}/${year} - ${hours}:${minutes}`;
    };


    return (
        <div className="subasta-page">
            {/* Contenido principal */}
            <main className="main-content">
                {/* Detalles del producto */}
                <section className="product-details">
                    <div className="product-image">
                        <ImageCarousel
                            images={auction.images.map((image) => image)}
                            initialIndex={0}
                        />
                    </div>
                    <div className="product-info">
                        <h2>{auction.title}</h2>
                        <p className="description">{auction.description}</p>
                        <p>
                            <strong>Seller:</strong>{" "}
                            {auction.sellerId.name}</p>
                        <p>
                            <strong>Starting Price:</strong>{" "}
                            {auction.startingPrice} €
                        </p>
                        <p>
                            <strong>Start Date:</strong>{" "}
                            {formatDate(new Date(auction.startTime))}
                        </p>
                        <p>
                            <strong>End Date:</strong>{" "}
                            {formatDate(new Date(auction.startTime))}
                        </p>

                        {/* Botón condicional para loguearse */}
                        {!isLoggedIn && (
                            <div className="login-prompt">
                                <p>
                                    Tienes que estar logueado para poder pujar
                                </p>
                                <button
                                    className="login-button"
                                    onClick={() => setIsLoginModalOpen(true)} // Abrir modal
                                >
                                    Iniciar Sesión
                                </button>
                            </div>
                        )}

                        {/* Mensaje para el vendedor */}
                        {isSeller && (
                            <p className="seller-message">
                                No puedes pujar en tu propia subasta.
                            </p>
                        )}
                    </div>
                </section>
                {isLoggedIn && bidsData.bids && (
                    <section className="live-auction-section">
                        {/* Puja en directo */}
                        <LiveBidding bids={bidsData.bids} />

                        {/* Condiciones bajo las cuales se visualizan (o no) componentes */}

                        <ActiveBids
                            auctionId={auctionId}
                            userId={currentUserId}
                            startTime={auction.startTime}
                            endTime={auction.endTime}
                            minBid={bidsData.minAllowed || 0}
                            enabled={!isSeller && auction.status == "active"}
                            winnerName={auction.winnerId?.name}
                            finalPrice={auction.finalPrice}
                        />
                    </section>
                )}

                {/* Sugerencias */}
                <section className="suggestions">
                    <h3>Sugerencias</h3>
                    <div className="suggestion-items">
                        {/* Aquí podrías incluir productos sugeridos */}
                    </div>
                </section>
            </main>

            {/* Modal de login */}
            <LoginModal
                isOpen={isLoginModalOpen}
                onClose={() => setIsLoginModalOpen(false)} // Cierra el modal
            />
        </div>
    );
};

export default Subasta;
