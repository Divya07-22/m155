import React, { useState, useEffect } from 'react';

const ViewSOS = () => {
    const [sosRequests, setSosRequests] = useState([]);

    useEffect(() => {
        // Simulate fetching SOS data (you can replace it with an API call)
        setSosRequests([
            { id: 1, name: 'SOS 1', location: 'City A', description: 'Help needed' },
            { id: 2, name: 'SOS 2', location: 'City B', description: 'Medical aid required' },
        ]);
    }, []);

    return (
        <div style={styles.container}>
            <div style={styles.sosContainer}>
                <h2 style={styles.title}>View SOS Requests</h2>
                <ul style={styles.sosList}>
                    {sosRequests.map((sos) => (
                        <li key={sos.id} style={styles.sosItem}>
                            <h3 style={styles.sosName}>{sos.name}</h3>
                            <p style={styles.sosDetails}>
                                Location: {sos.location}<br />
                                Description: {sos.description}
                            </p>
                        </li>
                    ))}
                </ul>
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
        backgroundImage: 'url("https://img.freepik.com/free-vector/abstract-soft-colorful-watercolor-texture-background-design_1055-13589.jpg?semt=ais_hybrid")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px',
    },
    sosContainer: {
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
    sosList: {
        listStyleType: 'none',
        padding: 0,
    },
    sosItem: {
        backgroundColor: '#f9f9f9',
        padding: '15px',
        marginBottom: '15px',
        borderRadius: '8px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    },
    sosName: {
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#333',
    },
    sosDetails: {
        fontSize: '14px',
        color: '#666',
    },
};

export default ViewSOS;
