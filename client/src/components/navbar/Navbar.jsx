import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMobileMenuOpen(false);
      };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-content">
                    {/* Logo */}
                    <div className="navbar-logo">
                        <a href="/">BIDLY</a>
                    </div>

                    {/* Main Navigation */}
                    <div className="navbar-links">
                        <Link to="/acerca-de" className="menu-item" onClick={toggleMenu}>A CERCA DE</Link>
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
                            <a href="/login">Iniciar sesión</a>
                            <a href="/how-to-sell">Regístrate</a>
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
                <Link to="/acerca-de" className="menu-item" onClick={toggleMenu}>A CERCA DE</Link>
                <Link to="/catalogo" className="menu-item" onClick={toggleMenu}>CATÁLOGO</Link>
                <Link to="/contacto" className="menu-item" onClick={toggleMenu}>CONTACTO</Link>
            </div>
        </nav>
    );
};

export default Navbar;