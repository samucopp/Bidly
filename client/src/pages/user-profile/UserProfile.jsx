import React, { useEffect, useState } from 'react';
import './UserProfile.css';

const UserProfile = () => {
    const [userData, setUserData] = useState({
        name: '',
        avatar: ''
    });

    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [myAuctions, setMyAuctions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchUserAuctions = async () => {
        try {
            // Obtenemos el token y el userId del localStorage o donde lo tengas almacenado
            const token = localStorage.getItem('token');
            const userId = localStorage.getItem('userId'); // O extraerlo del token si está ahí

            const response = await fetch(`/api/auctions/${userId}/owner`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();

            if (!data.success) {
                throw new Error(data.message);
            }

            setMyAuctions(data.auctions);
            setLoading(false);
        } catch (error) {
            setError('Error al cargar las subastas');
            setLoading(false);
            console.error('Error:', error);
        }
    };
    useEffect(() => {
        fetchUserAuctions();
    }, []);


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

    const handleDeleteAuction = async (auctionId) => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`/api/auctions/${auctionId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
    
            const data = await response.json();
    
            if (data.success) {
                // Actualizar el estado eliminando la subasta
                setMyAuctions(myAuctions.filter(auction => auction._id !== auctionId));
            } else {
                throw new Error(data.message);
            }
        } catch (error) {
            console.error('Error al eliminar la subasta:', error);
            // Aquí podrías mostrar un mensaje de error al usuario
        }
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
            {/* My Auctions Section */}
            <section className="my-auctions">
                <h2>My Auctions</h2>
                {loading ? (
                    <div className="loading">Cargando subastas...</div>
                ) : error ? (
                    <div className="error">{error}</div>
                ) : (
                    myAuctions.map((auction) => (
                        <div key={auction._id} className="auction-detail">
                            <div className="auction-info">
                                <h3>lote {auction._id}, {auction.title}</h3>
                                <p>{auction.description}</p>
                                {auction.Category && (
                                    <p>Categoría: {auction.Category.title}</p>
                                )}
                            </div>
                            <div className="auction-price">
                                <span className="price-label">PRECIO DE SALIDA</span>
                                <span className="price">{auction.startingPrice} €</span>
                                <div className="auction-dates">
                                    <p>Fecha inicio de la subasta: {new Date(auction.startDate).toLocaleDateString()}</p>
                                    <p>Fin de la subasta: {new Date(auction.endDate).toLocaleString()}</p>
                                </div>
                            </div>
                            <div className="auction-actions">
                                <button
                                    className="delete-button"
                                    onClick={() => handleDeleteAuction(auction._id)}
                                >
                                    BORRAR
                                </button>
                                <button className="create-bid-button">CREATE NEW BID</button>
                            </div>
                        </div>
                    ))
                )}
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