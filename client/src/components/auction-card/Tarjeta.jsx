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

    return (
        <div className="catalogo-auction-card">
            <div className="catalogo-auction-carousel">
                <ImageCarousel
                    images={datosPuja.images}
                    defaultImage={"logo_bidly.png"}
                />
            </div>
            <div className="catalogo-auction-content">
                <h3 className="catalogo-auction-title">{datosPuja.title}</h3>
                <p className="catalogo-auction-description">{datosPuja.description}</p>
                <div className="catalogo-auction-buttons">
                    <Link to={"/catalog/" + datosPuja._id}>
                        <button className="catalogo-info-button">
                            + INFO
                        </button>
                    </Link>
                    <button className="catalogo-favorite-button"
                        onClick={handleFavoriteClick}
                    >
                        <img
                            src={isFavorite ? favoriteIcon : notFavoriteIcon}
                            alt={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
                            style={{ width: "32px", height: "32px" }}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Tarjeta;
