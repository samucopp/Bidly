import React, { useState } from "react";
import { Link } from "react-router-dom";


const Tarjeta = ({ datosPuja }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    return (
        <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px", maxWidth: "300px" }}>
            <h2>{datosPuja.title}</h2>
            <img
                src={datosPuja.images[0]}
                alt={datosPuja.title}
                style={{ width: "100%", borderRadius: "8px" }}
            />
            <p>{datosPuja.description}</p>
            <Link to={"/catalog/" + datosPuja._id}>
                <button
                    style={{
                        marginTop: "16px",
                        padding: "10px 16px",
                        color: "#000",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer"
                    }}
                >
                    + INFO
                </button>
            </Link>
        </div>
    );
};

export default Tarjeta;
