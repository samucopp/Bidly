import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { addAuctionToFavorites, removeAuctionFromFavorites } from "../../api/user";
import "./Tarjeta.css";
import ImageCarousel from "../../components/carrousel/Carrousel";

const Tarjeta = ({ datosPuja, favoriteIcon, notFavoriteIcon }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const storedUserId = Cookies.get("userId");
        if (storedUserId) {
            setUserId(storedUserId);
        } else {
            console.error("No se pudo obtener el ID del usuario");
        }
    }, []);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    const handleFavoriteClick = async () => {
        try {
            if (isFavorite) {
                await removeAuctionFromFavorites(userId, datosPuja._id);
                setIsFavorite(false);
            } else {
                await addAuctionToFavorites(userId, datosPuja._id);
                setIsFavorite(true);
            }
        } catch (error) {
            console.error("Error gestionando favoritos:", error);
        }
    };
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
        <div className="catalogo-auction-card">
            <div className="catalogo-auction-carousel">
                <ImageCarousel
                    images={datosPuja.images}
                    defaultImage={"logo_bidly.png"}
                />
            </div>
            <div className="catalogo-auction-content">
                <div className="catalogo-auction-content-divider">
                    <h3 className="catalogo-auction-title">{datosPuja.title}</h3>
                    <p className="catalogo-auction-description">{datosPuja.description}</p>
                </div>
                <div className="catalogo-auction-content-divider">
                    <p className="catalogo-auction-price">
                        <strong>Starting Price: </strong>
                        ${datosPuja.currentPrice ? datosPuja.currentPrice : datosPuja.startingPrice}
                    </p>
                    <p className="catalogo-auction-time">
                        {datosPuja.status === "active" ? (
                            <>
                                <strong>End Date:</strong> {formatDate(new Date(datosPuja.endTime))}
                            </>
                        ) : (
                            <>
                                <strong>Start Date:</strong> {formatDate(new Date(datosPuja.startTime))}
                            </>
                        )}
                    </p>
                </div>
                <div className="catalogo-auction-buttons">
                    <button
                        className="catalogo-favorite-button"
                        onClick={handleFavoriteClick}
                    >
                        <img
                            src={isFavorite ? favoriteIcon : notFavoriteIcon}
                            alt={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
                            style={{ width: "36px", height: "36px" }}
                        />
                    </button>
                    <div className="catalogo-auction-buttons">
                        <div className="catalogo-bid-placeholder">
                            {datosPuja.status === "active" ? (
                                <Link to={"/auction/" + datosPuja._id}>
                                    <button className="catalogo-bid-button">
                                        BID
                                    </button>
                                </Link>
                            ) : (
                                <div style={{ visibility: "hidden", width: "100%" }}>
                                    {/* Esto asegura que el espacio del botón Bid se mantenga */}
                                    <button className="catalogo-bid-button">BID</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tarjeta;
