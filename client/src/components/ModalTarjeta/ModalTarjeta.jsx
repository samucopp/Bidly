import React from "react";
import { Link } from "react-router-dom";
const Modal = ({ visible, onClose, onBid }) => {
    if (!visible) return null;

    return (
        <div style={modalStyles.overlay}>
            <div style={modalStyles.modal}>
                <h2>Reloj de Arena Antiguo</h2>
                <p><strong>Origen Geográfico:</strong> Egipto</p>
                <p><strong>Descripción Física:</strong> Reloj de arena artesanal con marco de madera tallada y ampollas de cristal soplado. Relleno con arena fina dorada.</p>
                <p><strong>Precio Aproximado de Mercado:</strong> 5000 €</p>
                <button
                    style={buttonStyles.bid}
                    onClick={onBid}
                >
                    Pujar
                </button>
                {/* <button
                    style={buttonStyles.close}
                    onClick={onClose}
                >
                    Cerrar
                </button> */}
                <Link to="/catalogo">
                <button>X</button>
                </Link>
            </div>
        </div>
    );
};

const modalStyles = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000
    },
    modal: {
        background: "#fff",
        padding: "24px",
        borderRadius: "8px",
        maxWidth: "400px",
        width: "100%",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        textAlign: "center"
    }
};

const buttonStyles = {
    bid: {
        marginTop: "16px",
        padding: "10px 16px",
        backgroundColor: "#007BFF",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer"
    },
    close: {
        marginTop: "8px",
        padding: "10px 16px",
        backgroundColor: "#DC3545",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer"
    }
};

export default Modal;