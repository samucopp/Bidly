import React from "react";
import "./activeBids.css";

const ActiveBids = ({ followers }) => {
  return (
    <section className="live-bid">
      <div className="my-bid">
        <h3>Mi Puja</h3>
        <input type="number" placeholder="Introduce tu puja" />
        <button>Pujar</button>
      </div>
    </section>
  );
};

export default ActiveBids;
