import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginModal from '../modals/LoginModal';
import { BASE_URL } from '../../const/api'; 
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    const [userData, setUserData] = useState(null);


    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem('token');
            const userId= localStorage.getItem ('userId'); // luego quitarlo para pruebas
            
            if (token) {
                try {
                    const response = await fetch(`${BASE_URL}/user/${userId}`, {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json'
                        }
                    });

                    if (response.ok) {
                        const data = await response.json();
                        setUserData(data);
                        setIsAuth(true);
                    } else {
                        handleLogout();
                    }
                } catch (error) {
                    console.error('Error al obtener datos del usuario:', error);
                    handleLogout();
                }
            } else {
                setIsAuth(false);
                setUserData(null);
            }
        };

        checkAuth();
    }, []);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLoginClick = (e) => {
        e.preventDefault();
        setIsLoginOpen(true);
        setIsMobileMenuOpen(false); 
    };

    const handleLogout = (e) => {
        if (e) {
            e.preventDefault();
        }
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        setIsAuth(false);
        setUserData(null);
        navigate('/', { replace: true });
    };

    const handleRegisterClick = (e) => {
        e.preventDefault();
        navigate('/register');
        setIsMobileMenuOpen(false); // Añadido para cerrar el menú móvil al registrarse
    };

    const getAvatarUrl = () => {
        return userData?.avatar || '/hombre-cinco.png';
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
                            <Link to="/about-us" className="menu-item">ABOUT US</Link>
                            <Link to="/catalog" className="menu-item">CATALOG</Link>
                            <Link to="/contact" className="menu-item">CONTACT</Link>
                        </div>

                        {/* Right side - Search and Auth */}
                        <div className="navbar-right">
                            {/* Search Bar */}
                            <div className="search-container">
                                <input
                                    type="text"
                                    placeholder="Search product..."
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
                                {isAuth ? (
                                    <>
                                        <div className="user-avatar">
                                            <img 
                                                src={getAvatarUrl()} 
                                                alt={`${userData?.name || 'User'}'s avatar`}
                                                className="avatar-img" 
                                            />
                                        </div>
                                        <a href="/" onClick={handleLogout}>Log Out</a>
                                    </>
                                ) : (
                                    <>
                                        <a href="/" onClick={handleLoginClick}>Log In</a>
                                        <a href="/register" onClick={handleRegisterClick}>Create Account</a>
                                    </>
                                )}
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
                    <Link to="/about-us" className="menu-item" onClick={toggleMenu}>ABOUT US</Link>
                    <Link to="/catalog" className="menu-item" onClick={toggleMenu}>CATALOG</Link>
                    <Link to="/contact" className="menu-item" onClick={toggleMenu}>CONTACT</Link>
                    <div className="auth-mobile-links">
                        {isAuth ? (
                            <>
                                <div className="user-avatar-mobile">
                                    <img 
                                        src={getAvatarUrl()} 
                                        alt={`${userData?.name || 'User'}'s avatar`}
                                        className="avatar-img" 
                                    />
                                </div>
                                <a href="/" className="menu-item-logout" onClick={handleLogout}>Log Out</a>
                            </>
                        ) : (
                            <>
                                <a href="/" className="menu-item-login" onClick={handleLoginClick}>Log In</a>
                                <a href="/register" className="menu-item-register" onClick={handleRegisterClick}>Create Account</a>
                            </>
                        )}
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