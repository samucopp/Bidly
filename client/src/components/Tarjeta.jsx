const Tarjeta = ({ datosPuja }) => {
    return (
        <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px", maxWidth: "300px" }}>
            <h2>{datosPuja.Nombre}</h2>
            <img
                src={datosPuja.Imagen}
                alt={datosPuja.Nombre}
                style={{ width: "100%", borderRadius: "8px" }}
            />
            <p>Puja de Salida: {datosPuja.PujadeSalida} €</p> {/*Solo si la puja no ha comenzado*/}
            <p>Puja Actual: {datosPuja.PujaActual} €</p> {/*Solo si la puja ya ha comenzado*/}
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
                onClick={() => alert("Esto llevará a puja mnas adelante")}
            >
                Pujar
            </button>
        </div>
    );
};

export default Tarjeta;
