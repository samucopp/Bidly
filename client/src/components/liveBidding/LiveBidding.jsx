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
                    <>
                        {bids.map((bid) => (
                            <div key={bid._id} className="bid-slide">
                                <p className="name">
                                    {bid.name ? bid.name : "Usuario Anónimo"}
                                </p>
                                <p className="bid-amount">{bid.amount} €</p>
                                <p className="datetime">
                                    {new Date(bid.time).toLocaleString()}
                                </p>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
};

export default LiveBidding;
