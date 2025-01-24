import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ActiveAuctionsSection.css";
import { getAuctions } from "../../api/auction";
import ImageWithFallback from "../fallback-image/ImageWithFallback";
import ImageCarousel from "../../components/carrousel/Carrousel";

const ActiveAuctionsSection = () => {
    const [auctions, setAuctions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchActiveAuctions = async () => {
            try {
                const data = await getAuctions(true);
                setAuctions(data.auctions.slice(0, 6)); // Solo mostramos 4 subastas
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
        <section className="active-auctions-section">
            <div className="active-auctions-container">
                <div className="active-auctions-header">
                    <h2 className="active-auctions-title">
                        Active Auctions
                    </h2>
                    <Link
                        to="/catalog"
                        className="see-all-link"
                    >
                        Go to catalog →
                    </Link>
                </div>

                <div className="auctions-grid">
                    {auctions.length > 0 ? (
                        auctions.map((auction) => (
                            <div key={auction._id} className="active-auction-card">
                                <div className="active-auction-carousel">
                                    <ImageCarousel
                                        images={auction.images}
                                        defaultImage={"logo_bidly.png"}
                                    />
                                </div>
                                <div className="active-auction-content">
                                    <h3 className="auction-title">
                                        {auction.title}
                                    </h3>
                                    <p className="active-auction-category">
                                        Category: {auction.category?.name}
                                    </p>
                                    <p className="active-auction-price">
                                        $
                                        {auction.currentPrice ||
                                            auction.startingPrice}
                                    </p>
                                    <div className="active-auction-footer">
                                        <p className="active-auction-end-time">
                                            <strong>End Date:</strong> {formatDate(new Date(auction.endTime))}
                                        </p>
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
    );
};

export default ActiveAuctionsSection;
