import React, { useState } from 'react';
import GenericModal from '../modals/GenericModal';
import './LoginModal.css';

const LoginModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <GenericModal isOpen={isOpen} onClose={onClose}>
            <div className="login-content">
                <h2>Inicia sesión para poder pujar en subasta</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            placeholder="Email"
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type={showPassword ? "text" : "password"}
                            value={formData.password}
                            onChange={(e) => setFormData({...formData, password: e.target.value})}
                            placeholder="Password"
                        />
                        <button
                            type="button"
                            className="toggle-password"
                            onClick={() => setShowPassword(!showPassword)}
                        />
                    </div>

                    <div className="forgot-password">
                        <a href="#">¿Olvidaste tu contraseña?</a>
                    </div>

                    <button type="submit" className="signin-button">
                        INICIA SESIÓN
                    </button>

                    <button type="button" className="create-account-button">
                        CREA UNA CUENTA
                    </button>
                </form>
            </div>
        </GenericModal>
    );
};

export default LoginModal;