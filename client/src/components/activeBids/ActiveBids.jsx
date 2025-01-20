import React from "react";
import "./activeBids.css";

const ActiveBids = ({ followers }) => {
  return (
    <section className="live-bid">
      <div className="bids">
        <h3>Pujas en directo</h3>
        {followers.length === 0 ? (
          <p>Aún no hay pujas.</p>
        ) : (
          <ul>
            {followers.map((follower, index) => (
              <li key={index}>
                {follower.name} - {new Date(follower.bidTime).toLocaleString()} - {follower.bidAmount} €
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="my-bid">
        <h3>Mi Puja</h3>
        <input type="number" placeholder="Introduce tu puja" />
        <button>Pujar</button>
      </div>
    </section>
  );
};

export default ActiveBids;
