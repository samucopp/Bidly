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
            console.log('Respuesta del servidor:', response);  // Para debugging
    
            if (response && response.userInfo) {
                // Verificamos que la respuesta tenga la estructura esperada
                const { userInfo } = response;
    
                // Guardamos los datos en cookies de manera más segura
                try {
                    if (response.token) {
                        Cookies.set('token', response.token, { secure: true });
                    }
                    
                    // Guardamos la información del usuario
                    if (userInfo.userId) {
                        Cookies.set('userId', userInfo.userId, { secure: true });
                    }
                    if (userInfo.userName) {
                        Cookies.set('userName', userInfo.userName, { secure: true });
                    }
                    if (userInfo.userAvatar) {
                        Cookies.set('userAvatar', userInfo.userAvatar, { secure: true });
                    }
    
                    // Indicamos éxito al usuario
                    setStatus({
                        type: 'success',
                        message: '¡Login exitoso!'
                    });
    
                    // Cerramos el modal y actualizamos la página
                    setTimeout(() => {
                        onClose();
                        window.location.reload();
                    }, 1500);
    
                } catch (cookieError) {
                    console.error('Error al guardar cookies:', cookieError);
                    throw new Error('Error al guardar la sesión');
                }
            } else {
                // Si no hay userInfo en la respuesta, consideramos que las credenciales son incorrectas
                console.error('Respuesta sin datos de usuario:', response);
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

                        {/*  <div className="forgot-password">
                            <a href="#">Forgot your password?</a>
                        </div> */}

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