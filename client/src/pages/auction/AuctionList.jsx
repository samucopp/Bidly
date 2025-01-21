import React from "react";
import datosPuja from "../../components/DatosPuja";
import Tarjeta from "../../components/Tarjeta";
import "./AuctionList.css";  

const AuctionList = ({auctions}) => {   
    

    return (
        
            <div className="tarjetas-container">  
                {auctions.map((auction) => (
                    <Tarjeta key={auction._id} datosPuja={auction} />
                ))}
            </div>
    );
};


export default AuctionList;
