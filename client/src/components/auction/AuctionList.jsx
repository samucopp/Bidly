import React from "react";
import Tarjeta from "../auction-card/Tarjeta";
import "./AuctionList.css";

const AuctionList = ({ auctions, favorites }) => {

    const checkFavorites = (auctionId) => {
        console.log("favorites", favorites);
        return favorites.auctions.some((favorite) => favorite._id === auctionId);
    };


    return (

        <div className="tarjetas-container">
            {auctions.map((auction) => (
                <Tarjeta
                    key={auction._id}
                    datosPuja={auction}
                    isDefaultFavorite={checkFavorites(auction._id)}
                    favoriteIcon="/fav-icons/heart-full.png"
                    notFavoriteIcon="/fav-icons/heart-empty.png"
                />
            ))}
        </div>
    );
};


export default AuctionList;
