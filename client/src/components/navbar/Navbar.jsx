import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginModal from '../modals/LoginModal';
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLoginClick = (e) => {
        e.preventDefault(); // Previene la navegación a /login
        setIsLoginOpen(true);
    };

    const handleRegisterClick = (e) => {
        e.preventDefault(); // Previene la navegación a /register
        navigate('/registro');
    };



    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-content">
                        {/* Logo */}
                        <div className="navbar-logo">
                            <Link to="/" >
                                <img
                                    className='logo'
                                    src="/logo_bidly.png"
                                    alt="bidly"
                                />
                            </Link>
                        </div>

                        {/* Main Navigation */}
                        <div className="navbar-links">
                            <Link to="/acerca-de" className="menu-item">ACERCA DE</Link>
                            <Link to="/catalogo" className="menu-item">CATÁLOGO</Link>
                            <Link to="/contacto" className="menu-item">CONTACTO</Link>
                        </div>

                        {/* Right side - Search and Auth */}
                        <div className="navbar-right">
                            {/* Search Bar */}
                            <div className="search-container">
                                <input
                                    type="text"
                                    placeholder="Buscar artículo..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <button className="search-button">
                                    <svg
                                        fill="none"
                                        viewBox="0 0 20 20"
                                        width="20"
                                        height="20"
                                    >
                                        <path
                                            d="M11.856 11.856l4.3 4.3"
                                            stroke="#222"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M12.693 8.155a4.538 4.538 0 11-9.077 0 4.538 4.538 0 019.077 0z"
                                            stroke="#222"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                            </div>

                            {/* Auth Links */}
                            <div className="auth-links">
                                <a href="/login" onClick={handleLoginClick}>Iniciar sesión</a>
                                <a href="/registro" onClick={handleRegisterClick}>Regístrate</a>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="mobile-menu-button"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <div className="hamburger-line"></div>
                            <div className="hamburger-line"></div>
                            <div className="hamburger-line"></div>
                        </button>
                    </div>
                </div>


                {/* Mobile Menu */}
                <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                    <Link to="/acerca-de" className="menu-item" onClick={toggleMenu}>ACERCA DE</Link>
                    <Link to="/catalogo" className="menu-item" onClick={toggleMenu}>CATÁLOGO</Link>
                    <Link to="/contacto" className="menu-item" onClick={toggleMenu}>CONTACTO</Link>
                    <div className="auth-mobile-links">
                        <a href="/login" className="menu-item-login" onClick={handleLoginClick}>Iniciar sesión</a>
                        <a href="/registro" className="menu-item-register" onClick={handleRegisterClick}>Regístrate</a>
                    </div>
                </div>
            </nav>

            {/* Modal de Login */}
            <LoginModal
                isOpen={isLoginOpen}
                onClose={() => setIsLoginOpen(false)}
            />
        </>
    );
};

export default Navbar;