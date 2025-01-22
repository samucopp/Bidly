import React, { useState } from 'react';
import AuctionCarrusel from '../../components/carrusels/AuctionCarrusel';
import GenericModal from '../../components/modals/GenericModal';
import ImageWithFallback from '../../components/fallback-image/ImageWithFallback';
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
    address: "Calle 123, Ciudad",
    avatar: "https://bidly-products.s3.eu-north-1.amazonaws.com/uploads/users/default-avatar/mujer-cinco.png",
    password: "1234",
}



const UserProfile = () => {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isCreateAuctionModalOpen, setIsCreateAuctionModalOpen] = useState(false);
    const [selectedAuctionId, setSelectedAuctionId] = useState(null);
    const [userData, setUserData] = useState(user);

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

        const handleSave = () => {
            if (selectedFile) {
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
                </select>
                <div className="date-inputs">
                    <input type="datetime-local" placeholder="Start Date" />
                    <input type="datetime-local" placeholder="End Date" />
                </div>
                <button
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault();
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
                <h2>Following Auctions</h2> {/*getauctivefollowedauctions*/}

                <div className="auction-category">
                    <h3>Active Bids</h3>
                    <div className="auction-grid">
                        {activeBids.auctions.slice(0, 3).map((auction) => (
                            <div key={auction._id} className="auction-card">
                                <button className="favorite-button">♥</button>
                                <ImageWithFallback
                                    src={auction.images[0]}
                                    alt={auction.title}
                                    fallback="/logo_bidly.png"
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
                                <ImageWithFallback
                                    src={auction.images[0]}
                                    alt={auction.title}
                                    fallback="/logo_bidly.png"
                                    className="auction-image"

                                />
                                <h4>{auction.title}</h4>
                                <p className="upcoming-start-price">${auction.startingPrice}</p>
                                <p className="upcoming-start-date">Start Date: {new Date(auction.startTime).toLocaleDateString()}</p>
                                <p className="upcoming-end-date">End Date: {new Date(auction.endTime).toLocaleDateString()} 8:30 pm</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="my-auctions">
                <h2>My Auctions</h2> {/*getauctionsbyOwner*/}
                <div className="auctions-list">
                    {myAuctions.auctions.map((auction) => (
                        <div key={auction._id} className="auction-detail">
                            <div className="auction-image-container">
                                <img
                                    src="/favicon.png"
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
                                    <p>End Date: {new Date(auction.endTime).toLocaleDateString()} 8:30 pm</p>
                                </div>
                            </div>
                            <div className="auction-actions">
                                <button
                                    className="delete-button"
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

            <section className="auction-history"> {/*getauctionswherebiddone*/}
                <AuctionCarrusel /> 
            </section>

            <GenericModal
                isOpen={isModalOpen}
                onClose={closeModal}
                className="settings-modal"
            >
                {modalContent === 'avatar' && <AvatarContent />}
                {modalContent === 'myData' && <MyDataContent />}
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