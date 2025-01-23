import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GenericModal from '../modals/GenericModal';
import { login } from '../../api/user.js';
import Cookies from 'js-cookie';
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
            console.log('Respuesta del servidor:', response);

            if (response && response.userInfo) {
                try {
                    // Guardamos el token
                    Cookies.set('token', response.token);

                    // Guardamos los datos del usuario
                    Cookies.set('userId', response.userInfo.userId);
                    Cookies.set('userName', response.userInfo.userName);
                    if (response.userInfo.userAvatar) {
                        Cookies.set('userAvatar', response.userInfo.userAvatar);
                    }

                    setStatus({
                        type: 'success',
                        message: '¡Login exitoso!'
                    });

                    setTimeout(() => {
                        window.dispatchEvent(new Event('auth-change'));
                        // Limpiamos los datos del formulario
                        setFormData({
                            email: '',
                            password: ''
                        });
                        // Cerramos el modal
                        onClose();
                    }, 1500);
                    
                } catch (cookieError) {
                    console.error('Error al guardar cookies:', cookieError);
                    throw new Error('Error al guardar la sesión');
                }
            } else {
                setStatus({
                    type: 'error',
                    message: 'Credenciales incorrectas'
                });
            }
        } catch (error) {
            console.error('Error durante el login:', error);
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