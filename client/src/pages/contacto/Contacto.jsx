import React from "react";
import "./contacto.css";

const ContactPage = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
      <h1 className="contact-title">Contact</h1>
        <p>We're here to help you with any questions about our auctions!</p>
        <p><strong>Address:</strong> Calle del Perro, 5, 48001 Bilbao</p>
        <p><strong>Phone:</strong> +34 944 123 456</p>
        <p><strong>Email:</strong> contact@bidly.com</p>
        <p><strong>Hours:</strong> Monday to Friday, 9:00 AM - 6:00 PM</p>
        <div className="map-container">
        <h2>Find Us</h2>
        <iframe
          title="Google Maps Bidly"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.553635914505!2d-2.9333796845265623!3d43.263802179137316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4e50a469bcd1b9%3A0x5b8f59bbaafaf05e9!2sCalle%20del%20Perro%2C%205%2C%2048001%20Bilbao%2C%20Bizkaia%2C%20España!5e0!3m2!1ses!2ses!4v1616653935111!5m2!1ses!2ses"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      </div>
      <form className="contact-form">
        <label>
          Name:
          <input type="text" name="name" placeholder="Your name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" placeholder="Your email" />
        </label>
        <label>
          Message:
          <textarea name="message" placeholder="Write your message"></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
      
    </div>
  );
};

export default ContactPage;
