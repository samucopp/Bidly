// UserProfile.jsx
import React, { useState } from 'react';
import './UserProfile.css';

const UserProfile = () => {
    const [userData, setUserData] = useState({
        name: 'Lola Flores',
        avatar: '/avatars/mujer-uno.png'
    });

    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    const handleSettingsClick = () => {
        setIsSettingsOpen(!isSettingsOpen);
    };

    const handleChangeAvatar = () => {
        // Aquí iría la lógica para cambiar el avatar
        console.log('Changing avatar...');
        setIsSettingsOpen(false);
    };

    const handleChangePassword = () => {
        // Aquí iría la lógica para cambiar la contraseña
        console.log('Changing password...');
        setIsSettingsOpen(false);
    };

    return (
        <div className="profile-container">
            <div className="profile-header">
                <div className="user-info">
                    <img src={userData.avatar} alt="Profile" className="avatar" />
                    <h1 className="username">{userData.name}</h1>
                </div>
                <div className="settings-dropdown">
                    <button
                        className="settings-button"
                        onClick={handleSettingsClick}
                    >
                        settings  {isSettingsOpen ? '-' : '+'}
                    </button>
                    {isSettingsOpen && (
                        <div className="settings-options">
                            <button onClick={handleChangeAvatar}>change avatar</button>
                            <button onClick={handleChangePassword}>change password</button>
                        </div>
                    )}
                </div>
            </div>

            {/* Following Auctions */}
            <section className="auctions-section">
                <h2>Following Auctions</h2>

                <div className="auction-category">
                    <h3>Active Bids</h3>
                    <div className="auction-grid">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="auction-card">
                                <button className="favorite-button">♥</button>
                                <div className="auction-image"></div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="auction-category">
                    <h3>Upcoming Bids</h3>
                    <div className="auction-grid">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="auction-card">
                                <button className="favorite-button">♥</button>
                                <div className="auction-image"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* My Auctions */}
            <section className="my-auctions">
                <h2>My Auctions</h2>
                <div className="auction-detail">
                    <div className="auction-info">
                        <h3>lote 34567, Espejo Border</h3>
                        <p>Aquí irá la descripción del producto y sus características</p>
                        <p>Aquí irá la descripción del producto y sus características</p>
                        <p>Aquí irá la descripción del producto y sus características</p>
                    </div>
                    <div className="auction-price">
                        <span className="price-label">PRECIO DE SALIDA</span>
                        <span className="price">20 €</span>
                        <div className="auction-dates">
                            <p>Fecha inicio de la subasta: 17/01/2025</p>
                            <p>Fin de la subasta: 18/01/2025 8:30 pm</p>
                        </div>
                    </div>
                </div>
                <div className="auction-actions">
                    <button className="delete-button">BORRAR</button>
                    <button className="create-bid-button">CREATE NEW BID</button>
                </div>
            </section>
            <section className="auction-history">
                <h2>Auction History</h2>
                <div className="history-grid">
                    <div className="history-item">
                        <div className="history-image"></div>
                        <p className="history-title">Tittle 1</p>
                    </div>
                    <div className="history-item">
                        <div className="history-image"></div>
                        <p className="history-title">Tittle 2</p>
                    </div>
                    <div className="history-item">
                        <div className="history-image"></div>
                        <p className="history-title">Tittle 3</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UserProfile;