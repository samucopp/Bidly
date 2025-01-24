import React from "react";
import "./contacto.css";

const ContactPage = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        {/* Columna izquierda - Formulario */}
        <div className="contact-left">
          <h1 className="contact-title">Contacto</h1>
          <p className="contact-subtitle">¡Estamos aquí para ayudarte con todas tus dudas sobre nuestras subastas!</p>
          <form className="contact-form">
            <label>
              Nombre:
              <input type="text" name="name" placeholder="Tu nombre" />
            </label>
            <label>
              Email:
              <input type="email" name="email" placeholder="Tu email" />
            </label>
            <label>
              Mensaje:
              <textarea name="message" placeholder="Escribe tu mensaje"></textarea>
            </label>
            <button type="submit">Enviar</button>
          </form>
        </div>

        {/* Columna derecha - Información y mapa */}
        <div className="contact-right">
          <div className="contact-info">
            <p><strong>Nombre:</strong> Bidly</p>
            <p><strong>Dirección:</strong> Calle del Perro, 5, 48001 Bilbao</p>
            <p><strong>Teléfono:</strong> +34 944 123 456</p>
            <p><strong>Email:</strong> contacto@bidly.com</p>
            <p><strong>Horario:</strong> Lunes a Viernes, 9:00 - 18:00</p>
          </div>
          
          <div className="map-container">
            <h2>Encuéntranos</h2>
            <iframe
              title="Google Maps Bidly"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.553635914505!2d-2.9333796845265623!3d43.263802179137316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4e50a469bcd1b9%3A0x5b8f59bbaafaf05e9!2sCalle%20del%20Perro%2C%205%2C%2048001%20Bilbao%2C%20Bizkaia%2C%20España!5e0!3m2!1ses!2ses!4v1616653935111!5m2!1ses!2ses"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;