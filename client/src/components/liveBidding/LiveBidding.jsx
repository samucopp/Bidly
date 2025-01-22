import React from "react";
import "./liveBidding.css";
const LiveBidding = ({ bids }) => {
    return (
        <div className="bids">
            <h3>Pujas en directo</h3>
            <div className="bid-container">
                {bids.length === 0 ? (
                    <p>Aún no hay pujas.</p>
                ) : (
                    <ul>
                        {bids.map((bid) => (
                            <li key={bid._id}>
                                {bid.userId
                                    ? bid.userId.name
                                    : "Usuario Anónimo"}{" "}
                                - {new Date(bid.createdAt).toLocaleString()} -{" "}
                                {bid.amount} €
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default LiveBidding;
