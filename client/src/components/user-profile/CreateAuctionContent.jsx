import { createAuction, getAuctionsByOwner } from '../../api/auction.js';
import { uploadAuctionImages } from '../../api/uploadFiles.js';
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { getAllCategories } from '../../api/category.js';
import './CreateAuctionContent.css';

const CreateAuctionContent = ({ onClose, updateAuctions }) => {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [currentStep, setCurrentStep] = useState('auction');
    const [createdAuctionId, setCreatedAuctionId] = useState(null);
    const [selectedImages, setSelectedImages] = useState([]);
    const [auctionFormData, setAuctionFormData] = useState({
        title: '',
        description: '',
        startingPrice: '',
        minIncrement: 1,
        category: '',
        startTime: '',
        endTime: ''
    });

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await getAllCategories();
                if (Array.isArray(response)) {
                    setCategories(response);
                }
            } catch (error) {
                setError('Error loading categories');
                console.error('Error al obtener categorías:', error);
            }
        };

        fetchCategories();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAuctionFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setSelectedImages(files);
    };

    const handleAuctionSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const sellerId = Cookies.get('userId');
            if (!sellerId) {
                throw new Error('No user ID found');
            }

            // Validar fechas
            const start = new Date(auctionFormData.startTime);
            const end = new Date(auctionFormData.endTime);
            const now = new Date();

            if (start < now) {
                throw new Error('Start time must be in the future');
            }
            if (end <= start) {
                throw new Error('End time must be after start time');
            }

            const auctionDataForApi = {
                ...auctionFormData,
                startingPrice: parseFloat(auctionFormData.startingPrice),
                minIncrement: parseInt(auctionFormData.minIncrement),
                sellerId: sellerId,
                images: [] // Array vacío inicialmente
            };

            const response = await createAuction(auctionDataForApi);
            console.log('Response from createAuction:', response);

            // Verificar tanto 'success' como 'succes' para manejar el error de ortografía
            if (response && (response.success || response.succes) && response.savedAuction) {
                console.log('Auction created successfully:', response.savedAuction);
                setCreatedAuctionId(response.savedAuction._id);
                setCurrentStep('images');
            } else {
                throw new Error(response?.message || 'Error creating auction');
            }

        } catch (error) {
            setError(error.message || 'Error creating auction');
            console.error('Error creating auction:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleImageUpload = async () => {
        if (selectedImages.length === 0) {
            await updateAuctionsList();
            onClose();
            return;
        }

        setLoading(true);
        try {
            const formData = new FormData();
            selectedImages.forEach(image => {
                formData.append('images', image);
            });

            const uploadResponse = await uploadAuctionImages(createdAuctionId, formData);
            console.log('Upload response:', uploadResponse);

            if (uploadResponse && (uploadResponse.success || uploadResponse.succes)) {
                await updateAuctionsList();
                onClose();
            } else {
                throw new Error('Error uploading images');
            }
        } catch (error) {
            setError('Error uploading images. Your auction was created but images failed to upload.');
            console.error('Error uploading images:', error);
        } finally {
            setLoading(false);
        }
    };

    const updateAuctionsList = async () => {
        try {
            const sellerId = Cookies.get('userId');
            const userAuctions = await getAuctionsByOwner(sellerId);
            if (userAuctions && (userAuctions.success || userAuctions.succes)) {
                updateAuctions(userAuctions);
            }
        } catch (error) {
            console.error('Error updating auctions list:', error);
        }
    };

    const skipImageUpload = async () => {
        await updateAuctionsList();
        onClose();
    };

    // Renderizado condicional basado en el paso actual
    if (currentStep === 'images') {
        return (
            <div className="modal-content">
                <h2>Add Images to Your Auction</h2>
                {error && <div className="error-message">{error}</div>}
                <div className="upload-section">
                    <p>Would you like to add images to your auction?</p>
                    <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleFileChange}
                        className="file-input"
                    />
                    {selectedImages.length > 0 && (
                        <div className="selected-files">
                            <p>{selectedImages.length} images selected</p>
                        </div>
                    )}
                    <div className="button-group">
                        <button 
                            onClick={handleImageUpload}
                            disabled={loading}
                            className="primary-button"
                        >
                            {loading ? 'Uploading...' : 'Upload Images'}
                        </button>
                        <button 
                            onClick={skipImageUpload}
                            disabled={loading}
                            className="secondary-button"
                        >
                            Skip
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // Formulario inicial de creación de subasta
    return (
        <div className="modal-content">
            <h2>Create New Auction</h2>
            {error && <div className="error-message">{error}</div>}
            <form className="auction-form" onSubmit={handleAuctionSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={auctionFormData.title}
                    onChange={handleInputChange}
                    required
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    value={auctionFormData.description}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="number"
                    name="startingPrice"
                    placeholder="Starting Price"
                    value={auctionFormData.startingPrice}
                    onChange={handleInputChange}
                    required
                    min="0"
                    step="0.01"
                />
                <input
                    type="number"
                    name="minIncrement"
                    placeholder="Minimum Increment"
                    value={auctionFormData.minIncrement}
                    onChange={handleInputChange}
                    required
                    min="1"
                    max="100"
                />
                <select
                    name="category"
                    value={auctionFormData.category}
                    onChange={handleInputChange}
                    required
                >
                    <option value="">Select Category</option>
                    {categories.map((category) => (
                        <option key={category._id} value={category._id}>
                            {category.name}
                        </option>
                    ))}
                </select>
                <div className="date-inputs">
                    <div className="date-input-container">
                        <label>Start Date</label>
                        <input
                            type="datetime-local"
                            name="startTime"
                            value={auctionFormData.startTime}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="date-input-container">
                        <label>End Date</label>
                        <input
                            type="datetime-local"
                            name="endTime"
                            value={auctionFormData.endTime}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </div>
                <button 
                    type="submit" 
                    disabled={loading}
                >
                    {loading ? 'Creating...' : 'Create Auction'}
                </button>
            </form>
        </div>
    );
};

export default CreateAuctionContent;