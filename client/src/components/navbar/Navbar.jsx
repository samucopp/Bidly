import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from '../modals/LoginModal';
import './Navbar.css';

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    const toggleMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const handleLoginClick = (e) => {
        e.preventDefault(); // Previene la navegación a /login
        setIsLoginOpen(true);
    };

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-content">
                        {/* Logo */}
                        <div className="navbar-logo">
                            <a href="/">BIDLY</a>
                        </div>

                        {/* Main Navigation */}
                        <div className="navbar-links">
                            <Link to="/acerca-de" className="menu-item" onClick={toggleMenu}>ACERCA DE</Link>
                            <Link to="/catalogo" className="menu-item" onClick={toggleMenu}>CATÁLOGO</Link>
                            <Link to="/contacto" className="menu-item" onClick={toggleMenu}>CONTACTO</Link>
                        </div>

                        {/* Right side - Search and Auth */}
                        <div className="navbar-right">
                            {/* Search Bar */}
                            <div className="search-container">
                                <input
                                    type="text"
                                    placeholder="Search by keyword"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <button className="search-button">
                                    <span>&#128269;</span>
                                </button>
                            </div>

                            {/* Auth Links */}
                            <div className="auth-links">
                                <a href="/login" onClick={handleLoginClick}>Iniciar sesión</a>
                                <a href="/registro">Regístrate</a>
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