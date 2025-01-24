import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import LoginModal from "../modals/LoginModal";
import { logout } from "../../api/user";
import "./Navbar.css";
import SearchBar from '../search-bar/SearchBar';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [searchQuery, setSearchQuery] = useState("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        if (location.state?.openLoginModal) {
            setIsLoginOpen(true);
            navigate("/", { replace: true, state: {} });
        }
    }, [location, navigate]);

    useEffect(() => {
        const checkAuth = () => {
            const userId = Cookies.get("userId");
            if (userId) {
                setIsAuth(true);
                setUserData({
                    id: userId,
                    avatar: Cookies.get("userAvatar") || "/hombre-cinco.png",
                    name: Cookies.get("userName"),
                });
            } else {
                setIsAuth(false);
                setUserData(null);
            }
        };

        checkAuth();

        // Escuchar eventos de cambio de auth
        const handleAuthChange = () => {
            console.log("Evento auth-change recibido"); // Para debugging
            checkAuth();
        };

        window.addEventListener("auth-change", handleAuthChange);

        return () => {
            window.removeEventListener("auth-change", handleAuthChange);
        };
    }, []);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLoginClick = (e) => {
        e.preventDefault();
        setIsLoginOpen(true);
        setIsMobileMenuOpen(false);
    };

    const handleLogout = async (e) => {
        if (e) {
            e.preventDefault();
        }
        // Reemplazamos localStorage por Cookies
        await logout();
        Cookies.remove("userId");
        Cookies.remove("userAvatar");
        Cookies.remove("userName");
        // Cookies.remove("auth-cookie");
        setIsAuth(false);
        setUserData(null);
        navigate("/", { replace: true });
    };

    const handleRegisterClick = (e) => {
        e.preventDefault();
        navigate("/register");
        setIsMobileMenuOpen(false);
    };

    const getAvatarUrl = () => {
        return userData?.avatar || "/hombre-cinco.png";
    };

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-content">
                        {/* Logo */}
                        <div className="navbar-logo">
                            <Link to="/">
                                <img
                                    className="logo"
                                    src="/logo_bidly.png"
                                    alt="bidly"
                                />
                            </Link>
                        </div>

                        {/* Main Navigation */}
                        <div className="navbar-links">
                            <Link
                                to="/about-us"
                                className={`menu-item ${location.pathname === '/about-us' ? 'active' : ''}`}
                            >
                                ABOUT US
                            </Link>

                            <Link
                                to="/catalog"
                                className={`menu-item ${location.pathname === '/catalog' ? 'active' : ''}`}
                            >
                                CATALOG
                            </Link>
                            <Link
                                to="/contact"
                                className={`menu-item ${location.pathname === '/contact' ? 'active' : ''}`}
                            >
                                CONTACT
                            </Link>

                        </div>

                        {/* Right side - Search and Auth */}
                        <div className="navbar-right">
                            {/* Search Bar */}
                            <div className="search-container">
                                <SearchBar />
                            </div>
                            {/* Auth Links */}
                            <div className="auth-links">
                                {isAuth ? (
                                    <>
                                        <Link
                                            to="/my-profile"
                                            className="user-avatar"
                                        >
                                            <img
                                                src={getAvatarUrl()}
                                                alt={`${userData?.name || "User"
                                                    }'s avatar`}
                                                className="avatar-img"
                                            />
                                        </Link>
                                        <a href="/" onClick={handleLogout}>
                                            Log Out
                                        </a>
                                    </>
                                ) : (
                                    <>
                                        <a href="/" onClick={handleLoginClick}>
                                            Log In
                                        </a>
                                        <a
                                            href="/register"
                                            onClick={handleRegisterClick}
                                        >
                                            Create Account
                                        </a>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="mobile-menu-button"
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                        >
                            <div className="hamburger-line"></div>
                            <div className="hamburger-line"></div>
                            <div className="hamburger-line"></div>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`mobile-menu ${isMobileMenuOpen ? "active" : ""
                        }`}
                >
                    <Link
                        to="/about-us"
                        className={`menu-item ${location.pathname === '/about-us' ? 'active' : ''}`}
                        onClick={toggleMenu}
                    >
                        ABOUT US
                    </Link>
                    <Link
                        to="/catalog"
                        className={`menu-item ${location.pathname === '/catalog' ? 'active' : ''}`}
                        onClick={toggleMenu}
                    >
                        CATALOG
                    </Link>
                    <Link
                        to="/contact"
                        className={`menu-item ${location.pathname === '/contact' ? 'active' : ''}`}
                        onClick={toggleMenu}
                    >
                        CONTACT
                    </Link>
                    <div className="auth-mobile-links">
                        {isAuth ? (
                            <>
                                <Link to="/my-profile" className="user-avatar">
                                    <img
                                        src={getAvatarUrl()}
                                        alt={`${userData?.name || "User"
                                            }'s avatar`}
                                        className="avatar-img"
                                    />
                                </Link>
                                <a
                                    href="/"
                                    className="menu-item-logout"
                                    onClick={handleLogout}
                                >
                                    Log Out
                                </a>
                            </>
                        ) : (
                            <>
                                <a
                                    href="/"
                                    className="menu-item-login"
                                    onClick={handleLoginClick}
                                >
                                    Log In
                                </a>
                                <a
                                    href="/register"
                                    className="menu-item-register"
                                    onClick={handleRegisterClick}
                                >
                                    Create Account
                                </a>
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
