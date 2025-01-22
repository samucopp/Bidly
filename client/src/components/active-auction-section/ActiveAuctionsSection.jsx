import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ActiveAuctionsSection.css";
import { BASE_URL } from "../../const/api";
import { getAuctions } from "../../api/auction";

const ActiveAuctionsSection = () => {
    const [auctions, setAuctions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchActiveAuctions = async () => {
            try {
                const data = await getAuctions();
                setAuctions(data.auctions.slice(0, 4)); // Solo mostramos 4 subastas
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchActiveAuctions();
    }, []);

    if (loading) {
        return (
            <div className="loading-state">
                <p>Cargando subastas...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="error-state">
                <p>{error}</p>
            </div>
        );
    }

    return (
        <>
            <section className="active-auctions-section">
                <div className="active-auctions-container">
                    <div className="active-auctions-header">
                        <h2 className="active-auctions-title">
                            Active Auctions
                        </h2>
                        <Link
                            to="/catalog?status=active"
                            className="see-all-link"
                        >
                            Go to catalog →
                        </Link>
                    </div>

                    <div className="auctions-grid">
                        {auctions.length > 0 ? (
                            auctions.map((auction) => (
                                <div key={auction._id} className="auction-card">
                                    <img
                                        src={
                                            auction.images?.[0] ||
                                            "/api/placeholder/400/300"
                                        }
                                        alt={auction.title}
                                        className="auction-image"
                                    />
                                    <div className="auction-content">
                                        <h3 className="auction-title">
                                            {auction.title}
                                        </h3>
                                        <p className="auction-category">
                                            Category: {auction.category?.name}
                                        </p>
                                        <p className="auction-price">
                                            $
                                            {auction.currentPrice ||
                                                auction.startingPrice}
                                        </p>
                                        <div className="auction-footer">
                                            <span className="auction-end-time">
                                                Finish:{" "}
                                                {new Date(
                                                    auction.endTime
                                                ).toLocaleDateString()}
                                            </span>
                                            <Link
                                                to={`/auction/${auction._id}`}
                                                className="view-button"
                                            >
                                                BID
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="no-auctions-message">
                                No hay subastas activas en este momento
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <section className="upcoming-auctions-section">
                <div className="upcoming-auctions-container">
                    <div className="upcoming-auctions-header">
                        <h2 className="upcoming-auctions-title">
                            Upcoming auctions
                        </h2>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ActiveAuctionsSection;
