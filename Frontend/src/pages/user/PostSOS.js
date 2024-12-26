import React, { useState } from 'react';

const PostSOS = () => {
    const [emergencyType, setEmergencyType] = useState('');
    const [location, setLocation] = useState('');
    const [urgency, setUrgency] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('SOS Details:', { emergencyType, location, urgency });
        // You can send this data to the server here
    };

    return (
        <div style={styles.container}>
            <div style={styles.formContainer}>
                <h2 style={styles.title}>Post SOS</h2>
                <form onSubmit={handleSubmit} style={styles.form}>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Emergency Type:</label>
                        <input
                            type="text"
                            value={emergencyType}
                            onChange={(e) => setEmergencyType(e.target.value)}
                            style={styles.input}
                            required
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Location:</label>
                        <input
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            style={styles.input}
                            required
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Urgency Level:</label>
                        <select
                            value={urgency}
                            onChange={(e) => setUrgency(e.target.value)}
                            style={styles.select}
                            required
                        >
                            <option value="">Select Urgency</option>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                    </div>
                    <button type="submit" style={styles.submitButton}>Submit SOS</button>
                </form>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: 'url("https://img.freepik.com/free-vector/abstract-soft-colorful-watercolor-texture-background-design_1055-13589.jpg?semt=ais_hybrid")', // Replace with your background image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px',
    },
    formContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '600px',
        textAlign: 'center',
    },
    title: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '20px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    },
    inputGroup: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    label: {
        fontSize: '16px',
        color: '#333',
        marginBottom: '5px',
    },
    input: {
        width: '100%',
        padding: '12px',
        fontSize: '16px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9',
        marginBottom: '10px',
    },
    select: {
        width: '100%',
        padding: '12px',
        fontSize: '16px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9',
        marginBottom: '10px',
    },
    submitButton: {
        padding: '14px 20px',
        backgroundColor: '#4CAF50',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        transition: 'background-color 0.3s ease-in-out',
    },
};

export default PostSOS;
