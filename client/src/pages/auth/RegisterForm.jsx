import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { register } from '../../api/user';
import './RegisterForm.css';


const RegisterForm = () => {
    const navigate = useNavigate();
    const avatarOptions = [
        { id: 1, path: 'https://bidly-products.s3.eu-north-1.amazonaws.com/uploads/users/default-avatar/hombre-cinco.png', alt: 'Avatar 1', title: 'Mr.' },
        { id: 2, path: 'https://bidly-products.s3.eu-north-1.amazonaws.com/uploads/users/default-avatar/mujer-cinco.png', alt: 'Avatar 2', title: 'Mrs.' },
    ];

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        passwordRepeat: '',
        address: '',
        avatar: avatarOptions[0].path // el primero avatar por defecto 
    });



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
    const showError = (message) => {
    
        alert(message); // O usar un sistema de notificaciones más sofisticado
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.avatar) {
            showError('Avatar selection required');
            return;
        }
    
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
            await register({
                name: formData.name,
                email: formData.email,
                password: formData.password,
                passwordRepeat: formData.passwordRepeat,
                address: formData.address,
                avatar: formData.avatar
            });
    
            navigate('/', {
                state: { openLoginModal: true }
            });
    
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
                                className="avatar-option"
                                onClick={() => handleAvatarSelect(avatar.path)}
                            >
                                <span className="avatar-title-text">{avatar.title}</span>
                                <div className={`avatar-image-container ${formData.avatar === avatar.path ? 'selected' : ''}`}>
                                    <img
                                        src={avatar.path}
                                        alt={avatar.alt}
                                        className="avatar-image"
                            
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <input
                    type="text"
                    name="name"
                    placeholder="Username"
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