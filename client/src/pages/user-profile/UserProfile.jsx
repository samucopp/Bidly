import React, { useState } from 'react';
import AuctionCarrusel from '../../components/carrusels/AuctionCarrusel';
import GenericModal from '../../components/modals/GenericModal';
import './UserProfile.css';

const activeBids = {
    "total": 170,
    "page": 1,
    "totalPages": 17,
    "auctions": [
        {
            "_id": "678fd5c621f2309c37fe4951",
            "title": "Apple iPhone 14",
            "description": "Latest model of the Apple iPhone with 128GB storage.",
            "images": [
                "iphone14.jpg"
            ],
            "category": {
                "_id": "678fd5c6d89f46faf69a295b",
                "name": "Electronics"
            },
            "startingPrice": 1000,
            "sellerId": {
                "_id": "678fd5c6e8764660b14a24f9",
                "name": "Alice Johnson"
            },
            "startTime": "2025-01-21T17:13:42.474Z",
            "endTime": "2025-01-28T17:13:42.474Z",
            "status": "active",
            "createdAt": "2025-01-21T17:13:42.474Z",
            "__v": 1,
            "followers": [],
            "minIncrement": 1,
            "updatedAt": "2025-01-21T17:14:00.996Z"
        },
        {
            "_id": "678fd5c621f2309c37fe4952",
            "title": "Apple iPhone 14 Max",
            "description": "Latest model of the Apple iPhone with 128GB storage.",
            "images": [
                "iphone14Max.jpg"
            ],
            "category": {
                "_id": "678fd5c6d89f46faf69a295b",
                "name": "Electronics"
            },
            "startingPrice": 1000,
            "minIncrement": 50,
            "sellerId": {
                "_id": "678fd5c6e8764660b14a24f9",
                "name": "Alice Johnson"
            },
            "startTime": "2025-01-21T17:13:42.475Z",
            "endTime": "2025-01-21T17:13:42.475Z",
            "status": "closed",
            "createdAt": "2025-01-21T17:13:42.475Z",
            "__v": 1,
            "followers": [],
            "updatedAt": "2025-01-21T17:15:00.871Z",
            "winnerId": "678fd5c6e8764660b14a24fa"
        },
        {
            "_id": "678fd5c621f2309c37fe4953",
            "title": "Samsung Galaxy S23",
            "description": "High-performance smartphone with 256GB storage.",
            "images": [
                "galaxy_s23.jpg"
            ],
            "category": {
                "_id": "678fd5c6d89f46faf69a295b",
                "name": "Electronics"
            },
            "startingPrice": 900,
            "sellerId": {
                "_id": "678fd5c6e8764660b14a24fa",
                "name": "Bob Smith"
            },
            "startTime": "2025-01-21T17:13:42.476Z",
            "endTime": "2025-01-23T17:13:42.476Z",
            "status": "active",
            "createdAt": "2025-01-21T17:13:42.476Z",
            "__v": 1,
            "followers": [],
            "minIncrement": 1,
            "updatedAt": "2025-01-21T17:14:01.039Z"
        },
        {
            "_id": "678fd5c621f2309c37fe4954",
            "title": "Sony WH-1000XM5",
            "description": "Premium noise-canceling wireless headphones with up to 30 hours of battery life.",
            "images": [
                "sony_headphones.jpg"
            ],
            "category": {
                "_id": "678fd5c6d89f46faf69a295b",
                "name": "Electronics"
            },
            "startingPrice": 400,
            "sellerId": {
                "_id": "678fd5c6e8764660b14a24fb",
                "name": "Carol Williams"
            },
            "startTime": "2025-01-21T17:13:42.478Z",
            "endTime": "2025-01-24T17:13:42.478Z",
            "status": "active",
            "createdAt": "2025-01-21T17:13:42.478Z",
            "__v": 1,
            "followers": [],
            "minIncrement": 1,
            "updatedAt": "2025-01-21T17:14:01.050Z"
        },
        {
            "_id": "678fd5c621f2309c37fe4955",
            "title": "Dell XPS 13",
            "description": "Ultra-slim laptop with Intel i7 processor.",
            "images": [
                "dell_xps13.jpg"
            ],
            "category": {
                "_id": "678fd5c6d89f46faf69a295b",
                "name": "Electronics"
            },
            "startingPrice": 1200,
            "sellerId": {
                "_id": "678fd5c6e8764660b14a24fc",
                "name": "Dave Brown"
            },
            "startTime": "2025-01-21T17:13:42.479Z",
            "endTime": "2025-01-26T17:13:42.479Z",
            "status": "active",
            "createdAt": "2025-01-21T17:13:42.479Z",
            "__v": 1,
            "followers": [],
            "minIncrement": 1,
            "updatedAt": "2025-01-21T17:14:01.061Z"
        }]
};
const upcomingBids = {
    "total": 170,
    "page": 1,
    "totalPages": 17,
    "auctions": [
        {
            "_id": "678fd5c621f2309c37fe4951",
            "title": "Apple iPhone 14",
            "description": "Latest model of the Apple iPhone with 128GB storage.",
            "images": [
                "iphone14.jpg"
            ],
            "category": {
                "_id": "678fd5c6d89f46faf69a295b",
                "name": "Electronics"
            },
            "startingPrice": 1000,
            "sellerId": {
                "_id": "678fd5c6e8764660b14a24f9",
                "name": "Alice Johnson"
            },
            "startTime": "2025-01-21T17:13:42.474Z",
            "endTime": "2025-01-28T17:13:42.474Z",
            "status": "active",
            "createdAt": "2025-01-21T17:13:42.474Z",
            "__v": 1,
            "followers": [],
            "minIncrement": 1,
            "updatedAt": "2025-01-21T17:14:00.996Z"
        },
        {
            "_id": "678fd5c621f2309c37fe4952",
            "title": "Apple iPhone 14 Max",
            "description": "Latest model of the Apple iPhone with 128GB storage.",
            "images": [
                "iphone14Max.jpg"
            ],
            "category": {
                "_id": "678fd5c6d89f46faf69a295b",
                "name": "Electronics"
            },
            "startingPrice": 1000,
            "minIncrement": 50,
            "sellerId": {
                "_id": "678fd5c6e8764660b14a24f9",
                "name": "Alice Johnson"
            },
            "startTime": "2025-01-21T17:13:42.475Z",
            "endTime": "2025-01-21T17:13:42.475Z",
            "status": "closed",
            "createdAt": "2025-01-21T17:13:42.475Z",
            "__v": 1,
            "followers": [],
            "updatedAt": "2025-01-21T17:15:00.871Z",
            "winnerId": "678fd5c6e8764660b14a24fa"
        },
        {
            "_id": "678fd5c621f2309c37fe4953",
            "title": "Samsung Galaxy S23",
            "description": "High-performance smartphone with 256GB storage.",
            "images": [
                "galaxy_s23.jpg"
            ],
            "category": {
                "_id": "678fd5c6d89f46faf69a295b",
                "name": "Electronics"
            },
            "startingPrice": 900,
            "sellerId": {
                "_id": "678fd5c6e8764660b14a24fa",
                "name": "Bob Smith"
            },
            "startTime": "2025-01-21T17:13:42.476Z",
            "endTime": "2025-01-23T17:13:42.476Z",
            "status": "active",
            "createdAt": "2025-01-21T17:13:42.476Z",
            "__v": 1,
            "followers": [],
            "minIncrement": 1,
            "updatedAt": "2025-01-21T17:14:01.039Z"
        },
        {
            "_id": "678fd5c621f2309c37fe4954",
            "title": "Sony WH-1000XM5",
            "description": "Premium noise-canceling wireless headphones with up to 30 hours of battery life.",
            "images": [
                "sony_headphones.jpg"
            ],
            "category": {
                "_id": "678fd5c6d89f46faf69a295b",
                "name": "Electronics"
            },
            "startingPrice": 400,
            "sellerId": {
                "_id": "678fd5c6e8764660b14a24fb",
                "name": "Carol Williams"
            },
            "startTime": "2025-01-21T17:13:42.478Z",
            "endTime": "2025-01-24T17:13:42.478Z",
            "status": "active",
            "createdAt": "2025-01-21T17:13:42.478Z",
            "__v": 1,
            "followers": [],
            "minIncrement": 1,
            "updatedAt": "2025-01-21T17:14:01.050Z"
        },
        {
            "_id": "678fd5c621f2309c37fe4955",
            "title": "Dell XPS 13",
            "description": "Ultra-slim laptop with Intel i7 processor.",
            "images": [
                "dell_xps13.jpg"
            ],
            "category": {
                "_id": "678fd5c6d89f46faf69a295b",
                "name": "Electronics"
            },
            "startingPrice": 1200,
            "sellerId": {
                "_id": "678fd5c6e8764660b14a24fc",
                "name": "Dave Brown"
            },
            "startTime": "2025-01-21T17:13:42.479Z",
            "endTime": "2025-01-26T17:13:42.479Z",
            "status": "active",
            "createdAt": "2025-01-21T17:13:42.479Z",
            "__v": 1,
            "followers": [],
            "minIncrement": 1,
            "updatedAt": "2025-01-21T17:14:01.061Z"
        }]
};
const myAuctions = {
    "total": 170,
    "page": 1,
    "totalPages": 17,
    "auctions": [
        {
            "_id": "678fd5c621f2309c37fe4951",
            "title": "Apple iPhone 14",
            "description": "Latest model of the Apple iPhone with 128GB storage.",
            "images": [
                "iphone14.jpg"
            ],
            "category": {
                "_id": "678fd5c6d89f46faf69a295b",
                "name": "Electronics"
            },
            "startingPrice": 1000,
            "sellerId": {
                "_id": "678fd5c6e8764660b14a24f9",
                "name": "Alice Johnson"
            },
            "startTime": "2025-01-21T17:13:42.474Z",
            "endTime": "2025-01-28T17:13:42.474Z",
            "status": "active",
            "createdAt": "2025-01-21T17:13:42.474Z",
            "__v": 1,
            "followers": [],
            "minIncrement": 1,
            "updatedAt": "2025-01-21T17:14:00.996Z"
        },
        {
            "_id": "678fd5c621f2309c37fe4952",
            "title": "Apple iPhone 14 Max",
            "description": "Latest model of the Apple iPhone with 128GB storage.",
            "images": [
                "iphone14Max.jpg"
            ],
            "category": {
                "_id": "678fd5c6d89f46faf69a295b",
                "name": "Electronics"
            },
            "startingPrice": 1000,
            "minIncrement": 50,
            "sellerId": {
                "_id": "678fd5c6e8764660b14a24f9",
                "name": "Alice Johnson"
            },
            "startTime": "2025-01-21T17:13:42.475Z",
            "endTime": "2025-01-21T17:13:42.475Z",
            "status": "closed",
            "createdAt": "2025-01-21T17:13:42.475Z",
            "__v": 1,
            "followers": [],
            "updatedAt": "2025-01-21T17:15:00.871Z",
            "winnerId": "678fd5c6e8764660b14a24fa"
        },
        {
            "_id": "678fd5c621f2309c37fe4953",
            "title": "Samsung Galaxy S23",
            "description": "High-performance smartphone with 256GB storage.",
            "images": [
                "galaxy_s23.jpg"
            ],
            "category": {
                "_id": "678fd5c6d89f46faf69a295b",
                "name": "Electronics"
            },
            "startingPrice": 900,
            "sellerId": {
                "_id": "678fd5c6e8764660b14a24fa",
                "name": "Bob Smith"
            },
            "startTime": "2025-01-21T17:13:42.476Z",
            "endTime": "2025-01-23T17:13:42.476Z",
            "status": "active",
            "createdAt": "2025-01-21T17:13:42.476Z",
            "__v": 1,
            "followers": [],
            "minIncrement": 1,
            "updatedAt": "2025-01-21T17:14:01.039Z"
        },
        {
            "_id": "678fd5c621f2309c37fe4954",
            "title": "Sony WH-1000XM5",
            "description": "Premium noise-canceling wireless headphones with up to 30 hours of battery life.",
            "images": [
                "sony_headphones.jpg"
            ],
            "category": {
                "_id": "678fd5c6d89f46faf69a295b",
                "name": "Electronics"
            },
            "startingPrice": 400,
            "sellerId": {
                "_id": "678fd5c6e8764660b14a24fb",
                "name": "Carol Williams"
            },
            "startTime": "2025-01-21T17:13:42.478Z",
            "endTime": "2025-01-24T17:13:42.478Z",
            "status": "active",
            "createdAt": "2025-01-21T17:13:42.478Z",
            "__v": 1,
            "followers": [],
            "minIncrement": 1,
            "updatedAt": "2025-01-21T17:14:01.050Z"
        },
        {
            "_id": "678fd5c621f2309c37fe4955",
            "title": "Dell XPS 13",
            "description": "Ultra-slim laptop with Intel i7 processor.",
            "images": [
                "dell_xps13.jpg"
            ],
            "category": {
                "_id": "678fd5c6d89f46faf69a295b",
                "name": "Electronics"
            },
            "startingPrice": 1200,
            "sellerId": {
                "_id": "678fd5c6e8764660b14a24fc",
                "name": "Dave Brown"
            },
            "startTime": "2025-01-21T17:13:42.479Z",
            "endTime": "2025-01-26T17:13:42.479Z",
            "status": "active",
            "createdAt": "2025-01-21T17:13:42.479Z",
            "__v": 1,
            "followers": [],
            "minIncrement": 1,
            "updatedAt": "2025-01-21T17:14:01.061Z"
        }]
};

const user = {
    name: "Estefania",
    email: "gestefania@gmail.com",
    avatar: "https://bidly-products.s3.eu-north-1.amazonaws.com/uploads/users/default-avatar/mujer-cinco.png",
}


const UserProfile = () => {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isCreateAuctionModalOpen, setIsCreateAuctionModalOpen] = useState(false);
    const [selectedAuctionId, setSelectedAuctionId] = useState(null);

    const handleSettingsClick = () => {
        setIsSettingsOpen(!isSettingsOpen);
    };

    const handleChangeAvatar = () => {
        setModalContent('avatar');
        setIsModalOpen(true);
        setIsSettingsOpen(false);
    };

    const handleChangePassword = () => {
        setModalContent('password');
        setIsModalOpen(true);
        setIsSettingsOpen(false);
    };

    const handleDeleteAuction = (auctionId) => {
        setSelectedAuctionId(auctionId);
        setIsDeleteModalOpen(true);
    };

    const handleCreateNewAuction = () => {
        setIsCreateAuctionModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent(null);
    };

    const AvatarContent = () => (
        <div className="modal-content">
            <h2>Change Avatar</h2>
            <input type="file" accept="image/*" />
            <button onClick={() => {
                // hay que meter controllador 
                closeModal();
            }}>Save</button>
        </div>
    );

    const PasswordContent = () => (
        <div className="modal-content">
            <h2>Change Password</h2>
            <input type="password" placeholder="Current Password" />
            <input type="password" placeholder="New Password" />
            <input type="password" placeholder="Confirm New Password" />
            <button onClick={() => {
                // hay que meter el controlador
                closeModal();
            }}>Save</button>
        </div>
    );


    const DeleteAuctionContent = () => (
        <div className="modal-content">
            <h2>Delete Auction</h2>
            <p>Are you sure you want to delete this auction?</p>
            <div className="modal-actions">
                <button
                    className="cancel-button"
                    onClick={() => setIsDeleteModalOpen(false)}
                >
                    Cancel
                </button>
                <button
                    className="delete-button"
                    onClick={() => {
                        // Aquí iría tu controlador para borrar la subasta
                        console.log('Deleting auction:', selectedAuctionId);
                        setIsDeleteModalOpen(false);
                    }}
                >
                    Delete
                </button>
            </div>
        </div>
    );


    const CreateAuctionContent = () => (
        <div className="modal-content">
            <h2>Create New Auction</h2>
            <form className="auction-form">
                <input type="text" placeholder="Title" />
                <textarea placeholder="Description" />
                <input type="number" placeholder="Starting Price" />
                <input type="file" accept="image/*" multiple />
                <select>
                    <option value="">Select Category</option>
                    <option value="electronics">Electronics</option>
                    {/* Más categorías... */}
                </select>
                <div className="date-inputs">
                    <input type="datetime-local" placeholder="Start Date" />
                    <input type="datetime-local" placeholder="End Date" />
                </div>
                <button
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault();
                        // Aquí iría tu controlador para crear la subasta
                        setIsCreateAuctionModalOpen(false);
                    }}
                >
                    Create Auction
                </button>
            </form>
        </div>
    );



    return (
        <div className="profile-container">
            <div className="profile-header">
                <div className="user-info">
                    <img src={user.avatar} alt="Profile" className="avatar" />
                    <h1 className="username">{user.name}</h1>
                </div>
                <div className="settings-dropdown">
                    <button
                        className="settings-button"
                        onClick={handleSettingsClick}
                    >
                        Settings {isSettingsOpen ? '-' : '+'}
                    </button>
                    {isSettingsOpen && (
                        <div className="settings-options">
                            <button onClick={handleChangeAvatar}>Change Avatar</button>
                            <button onClick={handleChangePassword}>Change Password</button>
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
                        {activeBids.auctions.slice(0, 3).map((auction) => (
                            <div key={auction._id} className="auction-card">
                                <button className="favorite-button">♥</button>
                                <img
                                    src="/logo_bidly.png"
                                    alt={auction.title}
                                    className="auction-image"
                                />
                                <h4>{auction.title}</h4>
                                <p>${auction.startingPrice}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="auction-category">
                    <h3>Upcoming Bids</h3>
                    <div className="auction-grid">
                        {upcomingBids.auctions.slice(0, 3).map((auction) => (
                            <div key={auction._id} className="auction-card">
                                <button className="favorite-button">♥</button>
                                <img
                                    src="logo_bidly.png"
                                    alt={auction.title}
                                    className="auction-image"
                                />
                                <h4>{auction.title}</h4>
                                <p className='upcoming-start-price'>${auction.startingPrice}</p>
                                <p className='upcoming-start-date'>Start Date: {new Date(auction.startTime).toLocaleDateString()}</p>
                                <p className='upcoming-end-date'>End Date: {new Date(auction.endTime).toLocaleDateString()} 8:30 pm</p>

                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* My Auctions */}
            <section class="my-auctions">
                <h2>My Auctions</h2>
                <div class="auctions-list">
                    {myAuctions.auctions.map((auction) => (
                        <div key={auction._id} class="auction-detail">
                            <div className="auction-image-container">
                                <img
                                    src={"/favicon.png"}
                                    alt={auction.title}
                                    className="img-my-auctions"
                                />
                            </div>
                            <div class="auction-info">
                                <h3>Lot {auction._id.slice(-4)}, {auction.title}</h3>
                                <p>{auction.description}</p>
                                <p>Category: {auction.category.name}</p>
                            </div>
                            <div class="auction-price">
                                <span class="price-label">STARTING PRICE</span>
                                <span class="price">{auction.startingPrice} €</span>
                                <div class="auction-dates">
                                    <p>Start Date: {new Date(auction.startTime).toLocaleDateString()}</p>
                                    <p>End Date: {new Date(auction.endTime).toLocaleDateString()} 8:30 pm</p>
                                </div>
                            </div>
                            <div class="auction-actions">
                                <button
                                    class="delete-button"
                                    onClick={() => handleDeleteAuction(auction._id)}
                                >
                                    DELETE
                                </button>
                                <button
                                    className="create-auction-button"
                                    onClick={handleCreateNewAuction}
                                >
                                    CREATE NEW BID
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Auction History */}

            <section className="auction-history">
                <AuctionCarrusel />
            </section>

            <GenericModal
                isOpen={isModalOpen}
                onClose={closeModal}
                className="settings-modal"
            >
                {modalContent === 'avatar' && <AvatarContent />}
                {modalContent === 'password' && <PasswordContent />}
            </GenericModal>

            <GenericModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                className="delete-modal"
            >
                <DeleteAuctionContent />
            </GenericModal>

            <GenericModal
                isOpen={isCreateAuctionModalOpen}
                onClose={() => setIsCreateAuctionModalOpen(false)}
                className="create-auction-modal"
            >
                <CreateAuctionContent />
            </GenericModal>
        </div>

    );
};

export default UserProfile;