import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../api/apiService';
import GenericModal from '../modals/GenericModal';
import './LoginModal.css';

const LoginModal = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [status, setStatus] = useState({ type: null, message: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ type: null, message: '' });

        try {
            const response = await login(formData);

            if (response.token) {
                // Guardar el token en localStorage
                localStorage.setItem('token', response.token);

                setStatus({
                    type: 'success',
                    message: 'Login exitoso! Redirigiendo...'
                });
                onClose();
                window.location.reload();

            }
        } catch (error) {
            setStatus({
                type: 'error',
                message: error.message || 'Error en el inicio de sesión'
            });
        }
    };

    const handleCreateAccount = () => {
        onClose();
        navigate('/register');
    };

    return (
        <>
            <GenericModal isOpen={isOpen} onClose={onClose}>
                <div className="login-content">
                    <h2>Please log in to bid on the auction</h2>

                    {/* Mensajes de estado */}
                    {status.message && (
                        <div className={`form-status ${status.type}`}>
                            {status.message}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="Email"
                                required
                            />
                        </div>

                        <div className="form-group password-group">
                            <input
                                type={showPassword ? "text" : "password"}
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                placeholder="Password"
                                required
                            />
                            <button
                                type="button"
                                className={`toggle-password ${showPassword ? 'hide' : ''}`}
                                onClick={() => setShowPassword(!showPassword)}
                            />
                        </div>

                        <div className="forgot-password">
                            <a href="#">Forgot your password?</a>
                        </div>

                        <button type="submit" className="signin-button">
                            LOG IN
                        </button>

                        <button
                            type="button"
                            className="create-account-button"
                            onClick={handleCreateAccount}
                        >
                            CREATE ACCOUNT
                        </button>
                    </form>
                </div>
            </GenericModal>

        </>
    );
};

export default LoginModal;