
import React, { useState } from 'react';

const UpdateDisaster = () => {
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);
    const [image, setImage] = useState(null);

    const [disasterType, setDisasterType] = useState('');
    const [affectedPeople, setAffectedPeople] = useState('');
    const [date, setDate] = useState('');

    // Inline styles
    const styles = {
        container: {
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
            position: 'relative',
        },
        overlay: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            zIndex: -1,
        },
        form: {
            backgroundColor: '#fff',
            padding: '30px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            width: '100%',
            maxWidth: '500px',
        },
        label: {
            marginBottom: '10px',
            fontWeight: 'bold',
            fontSize: '16px',
            color: '#333',
        },
        input: {
            width: '100%',
            padding: '10px',
            marginBottom: '15px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            fontSize: '14px',
        },
        button: {
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
        },
        buttonHover: {
            backgroundColor: '#45a049',
        },
        imagePreview: {
            width: '100%',
            marginTop: '15px',
            borderRadius: '8px',
        },
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
                    setError(`Error getting location: ${err.message}`);
                }
            );
        } else {
            setError('Geolocation is not supported by this browser.');
        }
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/disaster/update', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    disasterType,
                    location,
                    affectedPeople,
                    date,
                    image,
                }),
            });

            const result = await response.json();
            if (response.ok) {
                alert('Disaster updated successfully!');
            } else {
                alert('Error updating disaster: ' + result.message);
            }
        } catch (error) {
            console.error('Error updating disaster:', error);
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.overlay}></div>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div>
                    <label style={styles.label}>Disaster Type:</label>
                    <input
                        type="text"
                        placeholder="Enter disaster type"
                        value={disasterType}
                        onChange={(e) => setDisasterType(e.target.value)}
                        style={styles.input}
                    />
                </div>
                <div>
                    <label style={styles.label}>Location:</label>
                    <input
                        type="text"
                        placeholder="Enter new disaster location"
                        style={styles.input}
                        value={location?.latitude ? `${location.latitude}, ${location.longitude}` : ''}
                        readOnly
                    />
                </div>
                <div>
                    <label style={styles.label}>Affected People:</label>
                    <input
                        type="number"
                        placeholder="Enter number of affected people"
                        value={affectedPeople}
                        onChange={(e) => setAffectedPeople(e.target.value)}
                        style={styles.input}
                    />
                </div>
                <div>
                    <label style={styles.label}>Date of Disaster:</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        style={styles.input}
                    />
                </div>

                <div>
                    <button
                        type="button"
                        style={styles.button}
                        onClick={getLocation}
                        onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                        onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
                    >
                        Get Live Location
                    </button>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>

                <div>
                    <label style={styles.label}>Upload Disaster Image:</label>
                    <input type="file" accept="image/*" onChange={handleImageUpload} style={styles.input} />
                    {image && <img src={image} alt="Disaster" style={styles.imagePreview} />}
                </div>

                <button
                    type="submit"
                    style={styles.button}
                    onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                    onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
                >
                    Update
                </button>
            </form>
        </div>
    );
};

export default UpdateDisaster;
