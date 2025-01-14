const Tarjeta = ({ datosPuja }) => {
    return (
        <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px", maxWidth: "300px" }}>
            <h2>{datosPuja.Nombre}</h2>
            <img
                src={datosPuja.Imagen}
                alt={datosPuja.Nombre}
                style={{ width: "100%", borderRadius: "8px" }}
            />
            <p>Precio Estimado: ${datosPuja.PrecioEstimado}</p>
            <p>Precio de Salida: ${datosPuja.PreciodeSalida}</p>
        </div>
    );
};

export default Tarjeta;
