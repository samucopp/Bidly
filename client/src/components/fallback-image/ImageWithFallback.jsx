import React from "react";

const ImageWithFallback = ({ src, alt, fallback }) => {
    const handleError = (event) => {
        event.target.src = fallback; // Cambiar la fuente a la imagen alternativa
    };

    return <img src={src} alt={alt} onError={handleError} />;
};

export default ImageWithFallback;

/*port React from "react";
import ImageWithFallback from "./ImageWithFallback";

const App = () => {
    return (
        <div>
            <h1>Ejemplo de Imagen con Fallback</h1>
            <ImageWithFallback 
                src="https://example.com/imagen-no-existe.jpg" 
                alt="Mi Imagen"
                fallback="https://via.placeholder.com/150"
            />
        </div>
    );
};

export default App;*/