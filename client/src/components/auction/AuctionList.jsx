import React from "react";
import Tarjeta from "../auction-card/Tarjeta";
import "./AuctionList.css";

const AuctionList = ({ auctions }) => {


    return (

        <div className="tarjetas-container">
            {auctions.map((auction) => (
                <Tarjeta
                    key={auction._id}
                    datosPuja={auction}
                    favoriteIcon="/fav-icons/heart-full.png"
                    notFavoriteIcon="/fav-icons/heart-empty.png"
                />
            ))}
        </div>
    );
};


export default AuctionList;
