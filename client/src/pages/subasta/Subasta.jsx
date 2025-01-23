import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAuctionById } from "../../api/auction.js";
import { getBidsByAuction } from "../../api/bid.js";
import ImageCarousel from "../../components/carrousel/Carrousel";
import ActiveBids from "../../components/activeBids/ActiveBids";
import LiveBidding from "../../components/liveBidding/LiveBidding";
import LoginModal from "../../components/modals/LoginModal"; // Importa el modal de login
//import { getBidsByAuctionId } from "../../api/bid.js";
import "./subasta.css";
import socket from "../../socket";

//Falseo
const auctionImages = [
    "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/HQWT2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1681150922686",
    "https://canarias.worten.es/i/d159bf45745c1bd60e1da42656adadfabcee3406",
    "https://static.k-tuin.com/media/wysiwyg/blog/apple-watch-series-8-vs-apple-watch-series-10-todas-sus-diferencias.png",
    "https://www.apple.com/newsroom/images/product/watch/standard/Apple-Watch-S8-Nike-7up-hero-220907_big.jpg.large.jpg",
];

const Subasta = () => {
    const { auctionId } = useParams();
    const [auction, setAuction] = useState(null);
    const [bidsData, setBids] = useState([]); // Estado para almacenar las pujas dinámicas
    const [error, setError] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Simula si el usuario está logueado
    const [currentUserId, setCurrentUserId] = useState(null); // Simula el ID del usuario logueado
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // Estado para el modal de login

    // Fetch para obtener la subasta
    useEffect(() => {
        const fetchAuction = async () => {
            try {
                const auctionData = await getAuctionById(auctionId);
                setAuction(auctionData.auction);
            } catch (err) {
                setError(err.message);
            }
        };

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
                    time: bid.cretedAt,
                }));

                setBids({
                    bids: newBidsArray,
                    minAllowed: bidsData.minAllowed,
                }); // Suponiendo que los datos de pujas vienen en la clave `bids`
            } catch (err) {
                setError(err.message);
            }
        };
        function getCookie(name) {
            const cookies = document.cookie.split("; ");
            const cookie = cookies.find((c) => c.startsWith(`${name}=`));
            return cookie ? cookie.split("=")[1] : null;
        }
        setCurrentUserId(getCookie("userId"));
        if (getCookie("userId")) {
            fetchBids();
            setIsLoggedIn(true);
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
                    ...prevBids.bids,
                    {
                        _id: bid.bidId,
                        name: bid.name,
                        amount: bid.bidAmount,
                        time: new Date(), // Asume que quieres usar la fecha actual para el tiempo
                    },
                ],
                minAllowed: bid.minAllowed, // Añade la nueva puja al array bids
            }));
        });

        return () => {
            socket.off("new-bid");
        };
    }, []);

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!auction) {
        return <p>Cargando...</p>;
    }

    const isSeller = auction.sellerId._id === currentUserId; // Verifica si el usuario es el vendedor

    return (
        <div className="subasta-page">
            {/* Contenido principal */}
            <main className="main-content">
                {/* Detalles del producto */}
                <section className="product-details">
                    <div className="product-image">
                        <a href="">{`Catalog/${auction.category.name}`}</a>
                        <ImageCarousel
                            // images={auction.images.map(
                            //     (image) => `${BASE_URL}/images/${image}`
                            // )}
                            images={auctionImages}
                            initialIndex={0}
                        />
                    </div>

                    <div className="product-info">
                        <h2>{auction.title}</h2>
                        {/* <p>
                            <strong>Categoría:</strong> {auction.category.name}
                        </p> */}
                        <p className="description">{auction.description}</p>
                        <p>SellerID: {auction.sellerId._id}</p>
                        <p>
                            <strong>Precio de salida:</strong>{" "}
                            {auction.startingPrice} €
                        </p>
                        <p>
                            <strong>Fecha inicio de la subasta:</strong>{" "}
                            {new Date(auction.startTime).toLocaleString()}
                        </p>
                        <p>
                            <strong>Fecha fin de la subasta:</strong>{" "}
                            {new Date(auction.endTime).toLocaleString()}
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
                        {!isSeller && (
                            <ActiveBids
                                auctionId={auctionId}
                                userId={currentUserId}
                                endTime={auction.endTime}
                                minBid={bidsData.minAllowed}
                            />
                        )}
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
