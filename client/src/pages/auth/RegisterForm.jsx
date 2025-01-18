import React, { useState } from 'react';
import { useNavigate, Link} from 'react-router-dom';
import './RegisterForm.css';

const RegisterForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        alias: '',
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirmPassword: '',
        direction: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleCancel = (e) => {
        e.preventDefault();
        navigate('/'); 
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validaciones básicas
        if (!formData.alias?.trim()) {
            showError('Alias required');
            return;
        }
        if (!formData.first_name?.trim()) {
            showError('Name required');
            return;
        }
        if (!formData.last_name?.trim()) {
            showError('Last Name required');
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

        if (formData.password !== formData.confirmPassword) {
            showError('Passwords don´t match');
            return;
        }

        if (!formData.direction) {
            showError('Direction required');
            return;
        }

        try {
            const body = {
                alias: formData.alias.trim(),
                first_name: formData.first_name.trim(),
                last_name: formData.last_name.trim(),
                email: formData.email.trim(),
                password: formData.password,
                password_confirmation: formData.confirmPassword,
                direction: formData.direction
            };

            console.log('Datos a enviar:', body);

            await register(body);
            navigate('/login');

        } catch (error) {
            // Verificar directamente el mensaje de error que establecimos en fetchData
            if (error.message === 'User already exists') {
                showError('User already exists');
            } else {
                showError('Registration error');
            }
        }
    };
    return (
        <div className="register-container">
            <div className="register-logo">
                <Link to="/">
                    <img src="/logo_bidly.png" alt="bidly"/>
                </Link>
            </div>
            
            <form className="register-form" onSubmit={handleSubmit}>
                <h1 className="register-title">Create Account</h1>
                
                <input
                    type="text"
                    name="alias"
                    placeholder="Alias"
                    className="input-field"
                    value={formData.alias}
                    onChange={handleChange}
                    required
                />
                    <input
                        type="text"
                        name="first_name"
                        placeholder="Name"
                        className="input-field"
                        value={formData.first_name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="last_name"
                        placeholder="Last Name"
                        className="input-field"
                        value={formData.last_name}
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
                        name="confirmPassword"
                        placeholder="Password Confirmation"
                        className="input-field"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="direction"
                        name="direction"
                        placeholder="Direction"
                        className="input-field"
                        value={formData.direction}
                        onChange={handleChange}
                        required
                    />

                    <button
                        type="submit"
                        className="submit-button">
                        CREATE
                    </button>
                    <button
                        type="button"
                        className="submit-button"
                        onClick={handleCancel}
                    >
                        CANCEL
                    </button>

                </form>
            </div>
    );
};

export default RegisterForm;