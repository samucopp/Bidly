import React from "react";

const LiveBidding = ({ bids }) => {
  return (
    <section className="live-bid">
      <div className="bids">
        <h3>Pujas en directo</h3>
        {bids.length === 0 ? (
          <p>Aún no hay pujas.</p>
        ) : (
          <ul>
            {bids.map((bid) => (
              <li key={bid._id}>
                {bid.userId ? bid.userId.name : "Usuario Anónimo"} -{" "}
                {new Date(bid.createdAt).toLocaleString()} - {bid.amount} €
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default LiveBidding;
