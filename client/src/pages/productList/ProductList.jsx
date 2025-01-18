import React from "react";
import datosPuja from "../../components/DatosPuja";
import Tarjeta from "../../components/Tarjeta";
import "./ProductList.css";  

const ProductList = ({auctions}) => {   
    

    return (
        
            <div className="tarjetas-container">  
                {auctions.map((auction) => (
                    <Tarjeta key={auction._id} datosPuja={auction} />
                ))}
            </div>
    );
};


export default ProductList;
