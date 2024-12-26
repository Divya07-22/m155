

import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
const UpdateShelter = () => {
    const { id: shelterId } = useParams()
    const [formData, setFormData] = useState({
        shelterId: shelterId||'',
        name: '',
        locationText: '',
        capacity: '',
        availableSpace: '',
        contact: '',
        image: null,
    });
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f4f4f9',
        padding: '20px',
        backgroundImage: 'url("https://img.freepik.com/free-vector/abstract-soft-colorful-watercolor-texture-background-design_1055-13589.jpg?semt=ais_hybrid")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    const formStyle = {
        backgroundColor: '#fff',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '500px',
    };

    const labelStyle = {
        marginBottom: '10px',
        fontWeight: 'bold',
        fontSize: '16px',
        color: '#333',
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        marginBottom: '15px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        fontSize: '14px',
        color: '#333',
    };

    const buttonStyle = {
        padding: '12px 20px',
        backgroundColor: '#4CAF50',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        width: '100%',
        transition: 'background-color 0.3s',
        marginBottom: '10px',
    };

    const buttonHoverStyle = {
        backgroundColor: '#45a049',
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({ ...formData, image: file });
        }
    };

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setLocation({ latitude, longitude });
                    setError(null);
                },
                (err) => {
                    setError('Error getting location: ' + err.message);
                }
            );
        } else {
            setError('Geolocation is not supported by this browser.');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate fields before submitting
        if (!formData.name || !formData.locationText || !formData.capacity || !formData.contact) {
            alert("Please fill in all required fields.");
            return;
        }

        const formDataToSubmit = new FormData();
        formDataToSubmit.append('name', formData.name);
        formDataToSubmit.append('locationText', formData.locationText);
        formDataToSubmit.append('capacity', formData.capacity);
        formDataToSubmit.append('availableSpace', formData.availableSpace);
        formDataToSubmit.append('contact', formData.contact);
        if (formData.image) formDataToSubmit.append('image', formData.image);

        try {
            const response = await fetch(`http://localhost:5000/api/shelter/update/${shelterId}`, {
                method: 'PUT',
                body: formDataToSubmit,
            });

            if (!response.ok) {
                throw new Error('Failed to update shelter');
            }

            const data = await response.json();
            console.log('Shelter updated:', data);
            alert('Shelter updated successfully!');
            setFormData({
                name: '',
                locationText: '',
                capacity: '',
                availableSpace: '',
                contact: '',
                image: null,
            });
            setLocation(null);
        } catch (error) {
            console.error('Error updating shelter:', error);
            alert('Error updating shelter: ' + error.message);
        }
    };

    return (
        <div style={containerStyle}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Update Shelter</h2>
            <form onSubmit={handleSubmit} encType="multipart/form-data" style={formStyle}>
                <div>
                    <label style={labelStyle}>Shelter Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name || ''}
                        onChange={handleChange}
                        style={inputStyle}
                        placeholder="Enter shelter name"
                    />
                </div>
                <div>
                    <label style={labelStyle}>Location:</label>
                    <input
                        type="text"
                        name="locationText"
                        value={formData.locationText || ''}
                        onChange={handleChange}
                        style={inputStyle}
                        placeholder="Enter shelter location"
                    />
                </div>
                <div>
                    <label style={labelStyle}>Capacity:</label>
                    <input
                        type="number"
                        name="capacity"
                        value={formData.capacity || ''}
                        onChange={handleChange}
                        style={inputStyle}
                        placeholder="Enter shelter capacity"
                    />
                </div>
                <div>
                    <label style={labelStyle}>Available Space:</label>
                    <input
                        type="number"
                        name="availableSpace"
                        value={formData.availableSpace || ''}
                        onChange={handleChange}
                        style={inputStyle}
                        placeholder="Enter available space"
                    />
                </div>
                <div>
                    <label style={labelStyle}>Contact:</label>
                    <input
                        type="text"
                        name="contact"
                        value={formData.contact || ''}
                        onChange={handleChange}
                        style={inputStyle}
                        placeholder="Enter contact information"
                    />
                </div>

                <div>
                    <label style={labelStyle}>Upload Shelter Image:</label>
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleImageUpload}
                        style={inputStyle}
                    />
                    {formData.image && (
                        <img
                            src={URL.createObjectURL(formData.image)}
                            alt="Shelter"
                            style={{ width: '100%', marginTop: '15px', borderRadius: '8px' }}
                        />
                    )}
                </div>

                <div>
                    <button type="button" onClick={getLocation} style={buttonStyle}>Get My Location</button>
                </div>

                <div>
                    <button type="submit" style={buttonStyle}>Update Shelter</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateShelter;
