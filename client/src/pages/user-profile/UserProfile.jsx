import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuctionCarrusel from '../../components/carrusels/AuctionCarrusel';
import GenericModal from '../../components/modals/GenericModal';
import ImageCarousel from "../../components/carrousel/Carrousel.jsx"
import { getActiveFollowedAuctions, getAuctionsByOwner, deleteAuction } from '../../api/auction.js';
import { getUser } from '../../api/user.js';
import { addAuctionToFavorites, removeAuctionFromFavorites } from "../../api/user";
import Cookies from "js-cookie";
import CreateAuctionContent from '../../components/user-profile/CreateAuctionContent';
import './UserProfile.css';

import { uploadProfileAvatar } from '../../api/uploadFiles.js';
const UserProfile = ({ }) => {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [isFavorite, setIsFavorite] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isCreateAuctionModalOpen, setIsCreateAuctionModalOpen] = useState(false);
    const [selectedAuction, setSelectedAuction] = useState(null);
    const [activeBids, setActiveBids] = useState({ auctions: [] });
    const [upcomingBids, setUpcomingBids] = useState({ auctions: [] });
    const [auctionsHistory, setAuctionsHistory] = useState({ auctions: [] });
    const [myAuctions, setMyAuctions] = useState({ auctions: [] });
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const userId = Cookies.get('userId');
                if (!userId) {
                    // redirigir a login
                    throw new Error('No user ID found');
                }

                // Fetch user data
                const userResponse = await getUser(userId);
                setUserData(userResponse);

                // Fetch active followed auctions
                const activeAuctions = await getActiveFollowedAuctions(userId, true);
                console.log("activeAuctions", activeAuctions);
                if (activeAuctions?.success) {
                    setActiveBids(activeAuctions);
                }
                // Fetch user's auctions
                const userAuctions = await getAuctionsByOwner(userId, false, 1, 300);
                console.log("myauctions:",userAuctions)
                if (userAuctions?.success) {
                    setMyAuctions(userAuctions);
                }

                const auctionsHistory = await getAuctionsByOwner(userId, false, 1, 300);
                if (auctionsHistory?.success) {
                    setAuctionsHistory(auctionsHistory);
                }

            } catch (err) {
                setError(err.message);
                console.error('Error fetching data:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); // Array vacío significa que solo se ejecuta al montar el componente

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!userData) {
        return <div>No user data available</div>;
    }

    const favoriteIcon = "/fav-icons/heart-full.png"
    const notFavoriteIcon = "/fav-icons/heart-empty.png"
    const handleFavoriteClick = async (sellerId, auctionId) => {
        try {
            if (isFavorite) {
                console.log(sellerId, auctionId);
                await removeAuctionFromFavorites(sellerId, auctionId);
                setIsFavorite(false);
            } else {
                await addAuctionToFavorites(sellerId, auctionId);
                setIsFavorite(true);
            }
        } catch (error) {
            console.error("Error gestionando favoritos:", error);
        }
    };
    const handleCardClick = (auctionId) => {
        navigate(`/auction/${auctionId}`);
    };


    const handleSettingsClick = () => {
        setIsSettingsOpen(!isSettingsOpen);
    };

    const handleChangeAvatar = () => {
        setModalContent('avatar');
        setIsModalOpen(true);
        setIsSettingsOpen(false);
    };

    const handleMyData = () => {
        setModalContent('myData');
        setIsModalOpen(true);
        setIsSettingsOpen(false);
    };

    const handleCreateNewAuction = () => {
        setIsCreateAuctionModalOpen(true);
    };


    const handleDeleteAuction = async (auctionId) => {

        const removedAuction = await deleteAuction(auctionId);
        if (removedAuction?.success) {
            const userId = Cookies.get('userId');
            const userAuctions = await getAuctionsByOwner(userId);
                if (userAuctions?.success) {

                    setMyAuctions(userAuctions);
                }
        }
    }

    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent(null);
    };
    const AvatarContent = () => {
        const [previewImage, setPreviewImage] = useState(null);
        const [selectedFile, setSelectedFile] = useState(null);

        const handleImageChange = (e) => {
            const file = e.target.files[0];
            setSelectedFile(file);
            if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setPreviewImage(reader.result);
                };
                reader.readAsDataURL(file);
            }
        };

        const handleSave = async () => {
            if (selectedFile) {
                const formdata = new FormData();
                formdata.append('file', selectedFile);
                const updatedAvatar = await uploadProfileAvatar(userData._id,formdata);
                console.log("updatedAvatar", updatedAvatar);
                // lógica guardar en su sesion con el id de usuario 
                setUserData(prev => ({
                    ...prev,
                    avatar: previewImage
                }));

            }
            closeModal();
        };

        return (
            <div className="modal-content">
                <h2>Change Avatar</h2>
                <div className="current-avatar">
                    <img
                        src={userData.avatar}
                        alt="Current avatar"
                        className="avatar-preview"
                    />
                </div>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                />
                <button onClick={handleSave}>Save</button>
            </div>
        );
    };

    const MyDataContent = () => {
        const [formData, setFormData] = useState({
            name: userData.name,
            email: userData.email,
            address: userData.address,
            password: userData.password
        });

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            setUserData(formData);
            closeModal();
        };

        return (
            <div className="modal-content">
                <h2>My Data</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                    />
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Address"
                    />
                    <input
                        type="text"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                    />

                    <button type="submit">Save Changes</button>
                </form>
            </div>
        );
    };


    const DeleteAuctionContent = ({ onClose, auctionId, updateAuctions }) => {
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState('');

        const handleConfirmDelete = async () => {
            setLoading(true);
            try {
                const response = await deleteAuction(auctionId);
                if (response && (response.success || response.succes)) {
                    const userId = Cookies.get('userId');
                    const userAuctions = await getAuctionsByOwner(userId);
                    if (userAuctions?.success) {
                        updateAuctions(userAuctions);
                    }
                    onClose();
                } else {
                    throw new Error(response?.message || 'Error al eliminar la subasta');
                }
            } catch (error) {
                setError(error.message || 'Error al eliminar la subasta');
                console.error('Error al eliminar la subasta:', error);
            } finally {
                setLoading(false);
            }
        };

        return (
            <div className="modal-content">
                <h2>Delete Auction</h2>
                {error && <div className="error-message">{error}</div>}
                <p>Are you sure you want to delete this auction?</p>
                <div className="modal-actions">
                    <button
                        className="cancel-button"
                        onClick={onClose}
                        disabled={loading}
                    >
                        Cancel
                    </button>
                    <button
                        className="delete-button"
                        onClick={handleConfirmDelete}
                        disabled={loading}
                    >
                        {loading ? 'Deleting...' : 'DELETE'}
                    </button>
                </div>
            </div>
        );
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
                        Edit Profile {isSettingsOpen ? '-' : '+'}
                    </button>
                    {isSettingsOpen && (
                        <div className="settings-options">
                            <button onClick={handleChangeAvatar}>Change Avatar</button>
                            <button onClick={handleMyData}>My Data</button>
                        </div>
                    )}
                </div>
            </div>

            <section className="auctions-section">
                <h2>Following Auctions</h2>
                <h2>Following Auctions</h2>

                <div className="auction-category">
                    <div className="auction-grid">
                        {activeBids.auctions.slice(0, 100).map((auction) => (
                            <div key={auction._id} className="auction-card" onClick={() => handleCardClick(auction._id)}>
                                <button
                                    className="following-favorite-button"
                                    onClick={() => handleFavoriteClick(auction.sellerId._id, auction._id)}
                                >
                                    <img
                                        src={isFavorite ? favoriteIcon : notFavoriteIcon}
                                        alt={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
                                        style={{ width: "36px", height: "36px" }}
                                    />
                                </button>

                                <div className="following-auction-carousel">
                                    <ImageCarousel
                                        images={auction.images}
                                        defaultImage={"logo_bidly.png"}
                                    />
                                </div>

                            <h4>{auction.title}</h4>
                            <p>${auction.startingPrice}</p>

                                <div className="my-profile-carousel-item-status">
                                    <span className={`status-badge ${auction.status}`}>
                                        {auction.status}
                                    </span>   {/*Meter otra info en vez del status, son todas finalizadas*/}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="my-auctions">
                <h2>My Auctions</h2>
                <button
                    className="create-auction-button"
                    onClick={handleCreateNewAuction}
                >
                    CREATE AUCTION
                </button>

                <div className="auctions-list">
                    {myAuctions.auctions.map((auction) => (
                        <div key={auction._id} className="auction-detail">
                            <div className="auction-image-container">
                                <img
                                    src={auction.images[0]}
                                    alt={auction.title}
                                    className="img-my-auctions"
                                />
                            </div>
                            <div className="auction-info">
                                <h3>Lot {auction._id.slice(-4)}, {auction.title}</h3>
                                <p>{auction.description}</p>
                                <p>Category: {auction.category.name}</p>
                            </div>
                            <div className="auction-price">
                                <span className="price-label">STARTING PRICE</span>
                                <span className="price">{auction.startingPrice} €</span>
                                <div className="auction-dates">
                                    <p>Start Date: {new Date(auction.startTime).toLocaleDateString()}</p>
                                    <p>End Date: {new Date(auction.endTime).toLocaleDateString()}$</p>
                                </div>
                                <button
                                    className="delete-button"
                                    onClick={() => handleDeleteAuction(auction._id)}
                                >
                                    DELETE
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="auction-history"> {/*getauctionswherebiddone*/}
                <AuctionCarrusel auctions={auctionsHistory.auctions} />
            </section>

            <GenericModal
                isOpen={isModalOpen}
                onClose={closeModal}
                className="settings-modal"
            >
                {modalContent === 'avatar' && <AvatarContent />}
                {modalContent === 'myData' && <MyDataContent />}
                {modalContent === 'delete' && <DeleteAuctionContent />}
            </GenericModal>

            <GenericModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                className="delete-modal"
            >
                {selectedAuction && (
                    <DeleteAuctionContent
                        onClose={() => setIsDeleteModalOpen(false)}
                        auctionId={selectedAuction}
                        updateAuctions={setMyAuctions}
                    />
                )}
            </GenericModal>

            <GenericModal
                isOpen={isCreateAuctionModalOpen}
                onClose={() => setIsCreateAuctionModalOpen(false)}
                className="create-auction-modal"
            >
                <CreateAuctionContent
                    onClose={() => setIsCreateAuctionModalOpen(false)}
                    updateAuctions={setMyAuctions}
                />
            </GenericModal>
        </div>
    );
};

export default UserProfile;