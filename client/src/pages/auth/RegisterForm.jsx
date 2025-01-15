import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
        navigate('/'); // Navega a la página de login al cancelar
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validaciones básicas
        if (!formData.alias?.trim()) {
            showError('El alias es obligatorio');
            return;
        }
        if (!formData.first_name?.trim()) {
            showError('El nombre es obligatorio');
            return;
        }
        if (!formData.last_name?.trim()) {
            showError('El apellido es obligatorio');
            return;
        }

        if (!formData.email?.trim()) {
            showError('El email es obligatorio');
            return;
        }

        if (!formData.password) {
            showError('La contraseña es obligatoria');
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            showError('Las contraseñas no coinciden');
            return;
        }

        if (!formData.direction) {
            showError('La direccion es obligatoria');
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
            if (error.message === 'Usuario ya existente') {
                showError('Usuario ya existente');
            } else {
                showError('Error en el registro');
            }
        }
    };
    return (
        <>
            <h1 className='title-register-form'>aquí iría el logotipo</h1>
            <div className="register-container">
                <form className="register-form" onSubmit={handleSubmit}>
                    <h1 className="title">Crear Cuenta </h1>

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
                        placeholder="Nombre"
                        className="input-field"
                        value={formData.first_name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="last_name" 
                        placeholder="Apellido"
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
                        placeholder="Contraseña"
                        className="input-field"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirmación contraseña"
                        className="input-field"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="direction"
                        name="direction"
                        placeholder="Dirección"
                        className="input-field"
                        value={formData.direction}
                        onChange={handleChange}
                        required
                    />

                    <button
                        type="submit"
                        className="submit-button">
                        CREAR
                    </button>
                    <button
                        type="button"
                        className="submit-button"
                        onClick={handleCancel}
                    >
                        CANCELAR
                    </button>

                </form>
            </div>

        </>
    );
};

export default RegisterForm;