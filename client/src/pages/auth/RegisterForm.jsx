import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { register, showError } from '../../api/apiService';
import './RegisterForm.css';

const RegisterForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        passwordRepeat: '',
        address: '',
        avatar: '/avatars/hombre-uno.png'
    });

    // Predefined avatar options
    const avatarOptions = [
        { id: 1, path: '/avatars/hombre-uno.png', alt: 'Avatar 1' },
        { id: 2, path: '/avatars/mujer-uno.png', alt: 'Avatar 2' },
        { id: 3, path: '/avatars/hombre-dos.png', alt: 'Avatar 3' },
        { id: 4, path: '/avatars/mujer-dos.png', alt: 'Avatar 4' },
        { id: 5, path: '/avatars/hombre-tres.png', alt: 'Avatar 5' },
        { id: 6, path: '/avatars/mujer-tres.png', alt: 'Avatar 6' },
        { id: 7, path: '/avatars/hombre-cuatro.png', alt: 'Avatar 7' },
        { id: 8, path: '/avatars/mujer-cuatro.png', alt: 'Avatar 8' },
        { id: 9, path: '/avatars/hombre-cinco.png', alt: 'Avatar 9' }
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleAvatarSelect = (avatarPath) => {
        setFormData(prevState => ({
            ...prevState,
            avatar: avatarPath
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validaciones
        if (!formData.name?.trim()) {
            showError('Name required');
            return;
        }
        if (!formData.email?.trim()) {
            showError('Email required');
            return;
        }
        if (!formData.password) {
            showError('Password required');
            return;
        }
        if (formData.password !== formData.passwordRepeat) {
            showError('Passwords don´t match');
            return;
        }
        if (!formData.address?.trim()) {
            showError('Address required');
            return;
        }

        try {
            await register(formData);
            navigate('/login');
        } catch (error) {
            if (error.message === 'El correo ya esta registrado') {
                showError('User already exists');
            } else {
                showError('Registration error: ' + error.message);
            }
        }
    };

    return (
        <div className="register-container">
            <div className="register-logo">
                <Link to="/">
                    <img src="/logo_bidly.png" alt="bidly" />
                </Link>
            </div>

            <form className="register-form" onSubmit={handleSubmit}>
                <h1 className="register-title">Create Your Account</h1>

                <div className="avatar-section">
                    <label className="avatar-title">Choose your avatar</label>
                    <div className="avatar-grid">
                        {avatarOptions.map((avatar) => (
                            <div
                                key={avatar.id}
                                className={`avatar-option ${formData.avatar === avatar.path ? 'selected' : ''}`}
                                onClick={() => handleAvatarSelect(avatar.path)}
                            >
                                <img
                                    src={avatar.path}
                                    alt={avatar.alt}
                                    className="avatar-image"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="input-field"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input-field"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="input-field"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="passwordRepeat"
                    placeholder="Confirm Password"
                    className="input-field"
                    value={formData.passwordRepeat}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    className="input-field"
                    value={formData.address}
                    onChange={handleChange}
                    required
                />

                <div className="button-container">
                    <button type="submit" className="submit-button">
                        CREATE
                    </button>
                    <button
                        type="button"
                        className="submit-button"
                        onClick={() => navigate('/')}
                    >
                        CANCEL
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;