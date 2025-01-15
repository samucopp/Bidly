import React, { useState } from "react";
import Modal from "./ModalTarjeta/ModalTarjeta";

const Tarjeta = ({ datosPuja }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    return (
        <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px", maxWidth: "300px" }}>
            <h2>{datosPuja.Nombre}</h2>
            <img
                src={datosPuja.Imagen}
                alt={datosPuja.Nombre}
                style={{ width: "100%", borderRadius: "8px" }}
            />
            <p>Puja de Salida: {datosPuja.PujadeSalida} €</p>
            <p>Puja Actual: {datosPuja.PujaActual} €</p>
            <button
                style={{
                    marginTop: "16px",
                    padding: "10px 16px",
                    backgroundColor: "#007BFF",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer"
                }}
                onClick={toggleModal}
            >
                Mas información
            </button>

            <Modal
                visible={modalVisible}
                onClose={toggleModal}
                onBid={() => alert("Esto llevará a puja")}
            />
        </div>
    );
};

export default Tarjeta;
